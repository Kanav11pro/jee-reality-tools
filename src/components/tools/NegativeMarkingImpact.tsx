import { useState } from 'react';
import { Button } from '../ui/Button';
import { AlertTriangle, TrendingDown, Target } from 'lucide-react';

const NegativeMarkingImpact = () => {
  const [attempted, setAttempted] = useState(90);
  const [correct, setCorrect] = useState(70);
  const [showResults, setShowResults] = useState(false);

  const wrong = attempted - correct;
  const grossScore = correct * 4;
  const negativeMarks = wrong * 1;
  const netScore = grossScore - negativeMarks;
  const accuracy = attempted > 0 ? ((correct / attempted) * 100).toFixed(1) : 0;

  const getAccuracyStatus = () => {
    const acc = parseFloat(accuracy.toString());
    if (acc >= 85) return { text: 'EXCELLENT ACCURACY! ✓', color: 'bg-green-400' };
    if (acc >= 75) return { text: 'GOOD - CAN IMPROVE', color: 'bg-yellow-400' };
    if (acc >= 65) return { text: 'RISKY ZONE ⚠️', color: 'bg-orange-400' };
    return { text: 'DANGER! TOO MANY WRONGS 🚨', color: 'bg-red-400' };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-red-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            NEGATIVE MARKING IMPACT
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          See how wrong answers destroy your JEE score! ⚠️
        </p>
        <p className="text-sm font-black text-black/60 mt-2">
          JEE Main: +4 for correct, -1 for wrong
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Total Questions Attempted</label>
            <input
              type="number"
              min="0"
              max="90"
              value={attempted}
              onChange={(e) => setAttempted(Math.min(90, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of 90 questions</p>
          </div>

          <div className="bg-green-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Correct Answers</label>
            <input
              type="number"
              min="0"
              max={attempted}
              value={correct}
              onChange={(e) => setCorrect(Math.min(attempted, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <p className="text-xs font-bold text-center mt-2">Out of {attempted} attempted</p>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowResults(true)} disabled={attempted === 0} className="text-xl">
            💥 SEE THE DAMAGE
          </Button>
        </div>

        {/* Results */}
        {showResults && attempted > 0 && (
          <div className="space-y-6 animate-fade-in">
            {/* Score Breakdown */}
            <div className="bg-yellow-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black mb-6 text-center uppercase">SCORE BREAKDOWN</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white border-3 border-black">
                  <span className="font-bold">Correct Answers ({correct} × 4):</span>
                  <span className="font-black text-2xl text-green-600">+{grossScore}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white border-3 border-black">
                  <span className="font-bold">Wrong Answers ({wrong} × 1):</span>
                  <span className="font-black text-2xl text-red-600">-{negativeMarks}</span>
                </div>
                <div className="flex justify-between items-center p-6 bg-black text-white border-3 border-black">
                  <span className="font-black text-xl">FINAL SCORE:</span>
                  <span className="font-black text-4xl">{netScore}/360</span>
                </div>
              </div>
            </div>

            {/* Accuracy Status */}
            <div className={`${getAccuracyStatus().color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
              <Target className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-3xl font-black mb-4">{getAccuracyStatus().text}</h4>
              <div className="text-6xl font-black mb-2">{accuracy}%</div>
              <div className="text-lg font-bold">Accuracy Rate</div>
            </div>

            {/* Impact Analysis */}
            <div className="bg-red-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                <TrendingDown className="w-6 h-6" />
                NEGATIVE MARKING COST:
              </h4>
              <div className="space-y-3">
                <div className="bg-white border-3 border-black p-4">
                  <div className="font-bold text-sm mb-1">Marks Lost to Negative Marking:</div>
                  <div className="font-black text-3xl text-red-600">{negativeMarks} marks</div>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <div className="font-bold text-sm mb-1">Equivalent Rank Drop (approx):</div>
                  <div className="font-black text-3xl text-red-600">~{negativeMarks * 1000} ranks</div>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <div className="font-bold text-sm mb-1">Questions to Skip for Better Score:</div>
                  <div className="font-black text-3xl">{Math.max(0, Math.floor(wrong * 0.6))} questions</div>
                </div>
              </div>
            </div>

            {/* Strategy Tips */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">🎯 SMART STRATEGY:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Only attempt if you're 70%+ confident</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Random guessing = Net loss. Skip if unsure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Eliminate 2 options? Your guess odds improve to 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Target 85%+ accuracy for top ranks</span>
                </li>
              </ul>
            </div>

            {/* Comparison */}
            <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">💡 WHAT IF YOU SKIPPED WRONG ONES?</h4>
              <div className="bg-white border-4 border-black p-6 text-center">
                <div className="text-sm font-bold mb-2">Your score would be:</div>
                <div className="text-5xl font-black mb-2">{grossScore}/360</div>
                <div className="text-lg font-bold text-green-600">+{negativeMarks} marks higher!</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NegativeMarkingImpact;
