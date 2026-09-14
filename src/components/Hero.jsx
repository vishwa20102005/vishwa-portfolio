import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Award, CheckCircle2, FileText, Sparkles, ShieldCheck, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import RollingAvatar3D from './RollingAvatar3D';

export default function Hero({ onOpenResume }) {
  const roles = [
    'Python Developer & AI Application Engineer',
    'Azure Certified AI Engineer Associate (AI-102)',
    'Full-Stack & Cloud AI Developer',
    'Electronics & Communication Engineering Student',
    'TCS CodeVita Season 12 (Global Rank 6557)',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for AI/ML & Engineering Roles</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Vishwa V
                </span>
              </h1>

              {/* Typewriter Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-2xl font-semibold text-slate-200">
                <span>{displayText}</span>
                <span className="inline-block w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Motivated <span className="text-cyan-400 font-semibold">Electronics & Communication Engineering</span> student at MKCE Karur with hands-on expertise in{' '}
              <span className="text-emerald-400 font-semibold">Artificial Intelligence, Machine Learning modeling</span>, Python automation, and cloud-native solutions with Microsoft Azure certifications.
            </p>

            {/* Achievement Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="glass-card p-3 rounded-xl border border-cyan-500/20 text-center lg:text-left">
                <div className="text-xl font-bold font-mono text-cyan-400">AI-102/900</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Azure Certified</div>
              </div>
              <div className="glass-card p-3 rounded-xl border border-emerald-500/20 text-center lg:text-left">
                <div className="text-xl font-bold font-mono text-emerald-400">Nitroware</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Python & ML Intern</div>
              </div>
              <div className="glass-card p-3 rounded-xl border border-purple-500/20 text-center lg:text-left">
                <div className="text-xl font-bold font-mono text-purple-400">3 Projects</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Applied AI & ML</div>
              </div>
              <div className="glass-card p-3 rounded-xl border border-amber-500/20 text-center lg:text-left">
                <div className="text-xl font-bold font-mono text-amber-400">6.7 CGPA</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">B.E. ECE (MKCE)</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#qa-console"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Run Test Suite</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com/vishwa20102005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa20102005/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
              <a
                href="mailto:vishwamkce2023@gmail.com"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs font-mono">vishwamkce2023@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Hero 3D Avatar (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <RollingAvatar3D />
          </div>

        </div>
      </div>
    </section>
  );
}
