import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { AlertTriangle, ArrowLeft, Home } from 'lucide-react';

// Import upgraded Reality Check tools
import TimeWasteCalculator from '../components/tools/TimeWasteCalculator';
import SleepVsRankCalculator from '../components/tools/SleepVsRankCalculator';
import NegativeMarkingImpact from '../components/tools/NegativeMarkingImpact';
import DoubtCostCalculator from '../components/tools/DoubtCostCalculator';
import SyllabusTracker from '../components/tools/SyllabusTracker';

const RealityChecks = () => {
  const navigate = useNavigate();
  const [activeTool, setActiveTool] = useState('time-waste');

  const tools = [
    { id: 'time-waste', name: 'Time Waste Calculator', component: TimeWasteCalculator, desc: 'See exactly how much prep time you\'re losing daily' },
    { id: 'sleep-rank', name: 'Sleep vs Rank Impact', component: SleepVsRankCalculator, desc: 'How your sleep directly affects your JEE rank' },
    { id: 'negative-marking', name: 'Negative Marking Cost', component: NegativeMarkingImpact, desc: 'Calculate the real damage of wrong answers' },
    { id: 'doubt-cost', name: 'Doubt Cost Analyzer', component: DoubtCostCalculator, desc: 'Time & rank lost to uncleared doubts' },
    { id: 'syllabus-progress', name: 'Syllabus Progress Tracker', component: SyllabusTracker, desc: 'Are you on track? Real-time completion analysis' }
  ];

  const ActiveToolComponent = tools.find(t => t.id === activeTool)?.component || TimeWasteCalculator;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: '0.03'
        }}
      />

      {/* Header */}
      <div className="relative z-10 bg-red-400 border-b-4 border-black py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <Button onClick={() => navigate('/')} variant="outline" className="text-sm">
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Button>
          </div>
          <div className="text-center">
            <div className="inline-block bg-black text-white px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,0,1)] transform -rotate-1 mb-4">
              <h1 className="text-4xl md:text-7xl font-black uppercase flex items-center gap-3 justify-center">
                <AlertTriangle className="w-12 h-12" />
                REALITY CHECKS
              </h1>
            </div>
            <p className="text-base md:text-xl font-bold text-black">
              Face the harsh truths. Get AI-powered insights. Fix your prep strategy TODAY! 🔥
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Tool List */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sticky top-24">
              <h3 className="text-lg font-black uppercase mb-4">SELECT TOOL</h3>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className={`w-full ${activeTool === tool.id ? 'bg-red-300 border-4' : 'bg-gray-100 border-2'} border-black p-4 text-left shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all`}
                  >
                    <div className="font-black text-sm mb-1">{tool.name}</div>
                    <div className="text-xs font-bold text-black/70">{tool.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Active Tool */}
          <div className="lg:col-span-3">
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[600px]">
              <ActiveToolComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 px-4 border-t-4 border-black z-20">
        <div className="container mx-auto text-center">
          <span className="font-black text-xs md:text-sm">⚠️ Reality hurts, but it's the first step to improvement!</span>
        </div>
      </div>
    </div>
  );
};

export default RealityChecks;
