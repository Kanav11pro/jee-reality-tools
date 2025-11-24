# Setting Up Subscription Expiry Cron Job

This guide explains how to set up an automated cron job in Supabase to expire old subscriptions daily.

## Prerequisites

- Access to your Supabase project dashboard
- Admin privileges on the project

## Setup Steps

### Option 1: Using Supabase Edge Functions (Recommended)

1. **Install Supabase CLI** (if not already installed):
   ```bash
   npm install -g supabase
   ```

2. **Create a new Edge Function**:
   ```bash
   supabase functions new expire-subscriptions
   ```

3. **Edit the function** (`supabase/functions/expire-subscriptions/index.ts`):
   ```typescript
   import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
   import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

   serve(async (req) => {
     const supabaseClient = createClient(
       Deno.env.get('SUPABASE_URL') ?? '',
       Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
     )

     const { data, error } = await supabaseClient.rpc('expire_old_subscriptions')

     if (error) {
       return new Response(
         JSON.stringify({ error: error.message }),
         { status: 500, headers: { 'Content-Type': 'application/json' } }
       )
     }

     return new Response(
       JSON.stringify({ 
         success: true, 
         expired_count: data,
         timestamp: new Date().toISOString()
       }),
       { headers: { 'Content-Type': 'application/json' } }
     )
   })
   ```

4. **Deploy the function**:
   ```bash
   supabase functions deploy expire-subscriptions
   ```

5. **Set up the cron trigger** in Supabase Dashboard:
   - Go to **Database** → **Cron Jobs** (or **Extensions** → **pg_cron**)
   - Click **Create a new cron job**
   - Set schedule: `0 0 * * *` (runs daily at midnight UTC)
   - Set command to call your edge function

### Option 2: Using pg_cron Extension (Direct SQL)

1. **Enable pg_cron extension** (if not already enabled):
   - Go to **Database** → **Extensions**
   - Enable `pg_cron`

2. **Create the cron job** via SQL Editor:
   ```sql
   -- Schedule the expiry function to run daily at midnight UTC
   SELECT cron.schedule(
       'expire-subscriptions-daily',  -- job name
       '0 0 * * *',                     -- cron expression (midnight UTC)
       $$SELECT expire_old_subscriptions();$$
   );
   ```

3. **Verify the cron job was created**:
   ```sql
   SELECT * FROM cron.job;
   ```

4. **Check cron job history**:
   ```sql
   SELECT * FROM cron.job_run_details
   WHERE jobid = (SELECT jobid FROM cron.job WHERE jobname = 'expire-subscriptions-daily')
   ORDER BY start_time DESC
   LIMIT 10;
   ```

### Option 3: Using Supabase Dashboard Scheduled Queries (Easiest)

1. Go to **SQL Editor** in Supabase Dashboard
2. Click **New Query**
3. Paste this SQL:
   ```sql
   SELECT expire_old_subscriptions();
   ```
4. Click the **Schedule** button (if available in your plan)
5. Set schedule to run daily at midnight

## Testing the Cron Job

### Manual Test

Run this SQL to manually trigger the expiry function:

```sql
SELECT expire_old_subscriptions();
```

Expected output: Number of subscriptions that were expired

### Create Test Data

To test if it works, create a subscription with a past end date:

```sql
-- Insert test subscription that should expire
INSERT INTO subscriptions (user_id, plan_type, status, start_date, end_date, amount_paid)
VALUES (
    'your-test-user-id'::UUID,
    'monthly',
    'active',
    NOW() - INTERVAL '2 months',
    NOW() - INTERVAL '1 day',  -- Expired yesterday
    49
);

-- Run the expiry function
SELECT expire_old_subscriptions();

-- Check if it was marked as expired
SELECT status FROM subscriptions WHERE user_id = 'your-test-user-id'::UUID;
-- Should return 'expired' instead of 'active'
```

## Monitoring

### Check Recent Expirations

```sql
SELECT 
    s.id,
    s.user_id,
    p.email,
    s.end_date,
    s.status,
    s.updated_at
FROM subscriptions s
JOIN profiles p ON s.user_id = p.id
WHERE s.status = 'expired'
ORDER BY s.updated_at DESC
LIMIT 20;
```

### Alert for Upcoming Expirations

```sql
-- Subscriptions expiring in the next 3 days
SELECT 
    COUNT(*) as expiring_soon_count
FROM subscriptions
WHERE status = 'active'
  AND end_date <= NOW() + INTERVAL '3 days'
  AND end_date > NOW();
```

## Troubleshooting

### Cron job not running

1. Check if pg_cron extension is enabled:
   ```sql
   SELECT * FROM pg_extension WHERE extname = 'pg_cron';
   ```

2. Check cron job logs:
   ```sql
   SELECT * FROM cron.job_run_details
   ORDER BY start_time DESC
   LIMIT 10;
   ```

3. Verify the job exists:
   ```sql
   SELECT * FROM cron.job WHERE jobname = 'expire-subscriptions-daily';
   ```

### Function not found error

Make sure the `expire_old_subscriptions()` function exists:

```sql
SELECT routine_name 
FROM information_schema.routines 
WHERE routine_name = 'expire_old_subscriptions';
```

If not found, run the subscription system migration again.

## Unscheduling

If you need to remove the cron job:

```sql
SELECT cron.unschedule('expire-subscriptions-daily');
```

---

**Recommendation**: Use **Option 2 (pg_cron with SQL)** as it's the most straightforward for this use case.
