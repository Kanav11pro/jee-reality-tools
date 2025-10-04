import { useState } from 'react';
import { Button } from '../ui/Button';
import { 
  AlertTriangle, 
  Smartphone, 
  Gamepad2, 
  Tv, 
  Clock, 
  Calendar,
  BookOpen,
  Brain,
  Target,
  Award,
  ArrowRight
} from 'lucide-react';

const TimeWasteCalculator = () => {
  const [socialMedia, setSocialMedia] = useState(0);
  const [gaming, setGaming] = useState(0);
  const [youtube, setYoutube] = useState(0);
  const [netflix, setNetflix] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateWaste = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setShowResults(true);
      setIsCalculating(false);
    }, 800);
  };

  const totalDaily = socialMedia + gaming + youtube + netflix;
  const totalWeekly = totalDaily * 7;
  const totalMonthly = totalDaily * 30;

  const physicsChapters = Math.floor(totalWeekly / 3);
  const chemistryProblems = Math.floor(totalWeekly / 0.25);
  const mathsProblems = Math.floor(totalWeekly / 0.5);
  const mockTests = Math.floor(totalWeekly / 3);
  const revisionSessions = Math.floor(totalWeekly / 2);

  const reset = () => {
    setSocialMedia(0);
    setGaming(0);
    setYoutube(0);
    setNetflix(0);
    setShowResults(false);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-black text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,0,0,1)] transform -rotate-2 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3 justify-center">
            <AlertTriangle className="w-8 h-8" />
            TIME WASTE CALCULATOR
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Reality Check: See how much JEE prep time you're actually losing! 😱
        </p>
        <p className="text-sm font-black text-black/60 mt-2">
          (Based on real data: Average Indian student wastes 3-7 hours daily on screens)
        </p>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Social Media */}
            <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="w-6 h-6" />
                <label className="font-black text-sm uppercase">Instagram/WhatsApp/Snapchat</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="8"
                  step="0.5"
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(parseFloat(e.target.value))}
                  className="flex-1 h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="font-black text-2xl w-16 text-right">{socialMedia}h</span>
              </div>
              <p className="text-xs font-bold text-black/60 mt-2">Avg Indian youth: 3.2 hrs/day</p>
            </div>

            {/* Gaming */}
            <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="w-6 h-6" />
                <label className="font-black text-sm uppercase">Gaming (BGMI/Free Fire/etc)</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="0.5"
                  value={gaming}
                  onChange={(e) => setGaming(parseFloat(e.target.value))}
                  className="flex-1 h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="font-black text-2xl w-16 text-right">{gaming}h</span>
              </div>
              <p className="text-xs font-bold text-black/60 mt-2">Avg Indian youth: 46 mins/day</p>
            </div>

            {/* YouTube */}
            <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <Tv className="w-6 h-6" />
                <label className="font-black text-sm uppercase">YouTube (Non-study)</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={youtube}
                  onChange={(e) => setYoutube(parseFloat(e.target.value))}
                  className="flex-1 h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="font-black text-2xl w-16 text-right">{youtube}h</span>
              </div>
              <p className="text-xs font-bold text-black/60 mt-2">Entertainment/timepass videos only</p>
            </div>

            {/* Netflix/OTT */}
            <div className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-3">
                <Tv className="w-6 h-6" />
                <label className="font-black text-sm uppercase">Netflix/Prime/Hotstar</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={netflix}
                  onChange={(e) => setNetflix(parseFloat(e.target.value))}
                  className="flex-1 h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="font-black text-2xl w-16 text-right">{netflix}h</span>
              </div>
              <p className="text-xs font-bold text-black/60 mt-2">Avg Indian youth: 44 mins/day</p>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <Button
              onClick={calculateWaste}
              disabled={totalDaily === 0 || isCalculating}
              className="text-xl"
            >
              {isCalculating ? (
                <>
                  <div className="border-4 border-black border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
                  CALCULATING...
                </>
              ) : (
                <>
                  💥 SEE THE DAMAGE
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          {/* Shock Header */}
          <div className="bg-black text-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] transform rotate-1">
            <h4 className="text-3xl font-black text-center mb-2">😱 WAKE UP CALL!</h4>
            <p className="text-center text-xl font-bold">You're wasting <span className="text-yellow-300 text-3xl">{totalDaily} hours</span> EVERY DAY!</p>
          </div>

          {/* Time Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-300 border-4 border-black p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-4xl font-black mb-1">{totalWeekly}h</div>
              <div className="text-sm font-black uppercase">Lost Per Week</div>
            </div>
            <div className="bg-pink-300 border-4 border-black p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div className="text-4xl font-black mb-1">{totalMonthly}h</div>
              <div className="text-sm font-black uppercase">Lost Per Month</div>
            </div>
            <div className="bg-purple-300 border-4 border-black p-5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
              <div className="text-4xl font-black mb-1">{Math.floor(totalMonthly / 24)}</div>
              <div className="text-sm font-black uppercase">Full Days Lost</div>
            </div>
          </div>

          {/* What You're Missing */}
          <div className="bg-yellow-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-2xl font-black mb-4 uppercase text-center">
              🔥 What You Could've Done Instead:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border-3 border-black p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-400 border-2 border-black p-2">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-black text-lg">{physicsChapters} Physics Chapters</span>
                </div>
                <p className="text-xs font-bold text-black/70">3 hours per chapter completion</p>
              </div>
              <div className="bg-white border-3 border-black p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-400 border-2 border-black p-2">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="font-black text-lg">{chemistryProblems} Chem Problem Sets</span>
                </div>
                <p className="text-xs font-bold text-black/70">15 mins per organic/inorganic set</p>
              </div>
              <div className="bg-white border-3 border-black p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-purple-400 border-2 border-black p-2">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="font-black text-lg">{mathsProblems} Math Problem Sets</span>
                </div>
                <p className="text-xs font-bold text-black/70">30 mins per calculus/algebra set</p>
              </div>
              <div className="bg-white border-3 border-black p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-red-400 border-2 border-black p-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-black text-lg">{mockTests} Full Mock Tests</span>
                </div>
                <p className="text-xs font-bold text-black/70">3 hours per complete JEE mock</p>
              </div>
            </div>
          </div>

          {/* Harsh Reality */}
          <div className="bg-red-500 text-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h4 className="text-2xl font-black mb-3 uppercase text-center">⚠️ THE HARSH TRUTH</h4>
            <div className="space-y-2 text-center">
              <p className="text-lg font-bold">
                While you scroll, your competitors are solving {Math.floor(totalWeekly * 4)} more problems/month
              </p>
              <p className="text-base font-bold opacity-90">
                That's {revisionSessions} extra revision sessions per week you're missing!
              </p>
              <p className="text-sm font-black opacity-80 mt-4">
                "I'll study tomorrow" = Recipe for disaster. Start NOW!
              </p>
            </div>
          </div>

          {/* Action Steps */}
          <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xl font-black mb-4 uppercase">💪 WHAT TO DO NOW:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-black text-xl">→</span>
                <span className="font-bold text-sm">Delete 1-2 social media apps. Just for JEE prep months.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-xl">→</span>
                <span className="font-bold text-sm">Set 30-min daily limits on remaining apps (use Screen Time)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-xl">→</span>
                <span className="font-bold text-sm">Replace 2 hours of scrolling with 2 hours of PCM practice TODAY</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-xl">→</span>
                <span className="font-bold text-sm">Track your screen time daily and aim to reduce by 50%</span>
              </li>
            </ul>
          </div>

          {/* Reset Button */}
          <div className="text-center">
            <Button
              onClick={reset}
              variant="outline"
            >
              ↻ CALCULATE AGAIN
            </Button>
          </div>
        </div>
      )}

      {/* Source Note */}
      <div className="mt-8 text-center">
        <p className="text-xs font-bold text-black/60">
          📊 Data sources: IIM Rohtak study (2023), EY India Digital Report (2024), Statista India (2024)
        </p>
      </div>
    </div>
  );
};

export default TimeWasteCalculator;

