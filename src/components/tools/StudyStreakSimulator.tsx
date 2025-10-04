import { useState } from 'react';
import { Button } from '../ui/Button';
import { Flame, TrendingUp, Award } from 'lucide-react';

const StudyStreakSimulator = () => {
  const [days, setDays] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const startSimulation = () => {
    setIsPlaying(true);
    setDays(1);
    const interval = setInterval(() => {
      setDays(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          setIsPlaying(false);
          return 90;
        }
        return prev + 1;
      });
    }, 50);
  };

  const getMilestone = () => {
    if (days >= 90) return { badge: '🏆 LEGENDARY', color: 'bg-purple-400', text: 'JEE TOPPER LEVEL!' };
    if (days >= 60) return { badge: '🔥 ON FIRE', color: 'bg-red-400', text: 'Unstoppable!' };
    if (days >= 30) return { badge: '⚡ COMMITTED', color: 'bg-yellow-400', text: 'Building momentum!' };
    if (days >= 7) return { badge: '🌱 GROWING', color: 'bg-green-400', text: 'Good start!' };
    return { badge: '🎯 STARTER', color: 'bg-blue-400', text: 'Keep going!' };
  };

  const getStats = () => {
    const chaptersCompleted = Math.floor(days * 1.5);
    const problemsSolved = days * 20;
    const mockTests = Math.floor(days / 7);
    const hoursStudied = days * 6;
    return { chaptersCompleted, problemsSolved, mockTests, hoursStudied };
  };

  const milestone = getMilestone();
  const stats = getStats();

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-orange-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Flame className="w-8 h-8" />
            STUDY STREAK SIMULATOR
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          See the power of daily consistency over 90 days! 🔥
        </p>
      </div>

      <div className="space-y-6">
        {/* Streak Display */}
        <div className={`${milestone.color} border-4 border-black p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
          <div className="text-sm font-black mb-4 uppercase">{milestone.badge}</div>
          <div className="text-8xl font-black mb-4">{days}</div>
          <div className="text-2xl font-black mb-2">DAY STREAK</div>
          <div className="text-lg font-bold">{milestone.text}</div>
        </div>

        {/* Control Button */}
        <div className="text-center">
          <Button onClick={startSimulation} disabled={isPlaying} className="text-xl">
            {isPlaying ? '⏳ SIMULATING...' : '▶️ START 90-DAY SIMULATION'}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center mb-3">
            <span className="font-black text-sm">PROGRESS TO 90 DAYS</span>
            <span className="font-black text-xl">{((days / 90) * 100).toFixed(0)}%</span>
          </div>
          <div className="bg-gray-300 border-4 border-black h-8 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transition-all duration-100"
              style={{ width: `${(days / 90) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs font-bold mt-2">
            <span>Day 0</span>
            <span>Day 30</span>
            <span>Day 60</span>
            <span>Day 90</span>
          </div>
        </div>

        {/* Stats Grid */}
        {days > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
            <div className="bg-blue-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-3xl font-black mb-2">{stats.chaptersCompleted}</div>
              <div className="text-xs font-bold uppercase">Chapters Done</div>
            </div>
            <div className="bg-green-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-3xl font-black mb-2">{stats.problemsSolved}</div>
              <div className="text-xs font-bold uppercase">Problems Solved</div>
            </div>
            <div className="bg-purple-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-3xl font-black mb-2">{stats.mockTests}</div>
              <div className="text-xs font-bold uppercase">Mock Tests</div>
            </div>
            <div className="bg-pink-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-3xl font-black mb-2">{stats.hoursStudied}</div>
              <div className="text-xs font-bold uppercase">Hours Studied</div>
            </div>
          </div>
        )}

        {/* Milestones */}
        <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="text-xl font-black mb-4 uppercase">🎯 MILESTONE REWARDS:</h4>
          <div className="space-y-3">
            <div className={`p-4 border-4 border-black ${days >= 7 ? 'bg-green-200' : 'bg-gray-200'}`}>
              <div className="flex items-center gap-3">
                <Award className={`w-6 h-6 ${days >= 7 ? 'text-green-700' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">7 Days: Habit Forming 🌱</span>
              </div>
            </div>
            <div className={`p-4 border-4 border-black ${days >= 30 ? 'bg-green-200' : 'bg-gray-200'}`}>
              <div className="flex items-center gap-3">
                <Award className={`w-6 h-6 ${days >= 30 ? 'text-green-700' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">30 Days: Solid Foundation ⚡</span>
              </div>
            </div>
            <div className={`p-4 border-4 border-black ${days >= 60 ? 'bg-green-200' : 'bg-gray-200'}`}>
              <div className="flex items-center gap-3">
                <Award className={`w-6 h-6 ${days >= 60 ? 'text-green-700' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">60 Days: Unstoppable Force 🔥</span>
              </div>
            </div>
            <div className={`p-4 border-4 border-black ${days >= 90 ? 'bg-green-200' : 'bg-gray-200'}`}>
              <div className="flex items-center gap-3">
                <Award className={`w-6 h-6 ${days >= 90 ? 'text-green-700' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">90 Days: JEE Topper Mentality 🏆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reality Check */}
        <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            THE STREAK EFFECT:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-black">→</span>
              <span className="font-bold text-sm">Day 1-7: Building the habit is hardest</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-black">→</span>
              <span className="font-bold text-sm">Day 8-30: Momentum kicks in, gets easier</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-black">→</span>
              <span className="font-bold text-sm">Day 31-60: Habit becomes automatic</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-black">→</span>
              <span className="font-bold text-sm">Day 61-90: You're in the top 1% of JEE students</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyStreakSimulator;
