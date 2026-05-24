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
<div className="bg-slate-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-center gap-4">
  <div>
    <span className="text-3xl font-extrabold text-teal-600">14,200</span>
    <p className="text-xs font-semibold text-gray-500 uppercase mt-1">Patient Profiles Analyzed</p>
  </div>
  <div className="h-px bg-gray-200"></div>
  <div>
    <span className="text-3xl font-extrabold text-green-600">94.2%</span>
    <p className="text-xs font-semibold text-gray-500 uppercase mt-1">Model Predictive Accuracy</p>
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
{/* Disease Correlation Matrix */}
<div className="md:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-lg font-semibold text-gray-900">Co-morbidity Correlation Matrix</h3>
    <span className="text-xs text-teal-600 font-bold uppercase tracking-wider">Semantic Similarity</span>
  </div>
  
  <div className="space-y-4">
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold text-gray-700">Cardiovascular Co-morbidity</span>
        <span className="font-bold text-teal-600">84% Match</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-600 rounded-full" style={{ width: "84%" }}></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">High correlation with hypertension and chronic heart failure profiles.</p>
    </div>
    
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold text-gray-700">Metabolic Disorders</span>
        <span className="font-bold text-teal-600">72% Match</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-600 rounded-full" style={{ width: "72%" }}></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">Direct link to insulin resistance and type II diabetic patient cohorts.</p>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold text-gray-700">Neurological Risk Factors</span>
        <span className="font-bold text-teal-600">68% Match</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-600 rounded-full" style={{ width: "68%" }}></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">Secondary links found in early cognitive decline patient clusters.</p>
    </div>

    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-semibold text-gray-700">Autoimmune Indicators</span>
        <span className="font-bold text-teal-600">45% Match</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-600 rounded-full" style={{ width: "45%" }}></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">Moderate overlap with systemic inflammatory responses.</p>
    </div>
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
{/* Chart */}
<div className="relative">
  {/* Y-axis labels & Chart Area */}
  <div className="flex">
    <div className="flex flex-col justify-between text-right pr-3 text-xs text-gray-400 font-medium" style={{ height: "200px" }}>
      <span>100%</span>
      <span>75%</span>
      <span>50%</span>
      <span>25%</span>
      <span>0%</span>
    </div>
    {/* Chart area */}
    <div className="flex-1 relative" style={{ height: "200px" }}>
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[0,1,2,3,4].map(i => (
          <div key={i} className="w-full border-t border-gray-100"></div>
        ))}
      </div>
      {/* Bars */}
      <div className="absolute inset-0 flex items-end justify-around px-4">
        {[
          { label: "Baseline",  cog: 35, motor: 40 },
          { label: "Phase I",   cog: 48, motor: 50 },
          { label: "Phase II",  cog: 60, motor: 58 },
          { label: "Phase III", cog: 78, motor: 70 },
          { label: "Current",   cog: 94, motor: 88 },
        ].map((phase, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            {/* Bar group */}
            <div className="flex items-end gap-1.5 w-full justify-center" style={{ height: "180px" }}>
              {/* Cognitive bar */}
              <div className="relative flex flex-col items-center" style={{ height: "100%" }}>
                <div
                  className="w-7 bg-teal-500 rounded-t-md hover:bg-teal-600 transition-colors cursor-default relative group"
                  style={{ height: `${phase.cog}%`, marginTop: "auto" }}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {phase.cog}%
                  </div>
                </div>
              </div>
              {/* Motor bar */}
              <div className="relative flex flex-col items-center" style={{ height: "100%" }}>
                <div
                  className="w-7 bg-green-400 rounded-t-md hover:bg-green-500 transition-colors cursor-default relative group"
                  style={{ height: `${phase.motor}%`, marginTop: "auto" }}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {phase.motor}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* X-axis labels */}
  <div className="flex pl-10 mt-2">
    {["Baseline", "Phase I", "Phase II", "Phase III", "Current"].map((label, i) => (
      <div key={i} className={`flex-1 text-center text-xs font-semibold ${label === "Current" ? "text-teal-600" : "text-gray-500"}`}>
        {label}
      </div>
    ))}
  </div>
</div>

{/* Summary stats row */}
<div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
  <div className="text-center">
    <p className="text-2xl font-bold text-teal-600">+59%</p>
    <p className="text-xs text-gray-500 mt-1 font-medium">Cognitive Score Growth</p>
    <p className="text-xs text-gray-400">Baseline &#8594; Current</p>
  </div>
  <div className="text-center">
    <p className="text-2xl font-bold text-green-600">+48%</p>
    <p className="text-xs text-gray-500 mt-1 font-medium">Motor Function Growth</p>
    <p className="text-xs text-gray-400">Baseline &#8594; Current</p>
  </div>
  <div className="text-center">
    <p className="text-2xl font-bold text-gray-800">180 days</p>
    <p className="text-xs text-gray-500 mt-1 font-medium">Observation Period</p>
    <p className="text-xs text-gray-400">5 clinical phases</p>
  </div>
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
