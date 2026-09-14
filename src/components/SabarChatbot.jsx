import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ExternalLink,
  Bot,
  User,
  RotateCcw,
} from 'lucide-react';
import vishwaProfileImg from '../assets/vishwa-profile.jpg';

export default function SabarChatbot({ onOpenResume, onViewCertificate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I'm **Vishwa AI**, Vishwa V's personal AI assistant and digital representative. 👋\n\nI can share details about Vishwa's background in Electronics & Communication Engineering (B.E. ECE at MKCE), his **Python with ML Internship at Nitroware**, his **Microsoft Azure AI certifications (AI-102 & AI-900)**, his projects, or guide you around his portfolio. How can I help you today?",
      links: [],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickChips = [
    'Tell me about Vishwa',
    'Nitroware ML Internship',
    'Azure AI Certifications',
    'Show Projects',
    'Skills & Tech Stack',
    'Education & CGPA',
    'LinkedIn profile',
    'View Resume',
    'Contact Information',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Comprehensive Knowledge Engine tailored for Vishwa V
  const generateResponse = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();

    // 1. Navigation / Section Triggers
    if (q.includes('navigate to') || q.includes('go to') || q.includes('scroll to')) {
      if (q.includes('project')) {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        return {
          text: "I've navigated you to Vishwa's **Projects** section! Here you can explore the AI Code Explainer, AI Email Auto-Responder, and the ML Predictive Analytics Pipeline.",
        };
      }
      if (q.includes('skill')) {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        return {
          text: "Navigated to the **Skills Matrix**! You can explore Vishwa's programming languages, AI/ML tools, and cloud technologies.",
        };
      }
      if (q.includes('qa') || q.includes('test') || q.includes('console') || q.includes('runner')) {
        document.getElementById('qa-console')?.scrollIntoView({ behavior: 'smooth' });
        return {
          text: "Navigated to the **Interactive Test Console**! Click 'Execute Validation Suite' to test Azure AI, NLP Email, ML Pipelines, and Code Explainer workflows.",
        };
      }
      if (q.includes('contact')) {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        return {
          text: "Navigated to the **Contact** section! You can send Vishwa a message or reach him directly via email or phone.",
        };
      }
      if (q.includes('about') || q.includes('education')) {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        return {
          text: "Navigated to the **About Vishwa** section! Learn about his academic foundation at MKCE and technical vision.",
        };
      }
      if (q.includes('experience') || q.includes('internship') || q.includes('cert')) {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        return {
          text: "Navigated to the **Experience & Certifications** section! Check out his Nitroware internship and Microsoft Azure AI credentials.",
        };
      }
    }

    // 2. LinkedIn
    if (q === 'linkedin' || q.includes('linkedin')) {
      return {
        text: "You can connect with Vishwa on LinkedIn here:\n👉 [linkedin.com/in/vishwa20102005](https://www.linkedin.com/in/vishwa20102005/)",
        links: [{ label: 'Open LinkedIn Profile', url: 'https://www.linkedin.com/in/vishwa20102005/' }],
      };
    }

    // 3. GitHub
    if (q === 'github' || q.includes('github') || q.includes('git')) {
      return {
        text: "Here is Vishwa's official GitHub profile:\n👉 [github.com/vishwa20102005](https://github.com/vishwa20102005)",
        links: [{ label: 'Open GitHub Profile', url: 'https://github.com/vishwa20102005' }],
      };
    }

    // 4. Resume
    if (q === 'resume' || q.includes('resume') || q.includes('cv')) {
      if (onOpenResume) onOpenResume();
      return {
        text: "I've opened Vishwa's interactive **Curriculum Vitae** for you on screen! You can review his education, Nitroware internship, Microsoft Azure credentials, independent projects, and print or download the PDF.",
        action: 'open_resume',
      };
    }

    // 5. Portfolio
    if (q === 'portfolio' || q.includes('show portfolio')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return {
        text: "You're exploring Vishwa V's interactive portfolio! You can interact with the 3D rotating avatar card, run the interactive test console, or inspect his Nitroware ML experience and Azure certifications.",
      };
    }

    // 6. Identity & Introduction
    if (
      q.includes('who are you') ||
      q.includes('tell me about yourself') ||
      q.includes('who is vishwa') ||
      q.includes('about vishwa') ||
      q.includes('about me') ||
      q.includes('introduce') ||
      q.includes('introduction')
    ) {
      return {
        text: "I'm **Vishwa V**, an Electronics and Communication Engineering undergraduate (B.E. ECE, 2023–2027) at **M Kumarasamy College of Engineering, Karur** (CGPA: 6.7 / 10.0).\n\n" +
          "I specialize in **Artificial Intelligence and Machine Learning**, with practical focus on Python automation, NLP, and cloud AI systems. I completed a hands-on **Python with ML Internship at Nitroware Private Limited**, hold dual Microsoft certifications (**Azure AI Engineer Associate AI-102** & **Azure AI Fundamentals AI-900**), and have built applied AI solutions like the AI Code Explainer and ML predictive pipelines.",
        links: [
          { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/vishwa20102005/' },
          { label: 'GitHub Profile', url: 'https://github.com/vishwa20102005' },
        ],
      };
    }

    // 7. Nitroware Internship & Experience
    if (
      q.includes('nitroware') ||
      q.includes('internship') ||
      q.includes('intern') ||
      q.includes('work experience') ||
      q.includes('experience')
    ) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      return {
        text: "💼 **Python with Machine Learning Intern**\n" +
          "**Company**: Nitroware Private Limited\n\n" +
          "• Developed machine learning pipelines and predictive models in Python using Scikit-learn and pandas.\n" +
          "• Handled exploratory data analysis, dataset preprocessing, outlier handling, and feature engineering.\n" +
          "• Trained and evaluated classification and regression algorithms on structured data.\n" +
          "• Integrated ML inference routines into Python backend scripts for real-world automation.",
      };
    }

    // 8. Microsoft Azure Certifications & TCS Codevita
    if (
      q.includes('azure') ||
      q.includes('ai-102') ||
      q.includes('ai-900') ||
      q.includes('cert') ||
      q.includes('tcs') ||
      q.includes('codevita')
    ) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      return {
        text: "🏆 **Verified Certifications & Credentials**:\n\n" +
          "1. **Microsoft Certified: Azure AI Engineer Associate (AI-102)**\n" +
          "• Designing, deploying, and monitoring cloud AI solutions using Azure Cognitive Services, Azure OpenAI, Vision, NLP, and conversational agents.\n" +
          "• Official Microsoft Verification: [Verify AI-102 Credential](https://learn.microsoft.com/api/credentials/share/en-us/VishwaV-6716/408D21416B466FC9?sharingId=5B3284AA9185DB6)\n\n" +
          "2. **Microsoft Certified: Azure AI Fundamentals (AI-900)**\n" +
          "• Issued: April 10, 2026 | Verification Code: MqV5-s4wW\n" +
          "• Comprehensive grounding in artificial intelligence, machine learning workloads, and cloud AI architecture.\n" +
          "• Verification: [Verify Certiport Credential (MqV5-s4wW)](https://verify.certiport.com)\n\n" +
          "3. **TCS CodeVita Season XII Rank Certificate**\n" +
          "• Awarded for securing **Global Rank 6557** in TCS CodeVita Season 12 for showcasing exceptional algorithmic coding skills.",
        links: [
          {
            label: 'Verify Microsoft AI-102 Credential',
            url: 'https://learn.microsoft.com/api/credentials/share/en-us/VishwaV-6716/408D21416B466FC9?sharingId=5B3284AA9185DB6',
          },
          {
            label: 'Verify Azure AI Fundamentals (MqV5-s4wW)',
            url: 'https://verify.certiport.com',
          },
        ],
      };
    }

    // 9. Projects
    if (q.includes('project') || q.includes('what have you built') || q.includes('portfolio work')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      return {
        text: "Here are Vishwa's 3 flagship projects:\n\n" +
          "1. 💡 **AI Code Explainer** (Independent Project)\n" +
          "• Tech: LLMs, Prompt Engineering, Python, AST Analysis\n" +
          "• Deconstructs complex code syntax into plain-English walkthroughs, highlights logic bugs, and auto-generates documentation.\n\n" +
          "2. ⚡ **AI Email Auto-Responder** (Independent Project)\n" +
          "• Tech: NLP, Email Automation, Python, Cloud APIs\n" +
          "• Analyzes incoming messages, classifies intent and urgency with NLP, and generates context-aware draft responses.\n\n" +
          "3. 📊 **ML Predictive Analytics Pipeline** (Machine Learning Project)\n" +
          "• Tech: Python, Scikit-learn, Pandas, Predictive Modeling\n" +
          "• End-to-end automated data preprocessing, outlier handling, and predictive model benchmarking on structured datasets.\n\n" +
          "Ask about any project for more details!",
      };
    }

    // AI Code Explainer specific
    if (q.includes('explainer') || q.includes('code explainer')) {
      return {
        text: "💡 **AI Code Explainer** (Independent Project)\n\n" +
          "• **Tech Stack**: Large Language Models, Prompt Engineering, Python, Abstract Syntax Tree (AST) Parsing.\n" +
          "• **Key Features**: Parses code syntax, explains complex algorithms step-by-step, detects logic pitfalls, and auto-generates docstrings for functions and classes.",
      };
    }

    // AI Email Auto-Responder specific
    if (q.includes('email') || q.includes('responder') || q.includes('auto-responder')) {
      return {
        text: "⚡ **AI Email Auto-Responder** (Independent Project)\n\n" +
          "• **Tech Stack**: Natural Language Processing, Email Protocols/APIs, Python, Text Classification.\n" +
          "• **Key Features**: Automatically ingests incoming emails, classifies tone and urgency using NLP, generates smart draft replies, and routes critical inquiries for human approval.",
      };
    }

    // ML Predictive Analytics specific
    if (q.includes('predictive') || q.includes('pipeline') || q.includes('analytics') || q.includes('dataset')) {
      return {
        text: "📊 **ML Predictive Analytics Pipeline** (Machine Learning Project)\n\n" +
          "• **Tech Stack**: Python, Scikit-learn, Pandas, Feature Engineering, NumPy.\n" +
          "• **Key Features**: Automated data preprocessing, imputation, outlier handling, and cross-validated evaluation across classification and regression models.",
      };
    }

    // 10. Skills & Tech Stack
    if (
      q.includes('skill') ||
      q.includes('tech stack') ||
      q.includes('technolog') ||
      q.includes('programming') ||
      q.includes('python') ||
      q.includes('c++') ||
      q.includes('java')
    ) {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      return {
        text: "💻 **Vishwa's Core Technical Stack**:\n\n" +
          "⚙️ **Programming & Web**:\n" +
          "• Python, Java, SQL, MySQL, JavaScript (ES6+), HTML5, CSS3, Bootstrap, React.js\n\n" +
          "🧠 **AI & Machine Learning**:\n" +
          "• Machine Learning, NLP, Prompt Engineering, Scikit-learn, Model Evaluation, Data Pipelines\n\n" +
          "☁️ **Cloud, Systems & Tools**:\n" +
          "• Microsoft Azure (AI-102, AI-900 Certified), Git & GitHub, Linux CLI, Postman, VS Code",
      };
    }

    // 11. Education & Academic Background
    if (
      q.includes('education') ||
      q.includes('college') ||
      q.includes('degree') ||
      q.includes('cgpa') ||
      q.includes('school') ||
      q.includes('mkce')
    ) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      return {
        text: "🎓 **Academic Background**:\n\n" +
          "🏛️ **B.E. Electronics and Communication Engineering** (2023 – 2027)\n" +
          "• Institution: M Kumarasamy College of Engineering (MKCE), Karur, Tamil Nadu\n" +
          "• Current CGPA: **6.7 / 10.0**\n" +
          "• Focus Areas: Machine Learning, Python Automation, Cloud AI Systems, Signal Processing\n\n" +
          "🏫 **Higher Secondary Certificate (HSC)** (2022 – 2023)\n" +
          "• School: Sri Vinayaga Matric Hr Sec School, Vaiyappamali, Namakkal\n" +
          "• Aggregate: **72.0%**",
      };
    }

    // 12. Contact Information
    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('phone') ||
      q.includes('mobile') ||
      q.includes('reach') ||
      q.includes('call') ||
      q.includes('location') ||
      q.includes('address')
    ) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return {
        text: "Here is how you can connect with Vishwa V directly:\n\n" +
          "📧 **Email**: [vishwamkce2023@gmail.com](mailto:vishwamkce2023@gmail.com)\n" +
          "📱 **Phone**: [+91 7339236313](tel:+917339236313)\n" +
          "📍 **Location**: Namakkal, Tamil Nadu, India\n" +
          "🔗 **LinkedIn**: [linkedin.com/in/vishwa20102005](https://www.linkedin.com/in/vishwa20102005/)\n" +
          "💻 **GitHub**: [github.com/vishwa20102005](https://github.com/vishwa20102005)",
        links: [
          { label: 'Email Vishwa', url: 'mailto:vishwamkce2023@gmail.com' },
          { label: 'Connect on LinkedIn', url: 'https://www.linkedin.com/in/vishwa20102005/' },
          { label: 'View GitHub', url: 'https://github.com/vishwa20102005' },
        ],
      };
    }

    // 13. Career & Hiring
    if (
      q.includes('hire') ||
      q.includes('job') ||
      q.includes('why should we hire') ||
      q.includes('career') ||
      q.includes('role')
    ) {
      return {
        text: "Vishwa is seeking roles as an **AI / ML Engineer**, **Python Developer**, or **Software Engineer**.\n\n" +
          "**Key Highlights**:\n" +
          "• **Certified Cloud AI Knowledge**: Microsoft Certified: Azure AI Engineer Associate (AI-102) & Azure AI Fundamentals (AI-900).\n" +
          "• **Industry Experience**: Completed Python with ML Internship at Nitroware Private Limited.\n" +
          "• **Applied AI Mastery**: Strong proficiency in Python, Scikit-learn, Large Language Models, and NLP.\n" +
          "• **Problem Solver**: Competitive programming validated via TCS Codevita certification.",
      };
    }

    // 14. Languages
    if (q.includes('language') || q.includes('speak') || q.includes('tamil') || q.includes('english')) {
      return {
        text: "Vishwa communicates in:\n\n" +
          "• **Tamil**: Native Fluency (Mother Tongue)\n" +
          "• **English**: Professional Working Proficiency (Technical documentation, presentations & cross-functional collaboration)",
      };
    }

    // 15. Fallback
    return {
      text: "I don't have that specific detail, but I'd love to help! You can ask me about Vishwa's education at MKCE, his Nitroware ML internship, Microsoft Azure AI certifications, AI & ML projects, skills, or contact info.",
    };
  };

  const handleSend = (textToSend = null) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessages = [
      ...messages,
      { sender: 'user', text: query, timestamp: userTimestamp },
    ];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(query);
      const botTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: response.text,
          links: response.links || [],
          action: response.action,
          timestamp: botTimestamp,
        },
      ]);
      setIsTyping(false);
    }, 350);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 p-2 pr-4.5 rounded-full bg-slate-900/90 border-2 border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open Vishwa AI Assistant"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400">
              <img
                src={vishwaProfileImg}
                alt="Vishwa V"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full animate-ping" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white font-heading">Chat with Vishwa AI</span>
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="text-[10px] text-cyan-300/80 font-mono block">AI Digital Twin</span>
            </div>
          </button>
        )}
      </div>

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[90vh] flex flex-col rounded-3xl bg-[#070b1e]/95 border-2 border-cyan-500/40 shadow-[0_10px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-4 py-3.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400">
                <img
                  src={vishwaProfileImg}
                  alt="Vishwa V"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-white text-sm">Vishwa AI</h3>
                  <span className="text-[9px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.2 rounded">
                    DIGITAL TWIN
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Digital Representative
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      sender: 'bot',
                      text: "Conversation reset. Feel free to ask me anything about Vishwa's background, internship, certifications, or projects!",
                      links: [],
                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ])
                }
                title="Reset Chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1.5 text-slate-400 hover:text-rose-300 rounded-lg hover:bg-rose-950/40 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Command Chips Carousel */}
          <div className="bg-slate-950/70 border-b border-white/5 py-2 px-3 flex gap-2 overflow-x-auto no-scrollbar">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800/80 hover:bg-cyan-950 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all shrink-0 cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg, index) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 ${isBot ? 'items-start' : 'items-end justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-cyan-500/40 shrink-0 mt-0.5">
                      <img src={vishwaProfileImg} alt="Vishwa" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      isBot
                        ? 'bg-slate-900/90 border border-cyan-500/20 text-slate-200 shadow-md'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md rounded-br-none'
                    }`}
                  >
                    <div className="whitespace-pre-line text-xs">
                      {msg.text}
                    </div>

                    {/* Interactive Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-white/10 space-y-1">
                        {msg.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 hover:text-cyan-200 font-semibold underline decoration-cyan-500/50 hover:decoration-cyan-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    <span className="block text-[9px] text-right font-mono text-slate-400/80 mt-1">
                      {msg.timestamp}
                    </span>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-full bg-cyan-900/80 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0 mb-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs italic pl-9">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </span>
                <span>Vishwa AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Vishwa AI about certifications, internship, projects..."
              className="flex-1 px-4 py-2.5 text-xs bg-slate-900 border border-slate-700/80 focus:border-cyan-500 focus:outline-none rounded-xl text-white placeholder:text-slate-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white disabled:opacity-40 transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
