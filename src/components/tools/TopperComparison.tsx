import { useState } from 'react';
import { Button } from '../ui/Button';
import { Users, TrendingUp, AlertCircle } from 'lucide-react';

const TopperComparison = () => {
  const [myHours, setMyHours] = useState(6);
  const [showComparison, setShowComparison] = useState(false);

  const topperSchedule = {
    wakeUp: '5:30 AM',
    study1: '6:00 AM - 8:00 AM (2h)',
    breakfast: '8:00 AM - 8:30 AM',
    study2: '8:30 AM - 12:30 PM (4h)',
    lunch: '12:30 PM - 1:30 PM',
    study3: '1:30 PM - 4:30 PM (3h)',
    break: '4:30 PM - 5:00 PM',
    study4: '5:00 PM - 7:00 PM (2h)',
    dinner: '7:00 PM - 8:00 PM',
    revision: '8:00 PM - 10:00 PM (2h)',
    sleep: '10:30 PM',
    totalStudy: 13
  };

  const getGap = () => {
    return topperSchedule.totalStudy - myHours;
  };

  const getStatus = () => {
    const gap = getGap();
    if (gap <= 0) return { text: 'TOPPER LEVEL! 🏆', color: 'bg-green-400' };
    if (gap <= 3) return { text: 'ALMOST THERE! 💪', color: 'bg-yellow-400' };
    if (gap <= 6) return { text: 'NEED TO STEP UP ⚡', color: 'bg-orange-400' };
    return { text: 'SERIOUS GAP! 🚨', color: 'bg-red-400' };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-blue-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <Users className="w-8 h-8" />
            TOPPER VS YOU
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Compare your daily routine with JEE AIR 1-100 toppers! 📊
        </p>
      </div>

      <div className="space-y-6">
        {/* Input */}
        <div className="bg-purple-300 border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <label className="font-black text-lg uppercase mb-6 block text-center">
            How many hours do you study daily?
          </label>
          <div className="flex items-center gap-6 mb-4">
            <input
              type="range"
              min="0"
              max="16"
              step="0.5"
              value={myHours}
              onChange={(e) => setMyHours(parseFloat(e.target.value))}
              className="flex-1 h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <span className="font-black text-5xl w-24 text-right">{myHours}h</span>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowComparison(true)} className="text-xl">
            📊 COMPARE WITH TOPPER
          </Button>
        </div>

        {/* Comparison Results */}
        {showComparison && (
          <div className="space-y-6 animate-fade-in">
            {/* Status Card */}
            <div className={`${getStatus().color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-3xl font-black mb-4">{getStatus().text}</h4>
              <div className="text-6xl font-black mb-2">{Math.abs(getGap())}h</div>
              <div className="text-xl font-bold">
                {getGap() > 0 ? 'Behind Toppers' : 'Ahead of Average'}
              </div>
            </div>

            {/* Side by Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Your Schedule */}
              <div className="bg-red-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-xl font-black mb-4 uppercase text-center">YOUR DAY</h4>
                <div className="bg-white border-3 border-black p-6 text-center">
                  <div className="text-6xl font-black mb-2">{myHours}h</div>
                  <div className="text-sm font-bold">Study Time</div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-white border-2 border-black p-3 text-center">
                    <div className="text-xs font-bold">Free Time:</div>
                    <div className="text-2xl font-black">{24 - myHours - 7}h</div>
                  </div>
                </div>
              </div>

              {/* Topper Schedule */}
              <div className="bg-green-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-xl font-black mb-4 uppercase text-center">JEE TOPPER DAY</h4>
                <div className="bg-white border-3 border-black p-6 text-center">
                  <div className="text-6xl font-black mb-2">{topperSchedule.totalStudy}h</div>
                  <div className="text-sm font-bold">Study Time</div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-white border-2 border-black p-3 text-center">
                    <div className="text-xs font-bold">Free Time:</div>
                    <div className="text-2xl font-black">{24 - topperSchedule.totalStudy - 7}h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Topper Schedule */}
            <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">🏆 TYPICAL TOPPER SCHEDULE:</h4>
              <div className="space-y-2">
                <div className="bg-white border-3 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm">Morning Session 1:</span>
                  <span className="font-black">{topperSchedule.study1}</span>
                </div>
                <div className="bg-white border-3 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm">Morning Session 2:</span>
                  <span className="font-black">{topperSchedule.study2}</span>
                </div>
                <div className="bg-white border-3 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm">Afternoon Session:</span>
                  <span className="font-black">{topperSchedule.study3}</span>
                </div>
                <div className="bg-white border-3 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm">Evening Session:</span>
                  <span className="font-black">{topperSchedule.study4}</span>
                </div>
                <div className="bg-white border-3 border-black p-3 flex justify-between items-center">
                  <span className="font-bold text-sm">Night Revision:</span>
                  <span className="font-black">{topperSchedule.revision}</span>
                </div>
              </div>
            </div>

            {/* Impact Analysis */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">💡 WHAT THIS GAP MEANS:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Weekly gap: {(getGap() * 7).toFixed(0)} hours = {Math.floor(getGap() * 7 / 3)} extra chapters toppers complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Monthly gap: {(getGap() * 30).toFixed(0)} hours = Equivalent to {Math.floor(getGap() * 30 / 24)} full study days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">By JEE: Toppers will have studied {(getGap() * 365).toFixed(0)} more hours than you</span>
                </li>
              </ul>
            </div>

            {/* Action Plan */}
            <div className="bg-pink-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-black mb-3 uppercase">🎯 HOW TO CLOSE THE GAP:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-black">✓</span>
                      <span className="font-bold text-sm">Wake up 1 hour earlier = +7 hrs/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-black">✓</span>
                      <span className="font-bold text-sm">Cut social media to 30 min = +14 hrs/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-black">✓</span>
                      <span className="font-bold text-sm">Study in commute time = +5 hrs/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-black">✓</span>
                      <span className="font-bold text-sm">Reduce TV/Netflix to zero = +10 hrs/week</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopperComparison;
