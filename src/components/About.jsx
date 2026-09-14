import React from 'react';
import { Code2, ShieldCheck, GraduationCap, Laptop, CheckCircle2, Cpu, Database, Flame } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Laptop className="w-3.5 h-3.5" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Vishwa V</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Integrating Artificial Intelligence and Machine Learning solutions into modern engineering architectures, cloud platforms, and core hardware workflows.
          </p>
        </div>

        {/* Dual Pillar Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: AI & Machine Learning Developer */}
          <div className="glass-card p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
            
            <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-md shadow-cyan-500/20">
              <Code2 className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-3">
              The AI & Machine Learning Developer
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Passionate about applying modern AI and Machine Learning models to solve intricate software challenges. Experienced in training predictive scripts with Python at Nitroware, developing NLP email automation, parsing code with LLMs, and deploying cloud-native AI solutions.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Applied Machine Learning modeling & predictive scripting with Python</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Natural Language Processing (NLP) for context-aware email automation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Large Language Models (LLMs) for code syntax parsing & logic explanation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Microsoft Azure AI services integration (AI-102 & AI-900 certified)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Cloud & Software Engineer */}
          <div className="glass-card p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />

            <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-md shadow-emerald-500/20">
              <Cpu className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-3">
              The Cloud & Software Engineer
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Grounded in robust software engineering principles, automated Python scripting, and Microsoft Azure Cloud architecture. Dedicated to building reliable, scalable backend services, intelligent data workflows, and modern web applications.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Scalable Python services, RESTful APIs & automated backend workflows</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Microsoft Certified Azure Cloud AI architecture & cognitive services</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Data preprocessing, predictive modeling & machine learning pipelines</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Relational databases with SQL/MySQL & responsive web UI interfaces</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Education & Bio Details Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                EDUCATION (2023 – 2027)
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                Bachelor of Electronics and Communication Engineering
              </h4>
              <p className="text-slate-400 text-sm mt-1">
                M Kumarasamy College of Engineering, Karur, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-10 w-full lg:w-auto justify-around lg:justify-start">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">6.7</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">CGPA / 10.0</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">72.0%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">HSC (2022-23)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">Namakkal</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Sri Vinayaga Matric</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
