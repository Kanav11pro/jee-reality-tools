import { useState } from 'react';
import { Button } from '../ui/Button';
import { BookOpen, AlertTriangle, TrendingDown } from 'lucide-react';

const DoubtCostCalculator = () => {
  const [doubtsPerWeek, setDoubtsPerWeek] = useState(5);
  const [timePerDoubt, setTimePerDoubt] = useState(15);
  const [showResults, setShowResults] = useState(false);

  const weeklyTime = doubtsPerWeek * timePerDoubt;
  const monthlyTime = weeklyTime * 4;
  const totalTime = weeklyTime * 52; // Yearly
  const chaptersLost = Math.floor(totalTime / 180); // 3 hours per chapter
  const ranksLost = doubtsPerWeek * 500; // Approximate

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-red-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            DOUBT COST CALCULATOR
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          See the hidden cost of uncleared doubts on your JEE prep! 📉
        </p>
      </div>

      <div className="space-y-6">
        {/* Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-4 block">Doubts You Get Stuck On (Per Week)</label>
            <input
              type="range"
              min="0"
              max="20"
              value={doubtsPerWeek}
              onChange={(e) => setDoubtsPerWeek(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer mb-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="text-center text-4xl font-black">{doubtsPerWeek}</div>
          </div>

          <div className="bg-yellow-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-4 block">Time Wasted Per Doubt (Minutes)</label>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={timePerDoubt}
              onChange={(e) => setTimePerDoubt(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer mb-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="text-center text-4xl font-black">{timePerDoubt} min</div>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowResults(true)} className="text-xl">
            💸 CALCULATE THE COST
          </Button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Impact */}
            <div className="bg-red-500 text-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <TrendingDown className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-4">YEARLY TIME LOST</h4>
              <div className="text-7xl font-black mb-2">{(totalTime / 60).toFixed(0)}h</div>
              <div className="text-xl font-bold">Wasted on unresolved doubts!</div>
            </div>

            {/* Time Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-orange-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black mb-2">{weeklyTime} min</div>
                <div className="text-sm font-bold uppercase">Lost Per Week</div>
              </div>
              <div className="bg-pink-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black mb-2">{(monthlyTime / 60).toFixed(1)}h</div>
                <div className="text-sm font-bold uppercase">Lost Per Month</div>
              </div>
              <div className="bg-purple-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black mb-2">{chaptersLost}</div>
                <div className="text-sm font-bold uppercase">Chapters Lost</div>
              </div>
            </div>

            {/* Impact Analysis */}
            <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">💔 WHAT YOU'RE LOSING:</h4>
              <div className="space-y-3">
                <div className="bg-white border-3 border-black p-4">
                  <div className="font-bold text-sm mb-1">Chapters You Could Complete:</div>
                  <div className="font-black text-3xl">{chaptersLost} chapters</div>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <div className="font-bold text-sm mb-1">Potential Rank Drop:</div>
                  <div className="font-black text-3xl text-red-600">~{ranksLost.toLocaleString()} ranks</div>
                </div>
                <div className="bg-white border-3 border-black p-4">
                  <div className="font-bold text-sm mb-1">Mock Tests You Could Take:</div>
                  <div className="font-black text-3xl">{Math.floor(totalTime / 180)} full mocks</div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                THE SOLUTION:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Clear doubts IMMEDIATELY - don't let them pile up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Use doubt-solving apps (saves 70% time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Ask teacher/friend instantly - don't struggle alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Mark doubts in notebook for weekly review</span>
                </li>
              </ul>
            </div>

            {/* Real Impact */}
            <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">📊 REAL TOPPER DATA:</h4>
              <div className="space-y-2">
                <p className="font-bold text-sm">• AIR 1-100 toppers clear doubts within 24 hours</p>
                <p className="font-bold text-sm">• They spend max 5 minutes per doubt (with help)</p>
                <p className="font-bold text-sm">• Uncleared doubts = #1 reason for exam anxiety</p>
                <p className="font-bold text-sm">• Clear concepts = 2x problem-solving speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoubtCostCalculator;
