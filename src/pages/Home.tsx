import { useState } from 'react';
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
  ArrowRight,
  Menu,
  X,
  Mail,
  Github,
  Twitter,
  Heart,
  Sparkles,
  CheckCircle2,
  Shield,
  Star
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      color: "bg-red-300",
      tools: ["Time Waste Calculator", "Sleep vs Rank", "Negative Marking Impact", "Doubt Cost Tracker", "Syllabus Progress"]
    },
    { 
      icon: Zap, 
      title: "SPEED GAMES & QUIZZES", 
      desc: "Mental math challenges. Physics formula memory. Periodic table speed tests.",
      color: "bg-yellow-300",
      tools: ["Mental Math Speed Test", "Physics Formula Game", "Periodic Table Quiz", "Concept Matcher", "JEE Rank Predictor"]
    },
    { 
      icon: Target, 
      title: "PLANNING & TRACKING TOOLS", 
      desc: "Study streak simulator. Topper comparison. Syllabus progress tracker.",
      color: "bg-cyan-300",
      tools: ["Study Streak Simulator", "Topper vs You", "Revision Calculator", "Mock Test Analyzer", "Goal Milestone Tracker"]
    },
  ];

  const testimonials = [
    {
      text: "Time Waste Calculator was a wake-up call! I was losing 3 hours daily on Instagram. Cut it to 30 mins and my physics improved so much!",
      author: "Aryan K.",
      grade: "12th, JEE 2026",
      color: "bg-blue-300"
    },
    {
      text: "The Mental Math Speed Test helped me improve my calculation speed. Went from 45s to 28s in 2 weeks. Helped in mock tests!",
      author: "Priya M.",
      grade: "11th, JEE 2027",
      color: "bg-pink-300"
    },
    {
      text: "Topper vs You comparison motivated me to wake up at 5:30 AM. Now I study 3 extra hours daily. Game changer!",
      author: "Rahul S.",
      grade: "Dropper, JEE 2026",
      color: "bg-green-300"
    }
  ];

  const whyUs = [
    { icon: Sparkles, text: "100% Free - No hidden charges ever" },
    { icon: Shield, text: "No signup required - Start instantly" },
    { icon: Clock, text: "Works offline - No internet needed" },
    { icon: Target, text: "Built by JEE toppers for JEE students" },
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Navbar */}
      <nav className="relative z-50 bg-yellow-300 border-b-4 border-black sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="bg-black text-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase leading-none">JEE Reality Tools</h1>
                <p className="text-xs font-bold">15+ Study Tools for Toppers</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="font-black text-sm uppercase hover:text-black/70 transition-colors">
                Features
              </a>
              <a href="#tools" className="font-black text-sm uppercase hover:text-black/70 transition-colors">
                All Tools
              </a>
              <a href="#testimonials" className="font-black text-sm uppercase hover:text-black/70 transition-colors">
                Reviews
              </a>
              <a href="#about" className="font-black text-sm uppercase hover:text-black/70 transition-colors">
                About
              </a>
              <Button onClick={() => navigate('/tools')} className="text-sm">
                🚀 TRY NOW
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t-4 border-black pt-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <a href="#features" className="font-black text-sm uppercase" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </a>
                <a href="#tools" className="font-black text-sm uppercase" onClick={() => setMobileMenuOpen(false)}>
                  All Tools
                </a>
                <a href="#testimonials" className="font-black text-sm uppercase" onClick={() => setMobileMenuOpen(false)}>
                  Reviews
                </a>
                <a href="#about" className="font-black text-sm uppercase" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
                <Button onClick={() => navigate('/tools')} className="w-full text-sm">
                  🚀 TRY NOW
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
  onClick={() => navigate('/reality-checks')}
  className="text-xl px-12 py-6"
>
  🚀 START WITH REALITY CHECKS
  <ArrowRight className="w-6 h-6" />
</Button>
              <Button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="text-xl px-12 py-6"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`${stat.color} border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
                  style={{ transform: `rotate(${idx === 1 ? '0deg' : idx === 0 ? '-1deg' : '1deg'})` }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm font-bold uppercase">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 border-y-4 border-black">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase">
              WHY STUDENTS LOVE US ❤️
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                    <Icon className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-bold text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-16">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">
            POWERFUL TOOLS IN 3 CATEGORIES 🔥
          </h3>
          <p className="text-center text-lg font-bold text-black/70 mb-12 max-w-2xl mx-auto">
            Each tool is designed with real JEE topper strategies and backed by data
          </p>
          
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
                  <p className="text-sm font-bold text-black/80 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="border-t-4 border-black pt-4">
                    <p className="text-xs font-black uppercase mb-2">INCLUDES:</p>
                    <ul className="space-y-1">
                      {feature.tools.map((tool, toolIdx) => (
                        <li key={toolIdx} className="text-xs font-bold flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 border-y-4 border-black">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">
              REAL STUDENTS, REAL RESULTS 🌟
            </h3>
            <p className="text-center text-lg font-bold text-black/70 mb-12">
              See how JEE aspirants transformed their prep with our tools
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className={`${testimonial.color} border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-bold text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                  <div className="border-t-4 border-black pt-3">
                    <p className="font-black text-sm">{testimonial.author}</p>
                    <p className="text-xs font-bold text-black/70">{testimonial.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motivational Quote */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-pink-300 border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Flame className="w-16 h-16 flex-shrink-0" />
              <div>
                <p className="text-2xl md:text-3xl font-black mb-3 leading-tight">
                  "Small daily improvements lead to stunning long-term results."
                </p>
                <p className="text-base md:text-lg font-bold text-black/70">
                  Use these tools daily to stay on track and achieve your JEE goals! 🔥
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="tools" className="bg-black text-white py-16 border-y-4 border-black">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase">READY TO GET STARTED?</h3>
            <p className="text-xl md:text-2xl font-bold mb-8 opacity-90 max-w-2xl mx-auto">
              All tools are 100% FREE. No signup required. Start improving TODAY!
            </p>
            <Button
  onClick={() => navigate('/reality-checks')}
  className="text-xl px-12 py-6"
>
  🎯 TRY REALITY CHECKS - FREE
  <ArrowRight className="w-6 h-6" />
</Button>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-center mb-8 uppercase">
              ABOUT JEE REALITY TOOLS 📚
            </h3>
            <div className="bg-cyan-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-bold leading-relaxed mb-4">
                We're a team of IIT alumni and JEE toppers who understand the struggle of JEE preparation. 
                We built these tools because we wished we had them during our prep days.
              </p>
              <p className="text-lg font-bold leading-relaxed mb-4">
                Every tool is designed with real data from JEE toppers, proven study techniques, and 
                feedback from 10,000+ students currently using our platform.
              </p>
              <p className="text-lg font-bold leading-relaxed">
                Our mission: Help every JEE aspirant study smarter, not harder. 🎯
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-300 text-black p-2 border-4 border-white">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black">JEE REALITY TOOLS</h4>
              </div>
              <p className="text-sm font-bold opacity-75 leading-relaxed">
                15+ interactive tools to help JEE students study smarter and achieve their dream ranks.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-black mb-4 uppercase">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm font-bold hover:text-yellow-300 transition-colors">Features</a></li>
                <li><a href="#tools" className="text-sm font-bold hover:text-yellow-300 transition-colors">All Tools</a></li>
                <li><a href="#testimonials" className="text-sm font-bold hover:text-yellow-300 transition-colors">Reviews</a></li>
                <li><a href="#about" className="text-sm font-bold hover:text-yellow-300 transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h5 className="text-lg font-black mb-4 uppercase">Popular Tools</h5>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/tools')} className="text-sm font-bold hover:text-yellow-300 transition-colors text-left">Time Waste Calculator</button></li>
                <li><button onClick={() => navigate('/tools')} className="text-sm font-bold hover:text-yellow-300 transition-colors text-left">Mental Math Speed Test</button></li>
                <li><button onClick={() => navigate('/tools')} className="text-sm font-bold hover:text-yellow-300 transition-colors text-left">JEE Rank Predictor</button></li>
                <li><button onClick={() => navigate('/tools')} className="text-sm font-bold hover:text-yellow-300 transition-colors text-left">Mock Test Analyzer</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-lg font-black mb-4 uppercase">Connect</h5>
              <div className="flex gap-4 mb-4">
                <a href="mailto:contact@jeerealitytools.com" className="bg-white text-black p-3 border-4 border-white hover:bg-yellow-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 border-4 border-white hover:bg-yellow-300 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 border-4 border-white hover:bg-yellow-300 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs font-bold opacity-75">
                Have feedback or suggestions? We'd love to hear from you!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-4 border-white pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-bold opacity-75 text-center md:text-left">
              © 2025 JEE Reality Tools. All rights reserved.
            </p>
            <p className="text-sm font-bold flex items-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current text-red-500" /> for JEE Warriors
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
