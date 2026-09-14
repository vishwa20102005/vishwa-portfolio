import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, CheckCircle2, Terminal, ShieldAlert, Cpu, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QATestConsole() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState([]);
  const [testStats, setTestStats] = useState({ run: 0, passed: 0, failed: 0, time: '0.00s' });
  const terminalEndRef = useRef(null);

  const testCases = [
    {
      name: 'testAzureAIEngineerCredentials()',
      desc: 'Assert Azure AI Engineer Associate (AI-102) & AI-900 status and credential IDs',
      duration: 320,
    },
    {
      name: 'testAICodeExplainerLLMPipeline()',
      desc: 'Dissect code syntax AST and generate readable explanations with LLM prompt chain',
      duration: 440,
    },
    {
      name: 'testAIEmailAutoResponderNLP()',
      desc: 'Parse, categorize, and draft context-aware email responses via NLP',
      duration: 380,
    },
    {
      name: 'testMLPredictiveModelEvaluation()',
      desc: 'Evaluate Scikit-learn classification & regression metrics with cross-validation',
      duration: 410,
    },
    {
      name: 'testNitrowareMLDatasetPipeline()',
      desc: 'Validate predictive modeling scripts and data alignment metrics at Nitroware',
      duration: 350,
    },
    {
      name: 'testTCSCodevitaAlgorithmicSuite()',
      desc: 'Execute competitive problem-solving suite with 100% test case pass rate',
      duration: 390,
    },
  ];

  const runTests = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setCurrentStep(0);
    setTestStats({ run: 0, passed: 0, failed: 0, time: '0.00s' });

    const startTime = performance.now();
    let currentLog = [
      `[INFO] [Vishwa-AI-Diagnostics] Initializing Validation Suite v2.4.0...`,
      `[INFO] Runtime: Python 3.11 • Azure SDK • Scikit-learn • PyTorch`,
      `[INFO] Hardware: ECE Transceiver Node Mesh & Cloud API Endpoints`,
      `[INFO] Target Environment: High-Performance AI Staging Cluster`,
      `------------------------------------------------------------------------`,
    ];
    setLogs([...currentLog]);

    let stepIndex = 0;

    const executeNext = () => {
      if (stepIndex < testCases.length) {
        const test = testCases[stepIndex];
        const stepNum = stepIndex + 1;

        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            `[RUNNING] [${stepNum}/${testCases.length}] ${test.name} - ${test.desc}`,
          ]);

          setTimeout(() => {
            setLogs((prev) => [
              ...prev,
              `[PASSED]  ✔ ${test.name} completed in ${test.duration}ms. Assertion SUCCESS.`,
            ]);
            setCurrentStep(stepNum);
            setTestStats((prevStats) => ({
              run: stepNum,
              passed: stepNum,
              failed: 0,
              time: `${((performance.now() - startTime) / 1000).toFixed(2)}s`,
            }));

            stepIndex++;
            executeNext();
          }, test.duration);
        }, 150);
      } else {
        // All finished
        setTimeout(() => {
          const totalDuration = ((performance.now() - startTime) / 1000).toFixed(2);
          setLogs((prev) => [
            ...prev,
            `------------------------------------------------------------------------`,
            `[INFO] BUILD SUCCESS`,
            `[INFO] Total time: ${totalDuration} s`,
            `[INFO] Finished at: ${new Date().toLocaleTimeString()}`,
            `[INFO] Status: 100% PASS RATE - ALL AI & ENGINEERING ASSERTIONS VERIFIED 🚀`,
          ]);
          setIsRunning(false);

          // Trigger Confetti!
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#06b6d4', '#10b981', '#a855f7', '#38bdf8'],
          });
        }, 300);
      }
    };

    executeNext();
  };

  const clearConsole = () => {
    if (isRunning) return;
    setLogs([]);
    setCurrentStep(0);
    setTestStats({ run: 0, passed: 0, failed: 0, time: '0.00s' });
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <section id="qa-console" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE AI & SYSTEMS VALIDATION CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Live <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">AI & Engineering Test Runner</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Experience Vishwa's technical and engineering pipelines in action. Click below to execute a simulated validation suite verifying LLM parsing, NLP automation, ML predictive pipelines, and Azure AI credentials.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#070b1e]/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-xl">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-900/90 px-5 py-3.5 border-b border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
                engineer@vishwa-v: ~/diagnostics/ai-systems
              </span>
            </div>

            {/* Test Metrics Badges */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-slate-400">
                Tests: <strong className="text-white">{testStats.run}</strong>/6
              </span>
              <span className="text-emerald-400">
                Passed: <strong>{testStats.passed}</strong>
              </span>
              <span className="text-slate-400">
                Time: <strong className="text-cyan-400">{testStats.time}</strong>
              </span>
            </div>
          </div>

          {/* Terminal Controls Bar */}
          <div className="bg-slate-950/60 px-5 py-3 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={runTests}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 disabled:opacity-50 transition-all active:scale-95 cursor-pointer"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Executing Test Suite...' : 'Execute Validation Suite (pytest / run)'}</span>
              </button>

              <button
                onClick={clearConsole}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-700/80 hover:bg-slate-800 disabled:opacity-40 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pipelines: Azure AI (AI-102) • Python ML • NLP Automation</span>
            </div>
          </div>

          {/* Terminal Body Log Stream */}
          <div className="p-6 font-mono text-xs leading-relaxed min-h-[300px] max-h-[400px] overflow-y-auto bg-black/40 text-slate-300 space-y-1.5 selection:bg-cyan-900">
            {logs.length === 0 ? (
              <div className="h-48 flex flex-col items-center justify-center text-slate-500 space-y-3">
                <Terminal className="w-8 h-8 text-slate-600 animate-pulse" />
                <p className="text-center">Terminal ready. Click <span className="text-emerald-400 font-semibold">"Execute Automated Tests"</span> to start test runner.</p>
              </div>
            ) : (
              logs.map((log, i) => {
                const isPassed = log.includes('[PASSED]');
                const isRunningLine = log.includes('[RUNNING]');
                const isBuildSuccess = log.includes('BUILD SUCCESS');
                const isDivider = log.includes('-----');

                return (
                  <div
                    key={i}
                    className={`transition-opacity duration-200 ${
                      isPassed
                        ? 'text-emerald-400 font-semibold pl-2'
                        : isRunningLine
                        ? 'text-cyan-300 pl-2'
                        : isBuildSuccess
                        ? 'text-green-300 font-bold bg-emerald-950/40 p-1 rounded'
                        : isDivider
                        ? 'text-slate-600'
                        : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                );
              })
            )}
            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
