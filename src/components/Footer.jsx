import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040612]/90 backdrop-blur-md py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left space-y-1">
            <div className="font-heading font-bold text-lg text-white">
              Vishwa V <span className="text-cyan-400">.dev</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Electronics & Communication Engineer | AI & ML Developer
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/vishwa20102005"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishwa20102005/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:vishwamkce2023@gmail.com"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 font-mono">
              © {new Date().getFullYear()} Vishwa V. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-600 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
