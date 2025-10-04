import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  Calculator, 
  Users, 
  Clock,
  Flame,
  AlertTriangle,
  Zap,
  Target,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { value: "15+", label: "Interactive Tools", icon: Calculator, color: "bg-orange-400" },
    { value: "10K+", label: "Students Helped", icon: Users, color: "bg-green-400" },
    { value: "45min", label: "Time Saved Daily", icon: Clock, color: "bg-purple-400" },
  ];

  const features = [
    { 
      icon: AlertTriangle, 
      title: "REALITY CHECK CALCULATORS", 
      desc: "See how much time you're wasting. Track sleep impact on rank. Understand negative marking.",
      color: "bg-red-300"
    },
    { 
      icon: Zap, 
      title: "SPEED GAMES & QUIZZES", 
      desc: "Mental math challenges. Physics formula memory. Periodic table speed tests.",
      color: "bg-yellow-300"
    },
    { 
      icon: Target, 
      title: "PLANNING & TRACKING TOOLS", 
      desc: "Study streak simulator. Topper comparison. Syllabus progress tracker.",
      color: "bg-cyan-300"
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="bg-yellow-300 border-4 border-black px-8 py-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                <h1 className="text-5xl md:text-8xl font-black text-black">JEE REALITY CHECK</h1>
              </div>
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-6 text-black leading-tight">
              15+ TOOLS TO IMPROVE YOUR JEE PREP STRATEGY 🎯
            </h2>
            <p className="text-lg md:text-2xl font-bold text-black/70 mb-8 max-w-3xl mx-auto">
              Interactive calculators, speed games, and planning tools built specifically for JEE aspirants
            </p>
            <Button
              onClick={() => navigate('/tools')}
              className="text-lg md:text-xl"
            >
              🚀 EXPLORE TOOLS NOW
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`${stat.color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
                  style={{ transform: `rotate(${idx === 1 ? '0deg' : idx === 0 ? '-1deg' : '1deg'})` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm font-bold uppercase">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`${feature.color} border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
                >
                  <div className="bg-white border-4 border-black p-4 inline-block mb-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black mb-3 uppercase">{feature.title}</h3>
                  <p className="text-sm font-bold text-black/80 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Motivational Quote */}
          <div className="bg-pink-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-16 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Flame className="w-12 h-12 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl font-black mb-3 leading-tight">
                  "Small daily improvements lead to stunning long-term results."
                </p>
                <p className="text-base font-bold text-black/70">
                  Use these tools daily to stay on track and achieve your JEE goals! 🔥
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-black text-white border-4 border-black p-12 shadow-[12px_12px_0px_0px_rgba(255,255,0,1)] text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">READY TO GET STARTED?</h3>
            <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
              All tools are 100% FREE. No signup required. Start improving TODAY!
            </p>
            <Button
              onClick={() => navigate('/tools')}
              variant="default"
              className="text-xl"
            >
              🎯 START NOW
            </Button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-6 px-4 border-t-4 border-black">
        <div className="container mx-auto text-center">
          <p className="font-black text-lg mb-2">💡 Built for JEE Warriors by JEE Toppers</p>
          <p className="text-sm font-bold opacity-75">
            All tools use real data and proven strategies from successful JEE rankers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

