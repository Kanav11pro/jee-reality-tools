import { useState } from 'react';
import { Button } from '../ui/Button';
import { BookOpen, Clock, Calendar } from 'lucide-react';

const RevisionCalculator = () => {
  const [chapters, setChapters] = useState(30);
  const [daysLeft, setDaysLeft] = useState(60);
  const [hoursPerDay, setHoursPerDay] = useState(4);
  const [showPlan, setShowPlan] = useState(false);

  const chaptersPerDay = (chapters / daysLeft).toFixed(1);
  const hoursPerChapter = (hoursPerDay / parseFloat(chaptersPerDay)).toFixed(1);
  const totalHours = chapters * parseFloat(hoursPerChapter);
  const revisionRounds = Math.floor(daysLeft / (chapters / parseFloat(chaptersPerDay)));

  const getStatus = () => {
    if (parseFloat(chaptersPerDay) <= 1) return { text: 'COMFORTABLE PACE ✓', color: 'bg-green-400' };
    if (parseFloat(chaptersPerDay) <= 2) return { text: 'MODERATE PACE', color: 'bg-yellow-400' };
    if (parseFloat(chaptersPerDay) <= 3) return { text: 'TIGHT SCHEDULE ⚠️', color: 'bg-orange-400' };
    return { text: 'IMPOSSIBLE! REDUCE LOAD 🚨', color: 'bg-red-400' };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="inline-block bg-green-400 text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            REVISION CALCULATOR
          </h3>
        </div>
        <p className="text-base md:text-lg font-bold text-black/80">
          Plan your revision schedule optimally before JEE! 📖
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Total Chapters to Revise</label>
            <input
              type="number"
              min="1"
              max="100"
              value={chapters}
              onChange={(e) => setChapters(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          <div className="bg-purple-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Days Until Exam</label>
            <input
              type="number"
              min="1"
              max="365"
              value={daysLeft}
              onChange={(e) => setDaysLeft(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          <div className="bg-pink-300 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label className="font-black text-sm uppercase mb-3 block">Hours/Day Available</label>
            <input
              type="number"
              min="1"
              max="12"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border-4 border-black p-4 text-3xl font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        </div>

        <div className="text-center">
          <Button onClick={() => setShowPlan(true)} className="text-xl">
            📅 GENERATE REVISION PLAN
          </Button>
        </div>

        {/* Results */}
        {showPlan && (
          <div className="space-y-6 animate-fade-in">
            {/* Status Card */}
            <div className={`${getStatus().color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-3xl font-black mb-2">{getStatus().text}</h4>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black mb-2">{chaptersPerDay}</div>
                <div className="text-sm font-bold uppercase">Chapters/Day</div>
              </div>
              <div className="bg-cyan-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black mb-2">{hoursPerChapter}h</div>
                <div className="text-sm font-bold uppercase">Per Chapter</div>
              </div>
              <div className="bg-orange-300 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl font-black mb-2">{revisionRounds}</div>
                <div className="text-sm font-bold uppercase">Revision Rounds</div>
              </div>
            </div>

            {/* Detailed Plan */}
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase">📋 YOUR REVISION PLAN:</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-blue-100 border-3 border-black">
                  <span className="font-bold">Daily Target:</span>
                  <span className="font-black text-xl">{chaptersPerDay} chapters</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-100 border-3 border-black">
                  <span className="font-bold">Weekly Target:</span>
                  <span className="font-black text-xl">{(parseFloat(chaptersPerDay) * 7).toFixed(0)} chapters</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-100 border-3 border-black">
                  <span className="font-bold">Total Study Hours:</span>
                  <span className="font-black text-xl">{totalHours.toFixed(0)} hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-pink-100 border-3 border-black">
                  <span className="font-bold">Possible Revisions:</span>
                  <span className="font-black text-xl">{revisionRounds} complete rounds</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-cyan-300 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                <Clock className="w-6 h-6" />
                REVISION TIPS:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">First revision: Detailed (3-4 hrs/chapter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Second revision: Formula + Key points (2 hrs/chapter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Third revision: Quick recall (1 hr/chapter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-black">→</span>
                  <span className="font-bold text-sm">Use spaced repetition: Day 1, Day 3, Day 7, Day 15</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevisionCalculator;
