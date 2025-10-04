import { useState } from 'react';
import { Button } from '../ui/Button';
import { TrendingUp, CheckCircle2, AlertTriangle } from 'lucide-react';

const SyllabusTracker = () => {
  const [physics, setPhysics] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [maths, setMaths] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const getStatus = (percentage: number) => {
    if (percentage >= 80) return { text: 'ON TRACK ✓', color: 'bg-green-400' };
    if (percentage >= 60) return { text: 'NEED TO SPEED UP ⚡', color: 'bg-yellow-400' };
    if (percentage >= 40) return { text: 'BEHIND SCHEDULE ⚠️', color: 'bg-orange-400' };
    return { text: 'CRITICAL DELAY 🚨', color: 'bg-red-400' };
  };

  const overallCompletion = Math.round((physics + chemistry + maths) / 3);
  const daysToExam = 180; // Example: 6 months
  const requiredDaily = Math.ceil((100 - overallCompletion) / daysToExam * 7); // chapters per week

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-blue-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <TrendingUp className="w-8 h-8" />
            SYLLABUS PROGRESS TRACKER
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Track your JEE syllabus completion and stay on schedule! 📚
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Sliders */}
        <div className="space-y-6">
          <div className="bg-blue-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-4">
              <label className="font-black text-lg uppercase">Physics Completion</label>
              <span className="text-3xl font-black">{physics}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={physics}
              onChange={(e) => setPhysics(parseInt(e.target.value))}
              className="w-full h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="mt-2 bg-white border-2 border-black h-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500" style={{ width: `${physics}%` }}></div>
            </div>
          </div>

          <div className="bg-green-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-4">
              <label className="font-black text-lg uppercase">Chemistry Completion</label>
              <span className="text-3xl font-black">{chemistry}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={chemistry}
              onChange={(e) => setChemistry(parseInt(e.target.value))}
              className="w-full h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="mt-2 bg-white border-2 border-black h-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-green-500" style={{ width: `${chemistry}%` }}></div>
            </div>
          </div>

          <div className="bg-purple-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-4">
              <label className="font-black text-lg uppercase">Maths Completion</label>
              <span className="text-3xl font-black">{maths}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={maths}
              onChange={(e) => setMaths(parseInt(e.target.value))}
              className="w-full h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="mt-2 bg-white border-2 border-black h-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-purple-500" style={{ width: `${maths}%` }}></div>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-yellow-300 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-lg font-black mb-2">OVERALL COMPLETION</div>
          <div className="text-7xl font-black mb-4">{overallCompletion}%</div>
          <div className="bg-white border-4 border-black h-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" style={{ width: `${overallCompletion}%` }}></div>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowAnalysis(true)} className="text-xl">
            📊 ANALYZE MY PROGRESS
          </Button>
        </div>

        {/* Analysis */}
        {showAnalysis && (
          <div className="space-y-6 animate-fade-in">
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`${getStatus(physics).color} border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <div className="text-sm font-black mb-2">PHYSICS</div>
                <div className="text-2xl font-black">{getStatus(physics).text}</div>
              </div>
              <div className={`${getStatus(chemistry).color} border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <div className="text-sm font-black mb-2">CHEMISTRY</div>
                <div className="text-2xl font-black">{getStatus(chemistry).text}</div>
              </div>
              <div className={`${getStatus(maths).color} border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <div className="text-sm font-black mb-2">MATHS</div>
                <div className="text-2xl font-black">{getStatus(maths).text}</div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                RECOMMENDATIONS:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Complete {requiredDaily} chapters per week to finish on time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Focus on your weakest subject: {physics <= chemistry && physics <= maths ? 'Physics' : chemistry <= maths ? 'Chemistry' : 'Maths'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Aim for 5% completion weekly in each subject</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Leave last month for pure revision only</span>
                </li>
              </ul>
            </div>

            {/* Milestone Timeline */}
            <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">🎯 MILESTONE TARGETS:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={`w-6 h-6 ${overallCompletion >= 50 ? 'text-green-700' : 'text-gray-400'}`} />
                  <span className="font-bold text-sm">50% by 3 months before exam</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={`w-6 h-6 ${overallCompletion >= 75 ? 'text-green-700' : 'text-gray-400'}`} />
                  <span className="font-bold text-sm">75% by 1.5 months before exam</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={`w-6 h-6 ${overallCompletion >= 100 ? 'text-green-700' : 'text-gray-400'}`} />
                  <span className="font-bold text-sm">100% by 1 month before exam</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SyllabusTracker;
