import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal, FileText, Send } from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Test Console', href: '#qa-console' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050714]/80 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#070b1e] rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-base">
              V<span className="text-cyan-400">V</span>
            </div>
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
              Vishwa V
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </span>
            <span className="text-[11px] text-cyan-400/80 font-mono block -mt-1">
              AI & Machine Learning
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 px-3 py-2 rounded-xl transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-2 rounded-xl shadow-md shadow-cyan-500/25 transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b1e]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-5 mt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 py-2.5 rounded-xl"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 py-2.5 rounded-xl"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
