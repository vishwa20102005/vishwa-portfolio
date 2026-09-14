import React, { useState } from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2, FileText, Download, Sparkles } from 'lucide-react';
import resumePdf from '../assets/vishwa-resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('formatted'); // 'formatted' | 'document'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex items-center justify-between flex-wrap gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block animate-pulse" />
            <div>
              <h3 className="font-heading font-bold text-white text-base sm:text-lg">
                Curriculum Vitae — Vishwa V
              </h3>
              <span className="text-[11px] text-cyan-400 font-mono hidden sm:inline">
                Python Developer & AI Application Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-slate-900 rounded-xl p-1 border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('formatted')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'formatted' ? 'bg-cyan-600 text-white font-medium shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Structured CV</span>
              </button>
              <button
                onClick={() => setActiveTab('document')}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'document' ? 'bg-cyan-600 text-white font-medium shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
            </div>

            <a
              href={resumePdf}
              download="Vishwa_V_Resume.pdf"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1 text-xs"
              title="Download PDF"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline font-mono">PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-300 transition-all cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 flex-1">
          
          {activeTab === 'document' ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-full flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Official Resume Document (PDF Format)
                </span>
                <a
                  href={resumePdf}
                  download="Vishwa_V_Resume.pdf"
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
              </div>
              
              <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
                <iframe
                  src={`${resumePdf}#toolbar=1&navpanes=0`}
                  title="Vishwa V Official Resume PDF"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">VISHWA V</h1>
                  <p className="text-sm sm:text-base font-bold text-cyan-400 font-mono mt-1 tracking-wide">
                    PYTHON DEVELOPER & AI APPLICATION ENGINEER
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Location: Namakkal, India</p>
                </div>
                <div className="text-right space-y-1 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 justify-end">
                    <a href="mailto:vishwamkce2023@gmail.com" className="hover:text-cyan-300">vishwamkce2023@gmail.com</a>
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <a href="tel:+917339236313" className="hover:text-emerald-300">+91 7339236313</a>
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-3 justify-end pt-1">
                    <a href="https://github.com/vishwa20102005" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                      GitHub: vishwa20102005
                    </a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/vishwa20102005" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                      LinkedIn: vishwa20102005
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
                  Professional Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Innovative Electronics and Communication Engineering student specializing in <strong>Python Development</strong> and <strong>AI Application Engineering</strong>. Proven hands-on experience in architecting intelligent systems using Large Language Models (LLMs), Natural Language Processing (NLP), and cloud-based REST APIs. Microsoft Certified Azure AI Engineer Associate skilled in writing clean, efficient Python code, integrating vector capabilities, and building robust backend automation workflows.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="glass-card p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="font-bold text-white text-xs font-mono text-cyan-300">Languages:</div>
                    <div className="text-slate-300 text-xs">Python, Java, MySQL, JavaScript, HTML5, CSS3</div>
                  </div>
                  <div className="glass-card p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="font-bold text-white text-xs font-mono text-cyan-300">AI & Data Science:</div>
                    <div className="text-slate-300 text-xs">Generative AI, LLMs, NLP, Prompt Engineering, Azure AI Services, Machine Learning</div>
                  </div>
                  <div className="glass-card p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="font-bold text-white text-xs font-mono text-cyan-300">Backend & Frameworks:</div>
                    <div className="text-slate-300 text-xs">REST APIs, Bootstrap</div>
                  </div>
                  <div className="glass-card p-3 rounded-xl border border-white/5 space-y-1">
                    <div className="font-bold text-white text-xs font-mono text-cyan-300">Tools & Cloud:</div>
                    <div className="text-slate-300 text-xs">GitHub, VS Code, Postman, Microsoft Azure, Altium Designer</div>
                  </div>
                  <div className="glass-card p-3 rounded-xl border border-white/5 space-y-1 md:col-span-2">
                    <div className="font-bold text-white text-xs font-mono text-cyan-300">Core Concepts:</div>
                    <div className="text-slate-300 text-xs">Data Structures & Algorithms, Object-Oriented Programming (OOP)</div>
                  </div>
                </div>
              </div>

              {/* Technical Projects */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
                  Technical Projects
                </h4>
                <div className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Project 1 */}
                  <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
                    <div className="flex justify-between flex-wrap items-baseline gap-1">
                      <strong className="text-white text-sm">AI Code Explainer & Analysis Tool</strong>
                      <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        Independent Project
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Tech Stack: Python, LLM APIs, Prompt Engineering, REST Endpoints, HTML/CSS
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-1">
                      <li>Engineered an interactive web tool utilizing Python and Large Language Models (LLMs) to automatically parse code syntax and generate human-readable technical explanations.</li>
                      <li>Implemented custom snippet-parsing workflows to deconstruct multi-language source code (Python, Java), reducing manual code debugging time by 35%.</li>
                      <li>Designed secure backend API calls to process context-aware code analyses in real time with optimized token handling.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
                    <div className="flex justify-between flex-wrap items-baseline gap-1">
                      <strong className="text-white text-sm">AI Email Auto-Responder & Categorizer</strong>
                      <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        Independent Project
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Tech Stack: Python, NLP, MySQL, Cloud APIs, Automation Workflows
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-1">
                      <li>Developed an intelligent email processing engine leveraging Natural Language Processing (NLP) to parse, classify, and generate contextually accurate auto-replies.</li>
                      <li>Integrated RESTful API endpoints with cloud serverless functions to automate user communication streams and accelerate query resolution workflows.</li>
                      <li>Constructed database integration using MySQL to securely index message urgency, sentiment scores, and historical interaction logs.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
                    <div className="flex justify-between flex-wrap items-baseline gap-1">
                      <strong className="text-white text-sm">Survivor Detection Enabled IoT Communication Pods</strong>
                      <span className="font-mono text-[11px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                        Team Project
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Tech Stack: Embedded C/C++, Wireless Sensor Networks, Hardware-Software Integration
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-1">
                      <li>Architected a resilient network pod mapping system optimized to trace isolated entities within signal-compromised disaster zones.</li>
                      <li>Configured localized transceivers and wireless sensor telemetry to maintain emergency data routing during core infrastructure failures.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internship Experience */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
                  Internship Experience
                </h4>
                <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <strong className="text-sm text-white">Python with ML Intern</strong>
                    <span className="font-mono text-xs text-emerald-400">Nitroware Private Limited</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed mt-1">
                    <li>Applied Python frameworks and Machine Learning modeling concepts to complete dataset processing and transformation tasks.</li>
                    <li>Collaborated with engineering teams to write, train, and troubleshoot predictive Python scripts aligned with automated testing metrics.</li>
                  </ul>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
                  Certifications & Achievements
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Microsoft Certified: Azure AI Engineer Associate (AI-102)</strong> — Expertise in designing and implementing AI solutions on Azure.{' '}
                      <a
                        href="https://learn.microsoft.com/api/credentials/share/en-us/VishwaV-6716/408D21416B466FC9?sharingId=5B3284AA9185DB6"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline font-mono text-[11px] inline-flex items-center gap-1 ml-1 font-semibold"
                      >
                        <ExternalLink className="w-3 h-3" />
                        [Verify Credential]
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Microsoft Certified: Azure AI Fundamentals (AI-900)</strong> — Foundational knowledge of ML and AI workloads (Issued: April 10, 2026 | Verification Code: MqV5-s4wW).{' '}
                      <a
                        href="https://verify.certiport.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline font-mono text-[11px] inline-flex items-center gap-1 ml-1 font-semibold"
                      >
                        <ExternalLink className="w-3 h-3" />
                        [Verify MqV5-s4wW]
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>TCS CodeVita Season XII Rank Certificate</strong> — Secured Global Rank 6557 in TCS CodeVita Season 12 for showcasing exceptional algorithmic coding skills.</span>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-white/10 pb-1 mb-3">
                  Education
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start text-xs sm:text-sm glass-card p-3 rounded-xl border border-white/5">
                    <div>
                      <strong className="text-white">Bachelor of Engineering in Electronics and Communication</strong>
                      <p className="text-slate-400 text-xs">M Kumarasamy College of Engineering, Karur | CGPA: 6.7 / 10.0</p>
                    </div>
                    <span className="font-mono text-xs text-cyan-400 font-bold">2023 – 2027</span>
                  </div>

                  <div className="flex justify-between items-start text-xs sm:text-sm glass-card p-3 rounded-xl border border-white/5">
                    <div>
                      <strong className="text-white">Higher Secondary Certification (HSC)</strong>
                      <p className="text-slate-400 text-xs">Sri Vinayaga Matric Hr Sec School, Namakkal | Aggregate: 72%</p>
                    </div>
                    <span className="font-mono text-xs text-slate-400">2022 – 2023</span>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
