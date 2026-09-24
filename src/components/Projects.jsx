import React from 'react';
import { ExternalLink, BookOpen, Layers, Cpu, Award, Eye } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'ai-code-explainer',
      title: 'AI Code Explainer & Analysis Tool',
      tagline: 'Interactive LLM Web Tool for Syntax Parsing & Logic Dissection',
      category: 'Independent Project',
      tags: ['Python', 'LLM APIs', 'Prompt Engineering', 'REST Endpoints', 'HTML/CSS'],
      summary:
        'An interactive web tool utilizing Python and Large Language Models (LLMs) to automatically parse code syntax, explain algorithmic logic, and translate complex code segments into readable explanations.',
      highlights: [
        'Engineered an interactive web tool utilizing Python and LLMs to automatically parse code syntax and generate human-readable technical explanations',
        'Implemented custom snippet-parsing workflows to deconstruct multi-language source code (Python, Java), reducing manual debugging time by 35%',
        'Designed secure backend API calls to process context-aware code analyses in real time with optimized token handling',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'ai-email-auto-responder',
      title: 'AI Email Auto-Responder & Categorizer',
      tagline: 'Intelligent NLP Email Engine & Intent-Based Auto-Reply Stream',
      category: 'Independent Project',
      tags: ['Python', 'NLP', 'MySQL', 'Cloud APIs', 'Automation Workflows'],
      summary:
        'An intelligent email processing engine leveraging Natural Language Processing (NLP) to parse incoming emails, classify urgency and intent, and generate context-aware auto-replies.',
      highlights: [
        'Developed an intelligent email processing engine leveraging Natural Language Processing (NLP) to parse, classify, and generate contextually accurate auto-replies',
        'Integrated RESTful API endpoints with cloud serverless functions to automate user communication streams and accelerate query resolution workflows',
        'Constructed database integration using MySQL to securely index message urgency, sentiment scores, and historical interaction logs',
      ],
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>FEATURED INNOVATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Technical Projects</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real-world technical projects across Large Language Models and Natural Language Processing automation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-3xl border border-white/10 hover:border-cyan-500/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Glow accent */}
              <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-br ${proj.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

              <div>
                {/* Project Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300/90 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{proj.category}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Verified Project
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-4">
                  {proj.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.summary}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Key Highlights:
                  </span>
                  {proj.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-2">
                  {proj.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
