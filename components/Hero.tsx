import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Globe, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xyz-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-xyz-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-scroll [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-xyz-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Hustle Arena Badge */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-500/50 bg-yellow-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Cpu className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Built for Hustle Arena</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-xyz-blue/30 bg-xyz-blue/10 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-xyz-blue animate-pulse"></span>
          <span className="text-xyz-blue text-xs font-bold uppercase tracking-widest">System Operational</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 relative">
          TRACKING <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-xyz-blue to-xyz-green neon-text-blue relative inline-block hover:scale-105 transition-transform duration-300">
            REDEFINED
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed border-l-2 border-xyz-green/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          The next generation of logistics intelligence. 
          Real-time monitoring, AI-driven analytics, and military-grade security for your fleet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#dashboard" className="group flex items-center justify-center gap-2 bg-xyz-blue text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:-translate-y-1">
            View Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#features" className="flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:border-xyz-green hover:text-xyz-green hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all hover:-translate-y-1">
            Explore Features
          </a>
        </div>

        {/* Stats / Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl border-t border-white/10 pt-8">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Globe className="w-8 h-8 text-xyz-blue mb-2" />
            <h3 className="text-2xl font-bold text-white">Global</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Coverage</p>
          </div>
          <div className="flex flex-col items-center border-l-0 md:border-l border-r-0 md:border-r border-white/10 hover:scale-105 transition-transform duration-300">
            <Activity className="w-8 h-8 text-xyz-green mb-2" />
            <h3 className="text-2xl font-bold text-white">99.9%</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Uptime</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="w-8 h-8 text-purple-500 mb-2" />
            <h3 className="text-2xl font-bold text-white">Secure</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest">AES-256 Encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;