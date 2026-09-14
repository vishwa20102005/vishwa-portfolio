import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, RotateCw, ShieldCheck, Code, Award, Cpu } from 'lucide-react';
import vishwaProfileImg from '../assets/vishwa-profile.jpg';

export default function RollingAvatar3D() {
  const [isRolling, setIsRolling] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const currentRotRef = useRef({ x: 0, y: 0 });

  // Handle 3D Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (isDragging || isRolling) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 16;
    const rotateY = ((x - centerX) / centerX) * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!isDragging && !isRolling) {
      setRotation({ x: 0, y: 0 });
    }
  };

  // 3D Full Barrel Roll trigger
  const trigger3DRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      setRotation({ x: 0, y: 0 });
    }, 1400);
  };

  // Mouse Drag to roll in 3D
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    currentRotRef.current = { ...rotation };
  };

  // Touch Drag on Mobile Phones
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setIsDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      currentRotRef.current = { ...rotation };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - dragStartRef.current.x;
    const deltaY = e.touches[0].clientY - dragStartRef.current.y;
    setRotation({
      x: Math.max(-25, Math.min(25, currentRotRef.current.x - deltaY * 0.4)),
      y: Math.max(-30, Math.min(30, currentRotRef.current.y + deltaX * 0.5)),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setRotation({ x: 0, y: 0 }), 800);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;

      setRotation({
        x: currentRotRef.current.x - deltaY * 0.4,
        y: currentRotRef.current.y + deltaX * 0.5,
      });
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[420px] mx-auto">

      {/* Outer Cosmic Orbital Rings */}
      <div className="absolute -inset-10 pointer-events-none flex items-center justify-center">
        {/* Ring 1 - Cyan */}
        <div className="w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full border border-cyan-500/20 border-dashed animate-orbit" />
        {/* Ring 2 - Violet */}
        <div className="absolute w-[380px] sm:w-[430px] h-[380px] sm:h-[430px] rounded-full border border-purple-500/20 border-dotted animate-orbit-reverse" />
        {/* Glow ambient */}
        <div className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute w-60 h-60 rounded-full bg-purple-600/15 blur-3xl -translate-y-6" />
      </div>

      {/* Floating Orbiting Tech Badges */}
      <div className="absolute -top-4 -left-4 z-20 animate-float bg-slate-900/80 border border-cyan-500/40 rounded-full px-3 py-1.5 shadow-lg shadow-cyan-500/10 backdrop-blur-md flex items-center gap-1.5 text-xs text-cyan-300">
        <Code className="w-3.5 h-3.5 text-cyan-400" />
        <span className="font-semibold">Python & ML</span>
      </div>

      <div className="absolute -bottom-2 -right-4 z-20 animate-float [animation-delay:2s] bg-slate-900/80 border border-emerald-500/40 rounded-full px-3 py-1.5 shadow-lg shadow-emerald-500/10 backdrop-blur-md flex items-center gap-1.5 text-xs text-emerald-300">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span className="font-semibold">Azure AI Certified (AI-102)</span>
      </div>

      <div className="absolute top-1/2 -right-10 z-20 hidden sm:flex animate-float [animation-delay:1s] bg-slate-900/80 border border-amber-500/40 rounded-full px-3 py-1.5 shadow-lg shadow-amber-500/10 backdrop-blur-md items-center gap-1.5 text-xs text-amber-300">
        <Cpu className="w-3.5 h-3.5 text-amber-400" />
        <span className="font-semibold">NLP & LLM Apps</span>
      </div>

      {/* 3D Perspective Card Wrapper */}
      <div
        className="perspective-[1200px] w-full max-w-[290px] xs:max-w-[320px] sm:max-w-[340px] aspect-[4/5] cursor-grab active:cursor-grabbing relative touch-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={trigger3DRoll}
        title="Click or drag to roll avatar in 3D"
      >
        <div
          ref={cardRef}
          className={`relative w-full h-full rounded-3xl transition-transform duration-200 ease-out preserve-3d ${
            isRolling ? 'animate-[spin_1.4s_cubic-bezier(0.4,0,0.2,1)_infinite]' : ''
          }`}
          style={{
            transform: isRolling
              ? 'rotateY(720deg) rotateX(360deg)'
              : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Card Frame & Glass Background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-[#070b1e] border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden p-3.5 flex flex-col justify-between">
            
            {/* Top Status Bar */}
            <div className="flex items-center justify-between z-10 px-2 pt-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono text-emerald-300 font-medium tracking-wide">
                  AI & ECE ARCHITECTURE
                </span>
              </div>
              <div className="text-[10px] font-mono bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                <span>3D INTERACTIVE</span>
              </div>
            </div>

            {/* Avatar Image Frame */}
            <div className="relative w-full aspect-square my-auto rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
              <img
                src={vishwaProfileImg}
                alt="Vishwa V - Electronics & Communication Engineer | AI & ML Developer"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Holographic light sheen reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/20 pointer-events-none" />
              
              {/* Corner Sci-Fi Crosshairs */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

              {/* 3D Avatar Badge */}
              <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-0.5 rounded-full text-[10px] font-medium text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>3D Interactive Card</span>
              </div>

              {/* Click prompt overlay on hover */}
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md border border-white/15 px-2 py-0.5 rounded-full text-[9px] font-mono text-cyan-300 flex items-center gap-1">
                <span>Click to Roll</span>
              </div>
            </div>

            {/* Card Bottom Meta */}
            <div className="z-10 px-2 pb-1 flex items-center justify-between text-xs text-slate-300">
              <div>
                <div className="font-semibold text-white tracking-wide text-sm font-heading">Vishwa V</div>
                <div className="text-[11px] text-cyan-400/90 font-mono">Python with ML Intern</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-slate-400">CGPA</div>
                <div className="font-mono font-bold text-emerald-400 text-xs">6.7 / 10</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="mt-5 flex items-center justify-center gap-3 z-20">
        {/* 3D Roll Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            trigger3DRoll();
          }}
          disabled={isRolling}
          title="Roll in 3D space"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 border-2 border-cyan-500/40 text-cyan-300 hover:text-cyan-200 transition-all shadow-lg shadow-cyan-500/10 active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <RotateCw className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
          <span>Roll 3D Avatar</span>
        </button>
      </div>

      <p className="mt-2 text-[11px] text-slate-400/80 font-mono text-center">
        💡 <span className="text-cyan-400">3D Interactive Card</span> • Drag or hover to rotate in 3D space
      </p>
    </div>
  );
}
