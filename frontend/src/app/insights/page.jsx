import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <Sidebar />
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        
        {/* Simple Header */}
        <header className="sticky top-0 z-40 h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              placeholder="Search reports or patients..."
              className="w-72 rounded-xl border border-slate-800 bg-slate-900 pl-9 pr-4 py-1.5 text-white text-sm outline-none focus:border-cyan-400 transition-all"
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-cyan-400 text-xs font-medium border border-cyan-500/20">
            <span className="material-symbols-outlined text-base">auto_awesome</span>
            AI Engine Online
          </div>
        </header>

        {/* Core Content Container */}
        <div className="max-w-5xl mx-auto w-full p-8 space-y-6 flex-1">
          
          {/* Page Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Clinical AI Insights</h1>
              <p className="mt-1 text-sm text-slate-400">
                AI generated overview and predictive outcome trends.
              </p>
            </div>
            <button className="self-start sm:self-auto px-5 py-2 bg-cyan-500 text-slate-900 rounded-xl text-sm font-semibold hover:bg-cyan-400 transition-colors">
              Export Overview
            </button>
          </div>

          {/* Simple Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Research Summary */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="material-symbols-outlined">analytics</span>
                <h3 className="font-semibold text-white">AI Research Summary</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Analysis of <span className="text-cyan-400 font-medium">14,200 profiles</span> indicates a strong non-linear correlation between Chronic Inflammatory markers and early-stage Neurodegeneration.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/60 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">94.2%</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Model Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">320</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Active Studies</p>
                </div>
              </div>
            </div>

            {/* 2. Prediction Models */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="material-symbols-outlined">batch_prediction</span>
                <h3 className="font-semibold text-white">Prediction Models</h3>
              </div>
              <div className="space-y-3">
                {[
                  ["Immunotherapy Response", "88%"],
                  ["Gene Therapy Uptake", "62%"],
                  ["Drug Toxicity Risk", "12%"],
                ].map(([name, value]) => (
                  <div key={name} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300">{name}</span>
                      <span className="text-cyan-400 font-medium">{value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: value }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Core Insights Matrix */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="material-symbols-outlined">hub</span>
                  <h3 className="font-semibold text-white">Co-morbidity Indicators</h3>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Semantic Match</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { title: "Cardiovascular Indicators", match: "84%" },
                  { title: "Metabolic Disorders", match: "72%" },
                  { title: "Neurological Risk Factors", match: "68%" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-800/40 last:border-0">
                    <span className="text-slate-300">{item.title}</span>
                    <span className="font-semibold text-cyan-400 text-xs bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/10">{item.match}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Real-time Notifications */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="material-symbols-outlined">notifications</span>
                <h3 className="font-semibold text-white">Real-time Diagnostics</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-medium text-red-400">Unusual ACE2 Expression</span>
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono">+4.2σ</span>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-300">Rapid Recovery Outlier</span>
                  <span className="text-[10px] text-cyan-400 font-mono">ID: 8829-S</span>
                </div>
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-300">New Drug Interaction Identified</span>
                  <span className="text-[10px] text-slate-400 font-mono">Alpha v2</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}