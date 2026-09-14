import React from 'react';
import { X, ExternalLink, ShieldCheck, Download } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading font-bold text-white text-base truncate max-w-md">
              {certificate.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-300 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image & Details */}
        <div className="p-6 space-y-4">
          {certificate.image && (
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg max-h-[60vh] flex items-center justify-center bg-black/50">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto object-contain max-h-[55vh]"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
            <div>
              <div className="text-xs text-slate-400 font-mono">
                Issued By: <span className="text-white font-semibold">{certificate.issuer}</span>
              </div>
              {certificate.validationId && (
                <div className="text-xs text-cyan-400 font-mono mt-0.5">
                  Validation ID: {certificate.validationId}
                </div>
              )}
            </div>

            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Open Verification / Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
