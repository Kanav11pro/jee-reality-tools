import { useState } from 'react';
import { Button } from '../ui/Button';
import { Award, TrendingUp, AlertCircle } from 'lucide-react';

const RankPredictor = () => {
  const [physics, setPhysics] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [maths, setMaths] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const totalMarks = physics + chemistry + maths;
  const percentage = ((totalMarks / 300) * 100).toFixed(1);

  const predictRank = () => {
    if (totalMarks >= 250) return '1 - 5,000';
    if (totalMarks >= 200) return '5,000 - 20,000';
    if (totalMarks >= 150) return '20,000 - 50,000';
    if (totalMarks >= 100) return '50,000 - 1,00,000';
    return '1,00,000+';
  };

  const getColleges = () => {
    if (totalMarks >= 250) return ['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur'];
    if (totalMarks >= 200) return ['IIT Kharagpur', 'IIT Roorkee', 'IIT Guwahati', 'Top NITs'];
    if (totalMarks >= 150) return ['Mid-tier NITs', 'IIIT Hyderabad', 'DTU', 'NSUT'];
    if (totalMarks >= 100) return ['Lower NITs', 'State Engineering Colleges', 'Private Universities'];
    return ['Private Engineering Colleges'];
  };

  const getRankColor = () => {
    if (totalMarks >= 250) return 'bg-green-400';
    if (totalMarks >= 200) return 'bg-blue-400';
    if (totalMarks >= 150) return 'bg-yellow-400';
    if (totalMarks >= 100) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-purple-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Award className="w-8 h-8" />
            JEE RANK PREDICTOR
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Enter your expected marks and see realistic rank predictions! 🎯
        </p>
        <p className="text-sm font-black text-black/60 mt-2">
          Based on JEE 2024 trends (out of 300 marks)
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Physics Marks</label>
            <input
              type="number"
              min="0"
              max="100"
              value={physics}
              onChange={(e) => setPhysics(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 100</p>
          </div>

          <div className="bg-green-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Chemistry Marks</label>
            <input
              type="number"
              min="0"
              max="100"
              value={chemistry}
              onChange={(e) => setChemistry(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 100</p>
          </div>

          <div className="bg-purple-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Maths Marks</label>
            <input
              type="number"
              min="0"
              max="100"
              value={maths}
              onChange={(e) => setMaths(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 100</p>
          </div>
        </div>

        {/* Total Display */}
        <div className="bg-yellow-300 border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-lg font-black mb-2">TOTAL MARKS</div>
          <div className="text-6xl font-black mb-2">{totalMarks}/300</div>
          <div className="text-2xl font-black">{percentage}%</div>
        </div>

        {/* Predict Button */}
        <div className="text-center">
          <Button onClick={() => setShowResults(true)} disabled={totalMarks === 0} className="text-xl">
            🔮 PREDICT MY RANK
          </Button>
        </div>

        {/* Results */}
        {showResults && totalMarks > 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className={`${getRankColor()} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-4">PREDICTED JEE RANK</h4>
              <div className="text-5xl font-black mb-2">{predictRank()}</div>
            </div>

            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">🎓 COLLEGES YOU CAN TARGET:</h4>
              <div className="space-y-2">
                {getColleges().map((college, idx) => (
                  <div key={idx} className="bg-white border-3 border-black p-3 font-bold text-sm">
                    • {college}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-200 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-black mb-2">⚠️ IMPORTANT NOTE:</h4>
                  <p className="text-sm font-bold">
                    This is an approximate prediction based on 2024 trends. Actual ranks vary each year based on 
                    difficulty, number of candidates, and normalization. Use this as a motivation tool only!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">💪 IMPROVEMENT PLAN:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Need +10 marks? Focus on your weakest subject for 2 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">+20 marks? Solve 50 previous year problems daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">+50 marks? Join crash course + 3 mocks weekly</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankPredictor;
