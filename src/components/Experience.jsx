import React from 'react';
import { Briefcase, Award, Globe, CheckCircle, ShieldCheck, ExternalLink, Eye, Cpu, BookOpen, Layers } from 'lucide-react';
import azureAiFundamentalsCert from '../assets/azure-ai-fundamentals-cert.svg';
import tcsCodevitaCert from '../assets/tcs-codevita-cert.svg';
import horizonInternshipCert from '../assets/horizon-internship-cert.png';

export default function Experience({ onViewCertificate }) {
  const certifications = [
    {
      title: 'Horizon Intern: Certificate of Internship',
      issuer: 'Horizon Intern',
      date: 'Aug – Sep 2026',
      score: 'Completed 5-Week Internship Program (Aug to Sep 2026)',
      highlight: true,
      badge: 'Horizon Intern',
      image: horizonInternshipCert,
    },
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      issuer: 'Microsoft (Exam AI-102)',
      date: 'Certified Credential',
      score: 'Specialized Cloud AI Engineering',
      highlight: true,
      badge: 'AI-102',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/VishwaV-6716/408D21416B466FC9?sharingId=5B3284AA9185DB6',
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft (Exam AI-900)',
      date: 'Issued April 10, 2026',
      score: 'Foundational Cloud AI & ML Workloads (Verification Code: MqV5-s4wW)',
      highlight: true,
      badge: 'AI-900',
      link: 'https://verify.certiport.com',
      validationId: 'MqV5-s4wW',
      image: azureAiFundamentalsCert,
    },
    {
      title: 'TCS CodeVita Season XII Rank Certificate',
      issuer: 'Tata Consultancy Services (TCS)',
      date: 'Season XII (Rank Certificate)',
      score: 'Secured Global Rank 6557 in TCS CodeVita Season 12 for exceptional coding skills',
      highlight: true,
      badge: 'Rank 6557',
      validationId: 'Global Rank 6557',
      image: tcsCodevitaCert,
    },
    {
      title: 'B.E. Electronics & Communication Engineering',
      issuer: 'M Kumarasamy College of Engineering, Karur',
      date: '2023 – 2027',
      score: 'Cumulative CGPA: 6.7 / 10.0',
      highlight: false,
      badge: 'B.E. ECE',
    },
    {
      title: 'Higher Secondary Certification (HSC)',
      issuer: 'Sri Vinayaga Matric Hr Sec School, Namakkal',
      date: '2022 – 2023',
      score: 'Overall Aggregate: 72.0%',
      highlight: false,
      badge: 'HSC',
    },
  ];

  const languages = [
    { name: 'Tamil', proficiency: 'Native Fluency', desc: 'Mother tongue, fluent oral and written communication' },
    { name: 'English', proficiency: 'Professional Working Proficiency', desc: 'Technical documentation, professional communication & collaboration' },
  ];

  const competencies = [
    {
      title: 'Complex Problem-Solving',
      desc: 'Analytical mindset cultivated through competitive coding challenges (TCS Codevita) and multi-tier algorithmic design.',
    },
    {
      title: 'Time Management',
      desc: 'Successfully balancing demanding ECE coursework, professional Python & ML internship, and dual Microsoft cloud certifications.',
    },
    {
      title: 'Team Collaboration',
      desc: 'Collaborated across technical teams on agile deliverables, module testing, and project milestones.',
    },
    {
      title: 'Software & Cloud Architecture',
      desc: 'Solid engineering principles in modular code architecture, RESTful APIs, Git workflows, and Azure cloud services.',
    },
  ];

  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on machine learning internship, industry cloud certifications from Microsoft, and core engineering competencies.
          </p>
        </div>

        {/* 1. Industry Experience Feature Card */}
        <div className="glass-card rounded-3xl border border-emerald-500/30 p-8 mb-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>INTERNSHIP EXPERIENCE</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Python with ML Intern
              </h3>
              <p className="text-base text-cyan-400 font-semibold mt-0.5">
                Nitroware Private Limited
              </p>
            </div>
            <div className="text-left md:text-right font-mono">
              <span className="text-xs text-slate-400 block">Domain</span>
              <span className="text-sm font-semibold text-white bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                Machine Learning & Python
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              Completed an applied Machine Learning internship focused on developing practical data pipelines, dataset engineering, and predictive model training:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Acquired hands-on exposure applying <strong>Python frameworks</strong> and <strong>Machine Learning modeling concepts</strong> to dataset operations</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Collaborated on building, training, and troubleshooting <strong>predictive scripts</strong> to align data metrics with engineering test workflows</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Designed modular data preprocessing functions for data cleaning, transformation, and performance verification</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Coordinated with engineering peers to ensure data fidelity and predictive script reproducibility</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Grid: Certifications & Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Certifications & Training */}
          <div className="glass-card rounded-3xl border border-white/10 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">Certifications & Accreditations</h3>
                <span className="text-xs text-amber-400 font-mono">Verified Industry Credentials</span>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    cert.highlight
                      ? 'bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border-amber-500/40 shadow-sm shadow-amber-500/10'
                      : 'bg-slate-900/60 border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-semibold text-white">
                      {cert.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300 font-bold">
                      {cert.badge}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5">
                    <span>{cert.issuer}</span>
                    <span className={cert.highlight ? 'font-mono text-amber-300 font-bold' : 'text-slate-400'}>
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {cert.score}
                  </p>
                  {(cert.link || cert.image) && (
                    <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
                      {cert.image && onViewCertificate && (
                        <button
                          onClick={() => onViewCertificate(cert)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 font-semibold underline decoration-emerald-500/50 hover:decoration-emerald-300 cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View Certificate Proof</span>
                        </button>
                      )}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-500/50 hover:decoration-cyan-300 ml-auto"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Verify Official Credential</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Languages */}
          <div className="glass-card rounded-3xl border border-white/10 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Core Competencies</h3>
                  <span className="text-xs text-purple-400 font-mono">Strengths & Engineering Aptitude</span>
                </div>
              </div>

              <div className="space-y-3">
                {competencies.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5">
                    <h4 className="text-xs font-semibold text-white mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {comp.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed pl-3.5">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Subsection */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Languages</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">{lang.name}</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                        {lang.proficiency}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      {lang.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
