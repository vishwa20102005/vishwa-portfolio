import React, { useState } from 'react';
import { Layers, Code, ShieldCheck, Cloud, Cpu, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Layers },
    { id: 'prog', label: 'Programming & Web', icon: Code },
    { id: 'aiml', label: 'AI & Machine Learning', icon: Cpu },
    { id: 'cloud', label: 'Cloud & Tools', icon: Cloud },
  ];

  const skillData = [
    // Programming & Web
    { name: 'Python', category: 'prog', level: 'Advanced', desc: 'Core scripting, dataset operations, ML modeling frameworks' },
    { name: 'Java', category: 'prog', level: 'Advanced', desc: 'Object-Oriented Programming, competitive coding, data structures' },
    { name: 'SQL & MySQL', category: 'prog', level: 'Proficient', desc: 'Relational database schema modeling, queries, data metrics' },
    { name: 'JavaScript (ES6+)', category: 'prog', level: 'Proficient', desc: 'Async/await, DOM manipulation, interactive frontend UI' },
    { name: 'HTML5 & CSS3', category: 'prog', level: 'Expert', desc: 'Semantic web layouts, Flexbox/Grid, responsive web design' },
    { name: 'Bootstrap', category: 'prog', level: 'Expert', desc: 'Mobile-first responsive grids, UI components, styling' },

    // AI & Machine Learning
    { name: 'Large Language Models (LLMs)', category: 'aiml', level: 'Applied', desc: 'Syntax dissection, logic explanations, snippet parsing workflows' },
    { name: 'Natural Language Processing (NLP)', category: 'aiml', level: 'Applied', desc: 'Text parsing, email categorization, context-aware auto drafts' },
    { name: 'Prompt Engineering & Prompt Chains', category: 'aiml', level: 'Applied', desc: 'Custom system prompts, few-shot conditioning, and structured reasoning' },
    { name: 'Complex Problem-Solving', category: 'aiml', level: 'Competency', desc: 'Algorithmic reasoning, TCS Codevita competitive challenges' },

    // Cloud, Tools & Certifications
    { name: 'Azure AI Engineer Associate (AI-102)', category: 'cloud', level: 'Certified', desc: 'Microsoft Certified: Azure AI services, vision, language & NLP solutions' },
    { name: 'Azure AI Fundamentals (AI-900)', category: 'cloud', level: 'Certified', desc: 'Microsoft Certified: Cloud AI concepts, ML workloads, computer vision' },
    { name: 'TCS CodeVita Season 12', category: 'cloud', level: 'Rank 6557', desc: 'Secured Global Rank 6557 in TCS CodeVita Season 12 corporate competitive coding challenge' },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillData
    : skillData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A versatile toolkit spanning Python & full-stack web development, Machine Learning, Microsoft Azure AI certification, and cloud services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            const isProg = skill.category === 'prog';
            const isAIML = skill.category === 'aiml';
            const isCloud = skill.category === 'cloud';

            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                      isAIML
                        ? 'bg-emerald-950/70 border border-emerald-500/30 text-emerald-300'
                        : isProg
                        ? 'bg-cyan-950/70 border border-cyan-500/30 text-cyan-300'
                        : 'bg-purple-950/70 border border-purple-500/30 text-purple-300'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
