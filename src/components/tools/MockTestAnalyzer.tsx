import { useState } from 'react';
import { Button } from '../ui/Button';
import { BarChart3, TrendingUp, AlertCircle } from 'lucide-react';

const MockTestAnalyzer = () => {
  const [physics, setPhysics] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [maths, setMaths] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const total = physics + chemistry + maths;
  const percentage = ((total / 300) * 100).toFixed(1);

  const getWeakest = () => {
    const scores = [
      { subject: 'Physics', score: physics },
      { subject: 'Chemistry', score: chemistry },
      { subject: 'Maths', score: maths }
    ];
    return scores.sort((a, b) => a.score - b.score);
  };

  const getRecommendations = () => {
    const weakest = getWeakest();
    return [
      `Focus 60% of your study time on ${weakest[0].subject} this week`,
      `Solve 50 ${weakest[0].subject} problems from previous years`,
      `Revise ${weakest[1].subject} formulas daily for 30 minutes`,
      `Take subject-wise tests to identify specific weak topics`
    ];
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-green-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            MOCK TEST ANALYZER
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Analyze your mock test scores and get improvement strategies! 📈
        </p>
      </div>

      <div className="space-y-6">
        {/* Score Input */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Physics Score</label>
            <input
              type="number"
              min="-25"
              max="100"
              value={physics}
              onChange={(e) => setPhysics(Math.min(100, Math.max(-25, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 100 (can be negative)</p>
          </div>

          <div className="bg-green-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Chemistry Score</label>
            <input
              type="number"
              min="-25"
              max="100"
              value={chemistry}
              onChange={(e) => setChemistry(Math.min(100, Math.max(-25, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 100</p>
          </div>

          <div className="bg-purple-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Maths Score</label>
            <input
              type="number"
              min="-25"
              max="100"
              value={maths}
              onChange={(e) => setMaths(Math.min(100, Math.max(-25, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 100</p>
          </div>
        </div>

        {/* Total Score */}
        <div className="bg-yellow-300 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-lg font-black mb-2">TOTAL SCORE</div>
          <div className="text-7xl font-black mb-2">{total}/300</div>
          <div className="text-2xl font-black">{percentage}%</div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowAnalysis(true)} className="text-xl">
            📊 ANALYZE PERFORMANCE
          </Button>
        </div>

        {/* Analysis Results */}
        {showAnalysis && (
          <div className="space-y-6 animate-fade-in">
            {/* Subject Ranking */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">📊 SUBJECT-WISE ANALYSIS:</h4>
              <div className="space-y-3">
                {getWeakest().reverse().map((item, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 border-4 border-black ${
                      idx === 0 ? 'bg-green-200' : idx === 1 ? 'bg-yellow-200' : 'bg-red-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-black text-sm">{idx + 1}. {item.subject}</span>
                        <span className="ml-3 text-xs font-bold">
                          ({idx === 0 ? 'Strongest' : idx === 1 ? 'Average' : 'Weakest'})
                        </span>
                      </div>
                      <span className="font-black text-2xl">{item.score}/100</span>
                    </div>
                    <div className="mt-2 bg-white border-2 border-black h-4 relative overflow-hidden">
                      <div 
                        className={`absolute inset-0 ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${Math.max(0, item.score)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-orange-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                IMPROVEMENT PLAN:
              </h4>
              <ul className="space-y-3">
                {getRecommendations().map((rec, idx) => (
                  <li key={idx} className="bg-white border-3 border-black p-4 flex items-start gap-2">
                    <span className="font-black">{idx + 1}.</span>
                    <span className="font-bold text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Setting */}
            <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">🎯 NEXT MOCK TARGET:</h4>
              <div className="space-y-3">
                <div className="bg-white border-3 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">{getWeakest()[0].subject} Target:</span>
                    <span className="font-black text-2xl">+15 marks</span>
                  </div>
                  <div className="text-xs font-bold text-black/70">Focus area for biggest impact</div>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">Overall Target:</span>
                    <span className="font-black text-2xl">{Math.min(300, total + 30)}/300</span>
                  </div>
                  <div className="text-xs font-bold text-black/70">Realistic 10% improvement</div>
                </div>
              </div>
            </div>

            {/* Warning if negative */}
            {(physics < 0 || chemistry < 0 || maths < 0) && (
              <div className="bg-red-400 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-black mb-2">⚠️ NEGATIVE SCORE ALERT!</h4>
                    <p className="font-bold text-sm">
                      Negative marking is killing your score! You're attempting too many questions with low confidence. 
                      Skip questions you're unsure about. Better to leave blank than lose marks.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTestAnalyzer;
