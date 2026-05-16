/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  Shield, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Command, 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Users,
  ArrowUpRight,
  Send,
  Mail,
  User,
  MessageSquare,
  Github,
  Figma,
  Slack,
  Trello,
  Framer,
  Code2,
  Layers,
  Check,
  ChevronDown
} from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-tm-accent selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-50" />
      <div className="fixed top-[-10%] left-[-10%] glow-orb" />
      <div className="fixed top-[40%] right-[-10%] glow-orb" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)' }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tm-accent to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Command className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">TaskMaster</span>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-8 rounded-full glass px-6 py-2">
              <a href="#features" className="text-sm font-medium text-tm-secondary hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-sm font-medium text-tm-secondary hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm font-medium text-tm-secondary hover:text-white transition-colors">Pricing</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-tm-secondary hover:text-white transition-colors">Log in</button>
            <button className="px-5 py-2 text-sm font-medium bg-white text-tm-bg rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-tm-surface/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-display font-medium">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <div className="h-px bg-tm-border my-2" />
              <button className="text-left">Log in</button>
              <button className="bg-white text-tm-bg py-3 rounded-xl font-semibold text-center mt-4">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-left relative z-10">
              <motion.div 
                initial="hidden"
                animate="show"
                variants={STAGGER_CONTAINER}
                className="flex flex-col items-start gap-6"
              >
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-tm-bg z-30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-tm-bg z-20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-tm-bg z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                         <Star key={star} className="w-3 h-3 fill-tm-accent text-tm-accent" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-tm-secondary mt-1">Trusted by 100K+ users</span>
                  </div>
                </motion.div>

                <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tm-border bg-tm-surface/50 text-xs font-mono text-tm-accent uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-tm-accent animate-pulse" />
                  TaskMaster 2.0 is highly proactive
                </motion.div>
                
                <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-balance">
                  Master your work.<br />
                  <span className="text-gradient-accent">Reclaim your time.</span>
                </motion.h1>
                
                <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg md:text-xl text-tm-secondary max-w-xl text-balance">
                  The ultimate productivity hub that brings your tasks, calendar, and focus together. Experience unprecedented clarity and speed in your daily workflows.
                </motion.p>
                
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                  <button className="h-12 w-full sm:w-auto px-8 rounded-full bg-tm-primary text-tm-bg font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Start for free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="h-12 w-full sm:w-auto px-8 rounded-full glass font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    Book a Demo
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Premium UI Mockup CSS - iPhone Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ rotateX, rotateY, perspective: 1200, transformStyle: "preserve-3d" }}
              className="relative z-10 w-full max-w-[320px] mx-auto lg:ml-auto lg:mr-0 will-change-transform"
            >
              {/* Outer phone glow/shadow */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-tm-accent/40 to-blue-500/40 blur-[40px] rounded-[4rem] opacity-40 z-0"
                style={{ transform: "translateZ(-50px)" }}
              ></div>
              
              {/* Phone Hardware casing */}
              <div 
                className="relative rounded-[3rem] bg-gray-900 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.2),0_25px_50px_-12px_rgba(0,0,0,0.8),30px_30px_60px_rgba(0,0,0,0.6)] h-[650px] z-10"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
              >
                
                {/* Physical buttons */}
                <div className="absolute left-[-3px] top-[120px] w-[3px] h-8 bg-gray-700/80 rounded-l-md border-r border-black" />
                <div className="absolute left-[-3px] top-[170px] w-[3px] h-14 bg-gray-700/80 rounded-l-md border-r border-black" />
                <div className="absolute left-[-3px] top-[240px] w-[3px] h-14 bg-gray-700/80 rounded-l-md border-r border-black" />
                <div className="absolute right-[-3px] top-[190px] w-[3px] h-20 bg-gray-700/80 rounded-r-md border-l border-black" />
                
                {/* Phone Screen */}
                <div 
                  className="relative rounded-[2.5rem] bg-white overflow-hidden h-full flex flex-col shadow-[inset_0_0_10px_rgba(0,0,0,0.1)]"
                  style={{ transform: "translateZ(20px)" }}
                >
                  
                  {/* Glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 z-50 pointer-events-none rounded-[2.5rem]" />

                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-40 flex items-center justify-between px-3 shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                    <div className="w-10 h-2 rounded-full bg-gray-900 shadow-[inset_0_1px_2px_rgba(0,0,0,1)]" />
                    <div className="w-3 h-3 rounded-full bg-slate-900/90 flex flex-col items-center justify-center border border-gray-800">
                      <div className="w-1 h-1 rounded-full bg-blue-500/80 shadow-[0_0_4px_#3b82f6]" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="h-24 pt-10 border-b border-gray-100 flex items-center justify-between px-5 bg-gray-50/90 backdrop-blur-md z-20 relative">
                    <Menu className="w-6 h-6 text-gray-800" />
                    <div className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden ring-2 ring-white shadow-sm bg-white">
                       <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&q=80" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Mockup Body */}
                  <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-white p-5 overflow-y-auto pb-24 no-scrollbar relative z-10">
                    <div className="flex items-center justify-between mb-6">
                       <h3 className="text-xl font-display font-semibold text-gray-900">Today</h3>
                       <div className="flex gap-2">
                         <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                           <Zap className="w-4 h-4 text-tm-accent" />
                         </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Metric Cards */}
                      <div className="p-4 rounded-2xl border border-gray-100 bg-white shadow-sm transition-transform hover:scale-[1.02]">
                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1">Focus</p>
                        <p className="text-2xl font-display font-semibold text-gray-900">4<span className="text-sm text-gray-500 font-medium">h</span></p>
                      </div>
                      <div className="p-4 rounded-2xl border border-gray-100 bg-white shadow-sm relative overflow-hidden transition-transform hover:scale-[1.02]">
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-tm-accent to-blue-400" />
                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1">Done</p>
                        <p className="text-2xl font-display font-semibold text-gray-900">12</p>
                      </div>
                    </div>

                    {/* Task List */}
                    <div className="flex flex-col gap-3">
                      {[
                        { title: "Marketing Strategy", time: "10:00 AM", done: false },
                        { title: "Review Designs", time: "1:30 PM", done: false },
                        { title: "Weekly Sync", time: "3:00 PM", done: true },
                        { title: "Inbox Zero", time: "4:00 PM", done: false },
                        { title: "Client Call", time: "5:00 PM", done: false },
                      ].map((task, i) => (
                        <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-gray-50">
                          <div className={`w-5 h-5 flex-shrink-0 rounded flex items-center justify-center ${task.done ? 'bg-tm-accent text-white shadow-sm' : 'border-2 border-gray-200 text-transparent'}`}>
                             <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-[15px] font-medium truncate ${task.done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{task.title}</p>
                            <p className="text-[11px] text-gray-500 mt-0.5 font-medium">{task.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile Bottom Nav */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-white/90 border-t border-gray-100 backdrop-blur-xl flex items-start pt-3 justify-around px-4 z-20 pb-safe">
                    <Calendar className="w-6 h-6 text-gray-400 hover:text-gray-900 transition-colors" />
                    <div className="w-14 h-14 rounded-full bg-tm-accent flex items-center justify-center text-white shadow-lg shadow-tm-accent/40 -translate-y-5 hover:scale-105 transition-transform cursor-pointer">
                      <Command className="w-6 h-6" />
                    </div>
                    <Users className="w-6 h-6 text-gray-400 hover:text-gray-900 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top Features Section */}
        <section className="py-24 px-6 border-t border-tm-border/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-tm-accent/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="max-w-7xl mx-auto">
             <div className="mb-16">
               <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">Features built for <span className="text-gradient">speed.</span></h2>
               <p className="text-tm-secondary text-lg max-w-2xl">Everything you need to manage your personal and professional life, out of the box.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
               {[
                 { title: "Keyboard Centric", desc: "Command palette for everything. Execute actions, navigate views, and manage states entirely via keystrokes to maintain your flow state.", useCase: "Perfect for: Keeping your hands on the keyboard to log tasks instantly.", icon: <Command className="w-5 h-5" /> },
                 { title: "Smart Scheduling", desc: "Calendar integration with AI-powered timeblock suggestions. TaskMaster learns your energy patterns to suggest the best times for deep work.", useCase: "Perfect for: Carving out focused time amidst a chaotic meeting schedule.", icon: <Calendar className="w-5 h-5" /> },
                 { title: "Deep Work Modes", desc: "Block digital distractions and track true uninterrupted focus time. Automatically mutes system notifications and plays ambient sounds.", useCase: "Perfect for: Writers and creatives who need long blocks of concentration.", icon: <Zap className="w-5 h-5" /> },
                 { title: "End-to-End Encryption", desc: "Your tasks are yours. Zero-knowledge architecture ensures that not even our team can read your personal plans or sensitive work notes.", useCase: "Perfect for: Executives, legal teams, and privacy-conscious users.", icon: <Shield className="w-5 h-5" /> },
                 { title: "Real-time Collaboration", desc: "Instant sync with your team on shared projects. Multiplayer task management where updates and comments appear instantly without reloading.", useCase: "Perfect for: Remote and hybrid teams needing a single source of truth.", icon: <Users className="w-5 h-5" /> },
                 { title: "Advanced Analytics", desc: "Visualize your productivity trends over time. Identify bottlenecks in your week, see exactly where your focus hours went, and measure velocity.", useCase: "Perfect for: Anyone looking to audit their time and optimize their routines.", icon: <TrendingUp className="w-5 h-5" /> }
               ].map((feature, i) => (
                 <div key={i} className="group cursor-pointer">
                   <div className="flex justify-between items-start mb-4">
                     <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border border-white/10 group-hover:bg-white/5 transition-colors">
                       <div className="text-tm-secondary group-hover:text-tm-accent transition-colors">
                         {feature.icon}
                       </div>
                     </div>
                     <ArrowUpRight className="w-5 h-5 text-tm-secondary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-tm-accent" />
                   </div>
                   <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-white transition-colors">{feature.title}</h3>
                   <p className="text-tm-secondary text-sm leading-relaxed mb-4">{feature.desc}</p>
                   <p className="text-xs font-mono text-tm-accent uppercase tracking-wider bg-tm-accent/10 p-3 rounded-lg border border-tm-accent/10">{feature.useCase}</p>
                 </div>
               ))}
             </div>

             <div className="mt-16 flex justify-center">
               <button className="h-12 px-8 rounded-full border border-white/20 glass font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                 Explore all features <ArrowRight className="w-4 h-4 text-tm-secondary" />
               </button>
             </div>
           </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 px-6 border-t border-tm-border/50">
           <div className="max-w-7xl mx-auto">
             <div className="mb-16 text-center">
               <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">How it <span className="text-gradient">works.</span></h2>
               <p className="text-tm-secondary text-lg max-w-2xl mx-auto">A workflow designed for maximum efficiency. Go from thought to execution in seconds.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { step: "01", title: "Capture", desc: "Instantly capture tasks and ideas with our global keyboard shortcut, without leaving your current app." },
                 { step: "02", title: "Organize", desc: "AI automatically categories and predicts the time duration and priority for your tasks." },
                 { step: "03", title: "Execute", desc: "Enter Focus Mode to block out distractions and execute tasks one by one with deep concentration." }
               ].map((item, i) => (
                 <div key={i} className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 group-hover:text-tm-accent/10 transition-colors pointer-events-none">{item.step}</div>
                   <div className="relative z-10">
                     <div className="w-10 h-10 rounded-full border border-tm-accent/50 text-tm-accent flex items-center justify-center font-bold mb-6">{item.step}</div>
                     <h3 className="text-2xl font-display font-semibold mb-3 text-white">{item.title}</h3>
                     <p className="text-tm-secondary text-base leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Integrations Section */}
        <section className="py-24 px-6 border-t border-tm-border/50 overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tm-accent/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="max-w-7xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">Plays well with <span className="text-gradient">others.</span></h2>
              <p className="text-tm-secondary text-lg max-w-2xl mx-auto mb-16">Connect your favorite tools and bring all your work into one unified command center.</p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-70 hover:opacity-100 transition-opacity">
                 <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer border border-white/10 group"><Github className="w-8 h-8 text-white group-hover:text-tm-accent transition-colors" /></div>
                 <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer border border-white/10 group"><Figma className="w-8 h-8 text-white group-hover:text-tm-accent transition-colors" /></div>
                 <div className="glass w-24 h-24 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer border border-tm-accent bg-tm-accent/10 group relative"><Command className="w-10 h-10 text-tm-accent" /><div className="absolute inset-0 bg-tm-accent/20 blur-xl rounded-2xl"></div></div>
                 <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer border border-white/10 group"><Slack className="w-8 h-8 text-white group-hover:text-tm-accent transition-colors" /></div>
                 <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer border border-white/10 group"><Trello className="w-8 h-8 text-white group-hover:text-tm-accent transition-colors" /></div>
                 <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer border border-white/10 group hidden sm:flex"><Code2 className="w-8 h-8 text-white group-hover:text-tm-accent transition-colors" /></div>
              </div>
           </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 border-t border-tm-border/50">
           <div className="max-w-7xl mx-auto">
             <div className="mb-16 text-center">
               <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">Simple, transparent <span className="text-gradient">pricing.</span></h2>
               <p className="text-tm-secondary text-lg max-w-2xl mx-auto">Start for free, upgrade when you need power.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "Starter", price: "Free", period: "forever", desc: "Perfect for individuals organizing personal tasks.", features: ["Up to 100 tasks/month", "Basic Calendar view", "Community Support", "Web access only"], buttonText: "Get Started Free", featured: false },
                 { name: "Pro", price: "$12", period: "per user/month", desc: "For power users who need advanced workflows.", features: ["Unlimited tasks", "AI suggestions", "Deep Work Tracking", "Mac & Windows Apps", "Priority Support"], buttonText: "Start 14-day Free Trial", featured: true },
                 { name: "Enterprise", price: "$29", period: "per user/month", desc: "Built for teams needing admin controls.", features: ["Everything in Pro", "Advanced Member Roles", "SSO & SAML", "Unlimited Integrations", "Dedicated Account Manager"], buttonText: "Contact Sales", featured: false }
               ].map((plan, i) => (
                 <div key={i} className={`p-8 rounded-3xl border flex flex-col ${plan.featured ? 'border-tm-accent bg-tm-accent/5 relative' : 'border-white/10 glass'}`}>
                   {plan.featured && <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-tm-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">Most Popular</div>}
                   <h3 className="text-xl font-display font-semibold mb-2 text-white">{plan.name}</h3>
                   <div className="flex items-baseline gap-1 mb-4">
                     <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                     <span className="text-sm text-tm-secondary">{plan.period}</span>
                   </div>
                   <p className="text-tm-secondary text-sm mb-8 pb-8 border-b border-white/10">{plan.desc}</p>
                   
                   <ul className="flex flex-col gap-4 mb-8 flex-1">
                     {plan.features.map((feature, j) => (
                       <li key={j} className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full bg-tm-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                           <Check className="w-3 h-3 text-tm-accent" />
                         </div>
                         <span className="text-sm text-gray-300">{feature}</span>
                       </li>
                     ))}
                   </ul>
                   
                   <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.featured ? 'bg-tm-accent text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                     {plan.buttonText}
                   </button>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 border-t border-tm-border/50">
           <div className="max-w-3xl mx-auto">
             <div className="mb-12 text-center">
               <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">Frequently asked <span className="text-gradient">questions.</span></h2>
             </div>
             
             <div className="flex flex-col gap-4">
               {[
                 { q: "Is there a desktop app?", a: "Yes, TaskMaster is available for macOS, Windows, and Linux. We also have mobile apps for iOS and Android." },
                 { q: "How does the keyboard navigation work?", a: "TaskMaster features a global command palette (Cmd/Ctrl + K) that lets you navigate the app, create tasks, and execute actions instantly." },
                 { q: "Can I import my data from other tools?", a: "Absolutely. We support 1-click imports from Todoist, TickTick, Notion, and Asana." },
                 { q: "What happens when my free trial ends?", a: "You'll automatically be moved to our Free Starter plan. You won't lose any data, but you'll lose access to Pro features until you subscribe." },
                 { q: "Do you offer discounts for students?", a: "Yes! Students and educators get 50% off TaskMaster Pro. Just contact support with your .edu email." }
               ].map((faq, i) => (
                 <details key={i} className="glass border border-white/10 rounded-2xl overflow-hidden group cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                   <summary className="flex items-center justify-between p-6 font-medium text-white select-none">
                     {faq.q}
                     <ChevronDown className="w-5 h-5 text-tm-secondary group-open:-rotate-180 transition-transform" />
                   </summary>
                   <div className="px-6 pb-6 text-tm-secondary text-sm leading-relaxed border-t border-white/5 pt-4">
                     {faq.a}
                   </div>
                 </details>
               ))}
             </div>
           </div>
        </section>

        {/* Testimonials Marquee */}
        <section id="testimonials" className="py-24 border-y border-tm-border/50 bg-black/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16">
             <h2 className="text-2xl md:text-4xl font-display font-medium tracking-tight mb-4 text-center">Loved by top performers.</h2>
          </div>

          <div className="w-full flex overflow-hidden">
             <div className="animate-marquee flex gap-6 px-3">
               {[
                 {
                   name: "Sarah Jenkins",
                   role: "Product Lead at TechNova",
                   content: "TaskMaster completely revolutionized how I plan my weeks. The keyboard-first approach is something I can't live without anymore."
                 },
                 {
                   name: "Michael Chen",
                   role: "Indie Hacker",
                   content: "The most beautifully designed productivity app I've ever used. It actually makes me want to get work done."
                 },
                 {
                   name: "Elena Rodriguez",
                   role: "Creative Director",
                   content: "I've tried them all, but TaskMaster hits that perfect balance between powerful features and a stunning, clutter-free UI."
                 },
                 {
                   name: "David Kim",
                   role: "Software Engineer",
                   content: "The speed of this app is unmatched. I can create issues, schedule them, and log time all with a few keystrokes."
                 },
                 {
                   name: "Sarah Jenkins",
                   role: "Product Lead at TechNova",
                   content: "TaskMaster completely revolutionized how I plan my weeks. The keyboard-first approach is something I can't live without anymore."
                 },
                 {
                   name: "Michael Chen",
                   role: "Indie Hacker",
                   content: "The most beautifully designed productivity app I've ever used. It actually makes me want to get work done."
                 },
                 {
                   name: "Elena Rodriguez",
                   role: "Creative Director",
                   content: "I've tried them all, but TaskMaster hits that perfect balance between powerful features and a stunning, clutter-free UI."
                 },
                 {
                   name: "David Kim",
                   role: "Software Engineer",
                   content: "The speed of this app is unmatched. I can create issues, schedule them, and log time all with a few keystrokes."
                 }
               ].map((testimonial, i) => (
                 <div key={i} className="glass p-8 rounded-2xl flex flex-col gap-6 w-[400px] flex-shrink-0">
                   <div className="flex gap-1">
                     {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-tm-accent text-tm-accent" />
                     ))}
                   </div>
                   <p className="text-lg flex-1 text-gray-300">"{testimonial.content}"</p>
                   <div>
                     <p className="font-semibold text-white">{testimonial.name}</p>
                     <p className="text-sm text-tm-secondary uppercase tracking-wider font-mono mt-1">{testimonial.role}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tm-accent/5 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10 glass p-12 md:p-20 rounded-[3rem] border border-tm-accent/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
             <div className="w-16 h-16 mx-auto bg-gradient-to-br from-tm-accent to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
               <CheckCircle2 className="w-8 h-8 text-white" />
             </div>
             <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">Ready to elevate your focus?</h2>
             <p className="text-xl text-tm-secondary mb-10 max-w-2xl mx-auto">Join thousands of professionals who have upgraded their workflow with TaskMaster.</p>
             <button className="h-14 px-10 rounded-full bg-white text-tm-bg font-semibold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Get TaskMaster Free
             </button>
             <p className="mt-6 text-sm text-tm-secondary font-medium">No credit card required • 14-day premium trial</p>
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">Get in touch.</h2>
              <p className="text-lg text-tm-secondary mb-10">Have questions about Enterprise plans, custom integrations, or just want to say hi? We'd love to hear from you.</p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-tm-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email Us</p>
                    <p className="text-sm text-tm-secondary">hello@taskmaster.app</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-tm-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Live Support</p>
                    <p className="text-sm text-tm-secondary">Available 24/7 for Enterprise</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl border border-white/5">
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-tm-secondary">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-tm-secondary/50" />
                      </div>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl h-12 pl-10 pr-4 text-white focus:outline-none focus:border-tm-accent transition-colors" placeholder="John" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-tm-secondary">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 text-white focus:outline-none focus:border-tm-accent transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-tm-secondary">Work Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-tm-secondary/50" />
                    </div>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl h-12 pl-10 pr-4 text-white focus:outline-none focus:border-tm-accent transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-tm-secondary">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-tm-accent transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full h-12 mt-4 bg-white text-tm-bg font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 border-t border-tm-border relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tm-accent/40 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-tm-accent" />
            <span className="font-display font-semibold tracking-tight text-white">TaskMaster</span>
          </div>
          <div className="flex gap-8 text-sm text-tm-secondary font-medium">
             <a href="#" className="hover:text-white transition-colors">Product</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="max-w-[100vw] overflow-hidden flex justify-center mb-8 relative z-0 opacity-[0.03]">
          <h1 className="text-[15vw] leading-none font-display font-black tracking-tighter uppercase select-none pointer-events-none">
            TASKMASTER
          </h1>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-center border-t border-white/5 pt-8">
          <p className="text-sm text-tm-secondary font-mono">© {new Date().getFullYear()} TaskMaster Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
