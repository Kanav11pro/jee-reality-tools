import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Brain, 
  Target, 
  Timer, 
  Zap, 
  Trophy,
  TrendingUp,
  AlertTriangle,
  BookOpen,
  Award,
  Clock,
  Flame,
  ArrowLeft,
  Home,
  Gamepad2,
  BarChart3
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// Import all tool components
import TimeWasteCalculator from '../components/tools/TimeWasteCalculator';
import SleepVsRankCalculator from '../components/tools/SleepVsRankCalculator';
import MentalMathSpeedTest from '../components/tools/MentalMathSpeedTest';
import PhysicsFormulaGame from '../components/tools/PhysicsFormulaGame';
import SyllabusTracker from '../components/tools/SyllabusTracker';
import NegativeMarkingImpact from '../components/tools/NegativeMarkingImpact';
import RevisionCalculator from '../components/tools/RevisionCalculator';
import PeriodicTableQuiz from '../components/tools/PeriodicTableQuiz';
import ConceptMatcher from '../components/tools/ConceptMatcher';
import RankPredictor from '../components/tools/RankPredictor';
import StudyStreakSimulator from '../components/tools/StudyStreakSimulator';
import TopperComparison from '../components/tools/TopperComparison';
import DoubtCostCalculator from '../components/tools/DoubtCostCalculator';
import MockTestAnalyzer from '../components/tools/MockTestAnalyzer';
import GoalMilestoneTracker from '../components/tools/GoalMilestoneTracker';

const StudyTools = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('reality');
  const [activeTool, setActiveTool] = useState('time-waste');

  const categories = [
    { id: 'reality', name: 'Reality Checks', icon: AlertTriangle, color: 'bg-red-400' },
    { id: 'games', name: 'Speed Games', icon: Zap, color: 'bg-yellow-400' },
    { id: 'planning', name: 'Planning Tools', icon: Target, color: 'bg-green-400' }
  ];

  const tools: Record<string, Array<{ id: string; name: string; icon: any; component: React.FC }>> = {
    reality: [
      { id: 'time-waste', name: 'Time Waste Calculator', icon: Clock, component: TimeWasteCalculator },
      { id: 'sleep-rank', name: 'Sleep vs Rank', icon: Brain, component: SleepVsRankCalculator },
      { id: 'negative-marking', name: 'Negative Marking Impact', icon: AlertTriangle, component: NegativeMarkingImpact },
      { id: 'doubt-cost', name: 'Doubt Cost Calculator', icon: BookOpen, component: DoubtCostCalculator },
      { id: 'syllabus-tracker', name: 'Syllabus Progress', icon: TrendingUp, component: SyllabusTracker }
    ],
    games: [
      { id: 'mental-math', name: 'Mental Math Speed', icon: Calculator, component: MentalMathSpeedTest },
      { id: 'physics-formula', name: 'Physics Formula Memory', icon: Flame, component: PhysicsFormulaGame },
      { id: 'periodic-table', name: 'Periodic Table Quiz', icon: Trophy, component: PeriodicTableQuiz },
      { id: 'concept-matcher', name: 'Concept Matcher', icon: Target, component: ConceptMatcher },
      { id: 'rank-predictor', name: 'JEE Rank Predictor', icon: Award, component: RankPredictor }
    ],
    planning: [
      { id: 'study-streak', name: 'Study Streak Simulator', icon: Flame, component: StudyStreakSimulator },
      { id: 'topper-comparison', name: 'Topper vs You', icon: TrendingUp, component: TopperComparison },
      { id: 'revision-calc', name: 'Revision Calculator', icon: BookOpen, component: RevisionCalculator },
      { id: 'mock-analyzer', name: 'Mock Test Analyzer', icon: BarChart3, component: MockTestAnalyzer },
      { id: 'goal-tracker', name: 'Goal Milestone Tracker', icon: Trophy, component: GoalMilestoneTracker }
    ]
  };

  const ActiveToolComponent = tools[activeCategory].find(t => t.id === activeTool)?.component || TimeWasteCalculator;

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
      <div className="relative z-10 bg-yellow-300 border-b-4 border-black py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-black mb-3 uppercase transform -rotate-1 inline-block">
              🎯 REALITY CHECK ZONE
            </h1>
            <p className="text-base md:text-xl font-bold text-black/70">
              15+ Interactive Tools to Improve Your JEE Preparation Strategy
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Tool Categories & List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Category Tabs */}
            <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black uppercase mb-4">CATEGORIES</h3>
              <div className="space-y-3">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setActiveTool(tools[cat.id][0].id);
                      }}
                      className={`w-full ${cat.color} ${activeCategory === cat.id ? 'border-4' : 'border-2'} border-black p-3 font-black text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-2 justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="hidden sm:inline">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tool List */}
            <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-lg font-black uppercase mb-4">TOOLS</h3>
              <div className="space-y-2">
                {tools[activeCategory].map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setActiveTool(tool.id)}
                      className={`w-full ${activeTool === tool.id ? 'bg-cyan-300 border-3' : 'bg-gray-100 border-2'} border-black p-3 font-bold text-xs text-left shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-2`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{tool.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-sm font-black uppercase mb-3">🔥 QUICK STATS</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Tools Available:</span>
                  <span className="text-lg font-black">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Students Helped:</span>
                  <span className="text-lg font-black">10K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Avg Time Saved:</span>
                  <span className="text-lg font-black">45min/day</span>
                </div>
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
          <span className="font-black text-xs md:text-sm">💡 Pro Tip: Use these tools daily to stay motivated and track progress!</span>
        </div>
      </div>
    </div>
  );
};

export default StudyTools;

