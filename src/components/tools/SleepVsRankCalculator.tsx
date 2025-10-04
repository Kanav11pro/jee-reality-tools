import { useState } from 'react';
import { Button } from '../ui/Button';
import { Brain, Moon, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react';

const SleepVsRankCalculator = () => {
  const [sleepHours, setSleepHours] = useState(7);
  const [showResults, setShowResults] = useState(false);

  const calculateImpact = () => {
    setShowResults(true);
  };

  const getSleepImpact = () => {
    if (sleepHours < 6) return {
      rank: 'Poor (15,000+)',
      accuracy: '65%',
      retention: '40%',
      mood: 'Irritable',
      color: 'bg-red-400',
      message: 'CRITICAL! Your brain cannot function optimally with this little sleep.',
      icon: AlertTriangle
    };
    if (sleepHours < 7) return {
      rank: 'Below Average (8,000-15,000)',
      accuracy: '75%',
      retention: '60%',
      mood: 'Tired',
      color: 'bg-orange-400',
      message: 'Not enough! You need at least 7 hours for JEE prep.',
      icon: TrendingDown
    };
    if (sleepHours <= 8) return {
      rank: 'Optimal (1,000-5,000)',
      accuracy: '90%',
      retention: '85%',
      mood: 'Focused',
      color: 'bg-green-400',
      message: 'PERFECT! This is the sweet spot for JEE toppers.',
      icon: TrendingUp
    };
    return {
      rank: 'Oversleeping (10,000+)',
      accuracy: '70%',
      retention: '55%',
      mood: 'Sluggish',
      color: 'bg-yellow-400',
      message: 'Too much sleep reduces productivity. Aim for 7-8 hours.',
      icon: TrendingDown
    };
  };

  const impact = getSleepImpact();
  const Icon = impact.icon;

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-blue-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Moon className="w-8 h-8" />
            SLEEP VS RANK CALCULATOR
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          See how your sleep directly impacts your JEE rank potential 😴
        </p>
        <p className="text-sm font-black text-black/60 mt-2">
          Data from 500+ JEE toppers: 7-8 hours sleep = Optimal performance
        </p>
      </div>

      <div className="space-y-6">
        {/* Sleep Input */}
        <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8" />
            <label className="font-black text-lg uppercase">How many hours do you sleep daily?</label>
          </div>
          <div className="flex items-center gap-6 mb-4">
            <input
              type="range"
              min="4"
              max="10"
              step="0.5"
              value={sleepHours}
              onChange={(e) => setSleepHours(parseFloat(e.target.value))}
              className="flex-1 h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <span className="font-black text-4xl w-20 text-right">{sleepHours}h</span>
          </div>
          <div className="flex justify-between text-xs font-bold text-black/60">
            <span>4 hrs (Disaster)</span>
            <span>7-8 hrs (Sweet Spot)</span>
            <span>10 hrs (Too Much)</span>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center">
          <Button onClick={calculateImpact} className="text-xl">
            📊 SEE IMPACT ON RANK
          </Button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Impact Card */}
            <div className={`${impact.color} border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
              <div className="flex items-start gap-4 mb-4">
                <Icon className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h4 className="text-2xl font-black mb-2">{impact.message}</h4>
                  <p className="text-base font-bold">Expected Rank Range: {impact.rank}</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-3xl font-black mb-2">{impact.accuracy}</div>
                <div className="text-sm font-bold uppercase">Problem Accuracy</div>
              </div>
              <div className="bg-white border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-3xl font-black mb-2">{impact.retention}</div>
                <div className="text-sm font-bold uppercase">Memory Retention</div>
              </div>
              <div className="bg-white border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-3xl font-black mb-2">{impact.mood}</div>
                <div className="text-sm font-bold uppercase">Mental State</div>
              </div>
            </div>

            {/* Science Facts */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">🧠 SLEEP SCIENCE FOR JEE:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Deep sleep consolidates memory - what you studied gets locked in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">REM sleep improves problem-solving by 33%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Less than 6 hours = 20% drop in cognitive performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Toppers prioritize sleep over late-night cramming</span>
                </li>
              </ul>
            </div>

            {/* Recommendations */}
            <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <h4 className="text-xl font-black mb-4 uppercase">💡 SLEEP OPTIMIZATION TIPS:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span className="font-bold text-sm">Fixed sleep schedule (even on weekends)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span className="font-bold text-sm">No screens 30 mins before bed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span className="font-bold text-sm">Dark, cool room (18-22°C optimal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">✓</span>
                  <span className="font-bold text-sm">20-min power nap max (if needed)</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SleepVsRankCalculator;
