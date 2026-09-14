import React, { useState } from 'react';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import QATestConsole from './components/QATestConsole';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';
import SabarChatbot from './components/SabarChatbot';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050714] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* 3D Roaming Satellite, Stars & Cosmic Canvas */}
      <CosmicBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        
        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <QATestConsole />
          <Projects onViewCertificate={(cert) => setSelectedCertificate(cert)} />
          <Experience onViewCertificate={(cert) => setSelectedCertificate(cert)} />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Certificate Proof Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Vishwa AI Digital Representative Chatbot */}
      <SabarChatbot
        onOpenResume={() => setIsResumeOpen(true)}
        onViewCertificate={(cert) => setSelectedCertificate(cert)}
      />
    </div>
  );
}
