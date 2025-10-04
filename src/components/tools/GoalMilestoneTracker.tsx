import { useState } from 'react';
import { Button } from '../ui/Button';
import { Trophy, CheckCircle2, Target } from 'lucide-react';

const GoalMilestoneTracker = () => {
  const [examDate, setExamDate] = useState('2026-01-24');
  const [showTimeline, setShowTimeline] = useState(false);

  const calculateDaysLeft = () => {
    const today = new Date();
    const exam = new Date(examDate);
    const diff = exam.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const daysLeft = calculateDaysLeft();
  const monthsLeft = (daysLeft / 30).toFixed(1);

  const milestones = [
    {
      month: 6,
      title: '6 Months Before',
      goals: [
        '100% syllabus coverage in all 3 subjects',
        'Start solving previous year questions',
        'Begin weekly mock tests',
        'Identify and list weak topics'
      ],
      color: 'bg-blue-300'
    },
    {
      month: 4,
      title: '4 Months Before',
      goals: [
        'Complete first full revision',
        '50+ previous year papers solved',
        'Mock test score: 180+/300',
        'Join test series if not already'
      ],
      color: 'bg-green-300'
    },
    {
      month: 2,
      title: '2 Months Before',
      goals: [
        'Second complete revision done',
        'Mock test score: 220+/300',
        '3 mocks per week consistently',
        'Formula sheets ready for quick revision'
      ],
      color: 'bg-yellow-300'
    },
    {
      month: 1,
      title: 'Final Month',
      goals: [
        'Third revision (quick)',
        'Daily mock tests',
        'Target score: 250+/300',
        'Focus on exam strategy and time management'
      ],
      color: 'bg-orange-300'
    },
    {
      month: 0.25,
      title: 'Last Week',
      goals: [
        'Light revision only - no new topics',
        'Revise formula sheets',
        'Practice previous year papers (timed)',
        'Get 8 hours sleep daily'
      ],
      color: 'bg-red-300'
    }
  ];

  const getCurrentMilestone = () => {
    const months = parseFloat(monthsLeft);
    if (months >= 6) return 0;
    if (months >= 4) return 1;
    if (months >= 2) return 2;
    if (months >= 1) return 3;
    return 4;
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-purple-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Trophy className="w-8 h-8" />
            GOAL MILESTONE TRACKER
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Track your progress with month-by-month JEE preparation goals! 🎯
        </p>
      </div>

      <div className="space-y-6">
        {/* Exam Date Input */}
        <div className="bg-cyan-300 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <label className="font-black text-lg uppercase mb-4 block text-center">
            When is your JEE Main exam?
          </label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="w-full border-4 border-black p-4 text-2xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>

        {/* Days Countdown */}
        <div className="bg-yellow-300 border-4 border-black p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-lg font-black mb-4 uppercase">Days Until JEE</div>
          <div className="text-8xl font-black mb-4">{daysLeft > 0 ? daysLeft : 0}</div>
          <div className="text-2xl font-black">{monthsLeft} months left</div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowTimeline(true)} className="text-xl">
            📅 SEE MILESTONE TIMELINE
          </Button>
        </div>

        {/* Timeline */}
        {showTimeline && daysLeft > 0 && (
          <div className="space-y-6 animate-fade-in">
            {/* Current Phase Alert */}
            <div className="bg-pink-300 border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Target className="w-12 h-12 mx-auto mb-3" />
              <h4 className="text-2xl font-black mb-2 uppercase">CURRENT PHASE:</h4>
              <div className="text-3xl font-black">{milestones[getCurrentMilestone()].title}</div>
            </div>

            {/* Milestone Cards */}
            {milestones.map((milestone, idx) => {
              const isPast = parseFloat(monthsLeft) < milestone.month;
              const isCurrent = getCurrentMilestone() === idx;
              
              return (
                <div
                  key={idx}
                  className={`${milestone.color} border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                    isCurrent ? 'ring-4 ring-black' : ''
                  } ${isPast ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-black uppercase">{milestone.title}</h4>
                    {isCurrent && (
                      <span className="bg-black text-white px-4 py-2 font-black text-sm border-2 border-white">
                        YOU ARE HERE
                      </span>
                    )}
                    {isPast && (
                      <span className="bg-gray-500 text-white px-4 py-2 font-black text-sm">
                        COMPLETED
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {milestone.goals.map((goal, goalIdx) => (
                      <li key={goalIdx} className="flex items-start gap-3 bg-white border-3 border-black p-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPast ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className="font-bold text-sm">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Final Message */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-3xl font-black mb-4">THE FINISH LINE IS NEAR!</h4>
              <p className="text-lg font-bold">
                Stay focused, follow the timeline, and trust the process. 
                You've got this! 🎯
              </p>
            </div>
          </div>
        )}

        {daysLeft <= 0 && showTimeline && (
          <div className="bg-red-400 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-3xl font-black mb-4">EXAM DATE PASSED!</h4>
            <p className="text-lg font-bold">Please enter your upcoming exam date.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalMilestoneTracker;
