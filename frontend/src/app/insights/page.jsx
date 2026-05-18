import Link from "next/link";
import Sidebar from "@/components/Sidebar";
export default function Page() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <header className="bg-white sticky top-0 z-40 border-b border-gray-200 flex justify-between items-center h-16 px-8 w-full shadow-sm">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-icon="search">search</span>
              <input
                className="bg-gray-100 border-none rounded-md pl-10 pr-4 py-2 w-80 text-sm focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                placeholder="Search Patient ID, Symptom..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-100">
              <span className="material-symbols-outlined text-[18px]" data-icon="auto_awesome">auto_awesome</span>
              <span className="text-sm font-medium">AI Engine: Online</span>
            </div>
          </div>
        </header>
        <div className="p-8 max-w-7xl mx-auto w-full flex-1 space-y-6">
          {/* TopNavBar */}

{/* Content Canvas */}
<div className="p-margin max-w-container-max mx-auto space-y-8">
{/* Hero Header Section */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-2xl font-bold text-gray-900 tracking-tight">Clinical AI Insights</h2>
<p className=" text-gray-900-variant max-w-2xl mt-2">Synthesizing global longitudinal patient data to predict therapeutic outcomes and identify sub-clinical patterns.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-slate-50-container-high border border-gray-200 rounded-lg text-sm font-medium hover:bg-slate-50-container-highest transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
 Filter Parameters
 </button>
<button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[18px]" data-icon="share">share</span>
 Export Report
 </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* AI Summary Card (Large) */}
<div className="md:col-span-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-8 ai-synthesis-badge">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center text-teal-600">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</div>
<h3 className="text-lg font-semibold text-teal-600">Consolidated Research Synthesis</h3>
</div>
<span className=" text-xs font-medium uppercase tracking-wider px-3 py-1 bg-green-600/10 text-green-600 rounded-full uppercase">Engine: Nexus-IV v2.4</span>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<p className=" text-gray-900 leading-relaxed">
 Analysis of <span className="text-teal-600 font-bold">14,200 patient profiles</span> indicates a strong non-linear correlation between Chronic Inflammatory markers and early-stage Neurodegeneration.
 </p>
<ul className="space-y-3">
<li className="flex gap-3 text-gray-900-variant">
<span className="material-symbols-outlined text-green-600 text-[20px]" data-icon="check_circle">check_circle</span>
 Predictive accuracy for Treatment B remains at 94.2%.
 </li>
<li className="flex gap-3 text-gray-900-variant">
<span className="material-symbols-outlined text-teal-600 text-[20px]" data-icon="info">info</span>
 Secondary metabolite shifts detected in 12% of cohort.
 </li>
</ul>
</div>
<div className="relative h-48 bg-slate-50-container-low rounded-xl overflow-hidden border border-gray-200">
<img alt="Data visualization of neural clusters" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="A sophisticated data visualization showing complex neural network clusters and connected nodes in glowing cyan and emerald tones. The visualization uses high-fidelity line work and particle effects against a , deep navy background. The overall aesthetic is futuristic, clean, and representative of advanced medical artificial intelligence processing complex datasets." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDffMmesG2JiyRSQc5HrEk6f3n0xrf4AbVzlcxSAt-CorsITi4dS9JtaMKQIf8WPN2GuidytZhQedS-cct2nZu3eneBgTAjqxczYWCF5dWBlnGuHe05lMR-hfWwnTEmzFNx7gTHNNqEa9xbMiGCcpaLtN8CMZ-ssmMQ6HYMRJoif9INGrYCRRH0vyII2IakyRnN-WshdRRE7pa-go2e9-inl0ccLGmcotSsYzcdOeBjPAYn6pFHMLMFvASRzQlx4mD6xGwgZRcTuXbH"/>
<div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-surface-container via-transparent">
<p className="text-xs font-medium uppercase tracking-wider text-gray-900 uppercase opacity-70">Neural Path Analysis</p>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-teal-600"></div>
<div className="h-1 flex-1 bg-teal-600/40"></div>
<div className="h-1 flex-1 bg-teal-600/20"></div>
<div className="h-1 flex-1 bg-teal-600/10"></div>
</div>
</div>
</div>
</div>
</div>
{/* Treatment Success Gauges */}
<div className="md:col-span-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col gap-6">
<h3 className="text-lg font-semibold text-gray-900">Prediction Models</h3>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium uppercase tracking-wider text-gray-900-variant">
<span>Immunotherapy Resp.</span>
<span className="text-green-600">88%</span>
</div>
<div className="h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-green-600 w-[88%] shadow-[0_0_8px_rgba(78,222,163,0.5)]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium uppercase tracking-wider text-gray-900-variant">
<span>Gene Therapy Uptake</span>
<span className="text-teal-600">62%</span>
</div>
<div className="h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-teal-600 w-[62%] shadow-[0_0_8px_rgba(137,206,255,0.5)]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium uppercase tracking-wider text-gray-900-variant">
<span>Drug Toxicity Risk</span>
<span className="text-red-600">12%</span>
</div>
<div className="h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-red-600 w-[12%] shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
</div>
</div>
</div>
<div className="mt-auto p-4 bg-slate-50-container-low rounded-xl border border-gray-200">
<p className=" text-gray-900-variant italic">&quot;All models show increased convergence over last 72 hours.&quot;</p>
</div>
</div>
{/* Disease Correlation Heatmap */}
<div className="md:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-gray-900">Co-morbidity Matrix</h3>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-slate-50-container-highest"></div>
<span className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant">Low</span>
<div className="w-3 h-3 rounded bg-teal-600"></div>
<span className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant">High</span>
</div>
</div>
<div className="grid grid-cols-8 gap-1">
{/* Simulated Heatmap Grid */}
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/40 rounded"></div>
<div className="heatmap-cell bg-teal-600/60 rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/05 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/30 rounded"></div>
<div className="heatmap-cell bg-teal-600/50 rounded"></div>
<div className="heatmap-cell bg-teal-600/80 rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>
<div className="heatmap-cell bg-teal-600 rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>
<div className="heatmap-cell bg-teal-600/60 rounded shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>
<div className="heatmap-cell bg-teal-600/30 rounded"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/40 rounded"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/05 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/05 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/20 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/05 rounded"></div>
<div className="heatmap-cell bg-teal-600/05 rounded"></div>
<div className="heatmap-cell bg-teal-600/10 rounded"></div>
<div className="heatmap-cell bg-teal-600/05 rounded"></div>
</div>
<div className="mt-4 flex justify-between text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase tracking-widest px-2">
<span>Cardiovascular</span>
<span>Neurological</span>
<span>Autoimmune</span>
</div>
</div>
{/* Anomaly Detection */}
<div className="md:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col">
<h3 className="text-lg font-semibold text-gray-900 mb-6">Real-time Anomalies</h3>
<div className="space-y-4">
<div className="p-4 bg-red-600-container/20 border border-error/30 rounded-xl flex items-start gap-4">
<div className="w-2 h-2 mt-2 rounded-full bg-red-600 animate-pulse"></div>
<div>
<p className=" font-bold text-red-600">Unusual ACE2 Expression</p>
<p className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">Detected in Patient Cohort X-402. Variance of +4.2σ from mean.</p>
</div>
</div>
<div className="p-4 bg-slate-50-container-low border border-gray-200 rounded-xl flex items-start gap-4">
<div className="w-2 h-2 mt-2 rounded-full bg-teal-600"></div>
<div>
<p className=" font-bold text-teal-600">Rapid Recovery Outlier</p>
<p className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">Patient ID: 8829-S showing 300% faster protein synthesis than baseline.</p>
</div>
</div>
<div className="p-4 bg-slate-50-container-low border border-gray-200 rounded-xl flex items-start gap-4">
<div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
<div>
<p className=" font-bold text-green-600">New Insight Available</p>
<p className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">Drug interaction identified between Treatment A and Inhibitor G.</p>
</div>
</div>
</div>
</div>
{/* Symptom Trend Lines (Full Width) */}
<div className="md:col-span-12 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-semibold text-gray-900">Symptom Propagation Trends</h3>
<p className=" text-sm font-medium text-gray-900-variant uppercase">Temporal Analysis • Last 180 Days</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-0.5 bg-teal-600"></span>
<span className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant">Cognitive Score</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-0.5 bg-green-600"></span>
<span className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant">Motor Function</span>
</div>
</div>
</div>
<div className="h-64 relative">
{/* Grid lines */}
<div className="absolute inset-0 flex flex-col justify-between">
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
</div>
{/* Simulated SVG Chart Lines */}
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<path d="M0,180 Q100,160 200,190 T400,100 T600,140 T800,40 T1000,60" fill="none" stroke="#89ceff" stroke-width="3"></path>
<path d="M0,200 Q150,210 300,150 T600,180 T900,120 T1000,140" fill="none" stroke="#4edea3" stroke-width="3"></path>
{/* Highlight Point */}
<circle className="animate-pulse" cx="800" cy="40" fill="#89ceff" r="6"></circle>
<circle cx="800" cy="40" fill="none" r="12" stroke="#89ceff" stroke-opacity="0.3"></circle>
</svg>
{/* Tooltip Overlay */}
<div className="absolute top-4 left-[76%] p-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-lg border border-teal-200 z-10">
<p className="text-xs font-medium uppercase tracking-wider text-teal-600">PEAK PERFORMANCE</p>
<p className=" font-bold text-gray-900">Shift detected at T+120d</p>
</div>
</div>
<div className="flex justify-between mt-6 px-2 text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase">
<span>Baseline</span>
<span>Phase I</span>
<span>Phase II</span>
<span>Phase III</span>
<span>Current</span>
</div>
</div>
</div>
</div>
{/* Footer */}
        </div>
      </main>
    </div>
  );
}
