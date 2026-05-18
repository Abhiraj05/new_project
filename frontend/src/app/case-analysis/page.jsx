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
          {/* Page Header */}
<div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="bg-teal-600/10 text-teal-600 px-2 py-0.5 rounded text-sm font-medium border border-teal-200">CASE ID: PG-2094-X</span>
<span className="flex items-center gap-1.5 px-2 py-0.5 rounded text-sm font-medium bg-green-600/10 text-green-600 border border-tertiary/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-600 pulse-emerald"></span>
 LIVE DATA STREAM
 </span>
</div>
<h1 className="text-2xl font-bold text-gray-900 tracking-tight">Complex Respiratory Analysis: Pt. 082-J</h1>
<p className="text-sm text-gray-900-variant max-w-2xl">Integrative AI analysis comparing multi-modal clinical findings against 12M+ historical graph nodes.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-900-variant text-sm font-medium hover:bg-slate-50-container transition-all">Export Report</button>
<button className="px-4 py-2 rounded-lg bg-slate-50-container-highest text-teal-600 font-bold text-sm font-medium hover:brightness-110 transition-all">Regenerate AI Model</button>
</div>
</div>
{/* Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Left Column: Patient Data (7 Columns) */}
<div className="lg:col-span-7 space-y-gutter">
{/* Patient Timeline & Symptoms (Bento Style) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Timeline */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-teal-600">history</span>
 Clinical Timeline
 </h3>
</div>
<div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
<div className="relative pl-10">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-50-container-highest border-2 border-primary flex items-center justify-center z-10">
<span className="w-2 h-2 rounded-full bg-teal-600"></span>
</div>
<p className="text-sm font-medium text-teal-600 mb-1">MAR 12, 08:45 AM</p>
<p className="text-sm text-gray-900 font-semibold">Acute Symptom Onset</p>
<p className=" text-gray-900-variant">Elevated dyspnea reported, SpO2 drop to 89%.</p>
</div>
<div className="relative pl-10 opacity-70">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-50-container-highest border-2 border-gray-300 flex items-center justify-center z-10"></div>
<p className="text-sm font-medium text-gray-900-variant mb-1">MAR 10, 14:20 PM</p>
<p className="text-sm text-gray-900">Initial Lab Screening</p>
<p className=" text-gray-900-variant">WBC counts within normal parameters.</p>
</div>
<div className="relative pl-10 opacity-50">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-50-container-highest border-2 border-gray-300 flex items-center justify-center z-10"></div>
<p className="text-sm font-medium text-gray-900-variant mb-1">MAR 05, 09:00 AM</p>
<p className="text-sm text-gray-900">Baseline Assessment</p>
</div>
</div>
</div>
{/* Symptoms & Medications */}
<div className="space-y-gutter">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6">
<h3 className="text-lg font-semibold mb-4">Active Symptoms</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-red-600-container/20 text-red-600 border border-error/20 rounded-full text-sm font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span>
 Dyspnea
 </span>
<span className="px-3 py-1 bg-teal-600/10 text-teal-600 border border-teal-200 rounded-full text-sm font-medium">Persistent Cough</span>
<span className="px-3 py-1 bg-teal-600/10 text-teal-600 border border-teal-200 rounded-full text-sm font-medium">Fatigue</span>
<span className="px-3 py-1 bg-teal-600/10 text-teal-600 border border-teal-200 rounded-full text-sm font-medium">Fever (101.4°F)</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6">
<h3 className="text-lg font-semibold mb-4">Medications</h3>
<div className="space-y-3">
<div className="flex justify-between items-center p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div>
<p className="text-sm font-bold text-gray-900">Albuterol Sulfate</p>
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant">90mcg Inhaler | TID</p>
</div>
<span className="material-symbols-outlined text-teal-600">medical_services</span>
</div>
<div className="flex justify-between items-center p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div>
<p className="text-sm font-bold text-gray-900">Amoxicillin</p>
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant">500mg Capsule | BID</p>
</div>
<span className="material-symbols-outlined text-gray-900-variant">medication</span>
</div>
</div>
</div>
</div>
</div>
{/* Lab Findings Table */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl overflow-hidden">
<div className="p-6 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-lg font-semibold ">Lab Findings Matrix</h3>
<span className="text-xs font-medium uppercase tracking-wider text-gray-900-variant">LAST UPDATED: 2H AGO</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50-container-high/50 text-sm font-medium text-gray-900-variant border-b border-gray-200">
<tr>
<th className="px-6 py-4">Biomarker</th>
<th className="px-6 py-4">Value</th>
<th className="px-6 py-4">Reference Range</th>
<th className="px-6 py-4">Delta</th>
<th className="px-6 py-4">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-slate-50-container-high/30 transition-colors">
<td className="px-6 py-4 font-bold text-gray-900">CRP (C-Reactive Protein)</td>
<td className="px-6 py-4 text-red-600 font-mono">48.2 mg/L</td>
<td className="px-6 py-4 text-gray-900-variant font-mono">&lt; 10.0</td>
<td className="px-6 py-4 text-red-600 flex items-center gap-1 font-mono">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
 +12%
 </td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-red-600-container/20 text-red-600 text-[10px] border border-error/30 font-bold uppercase">Critical</span>
</td>
</tr>
<tr className="hover:bg-slate-50-container-high/30 transition-colors">
<td className="px-6 py-4 font-bold text-gray-900">WBC Count</td>
<td className="px-6 py-4 text-gray-900 font-mono">11.4 K/uL</td>
<td className="px-6 py-4 text-gray-900-variant font-mono">4.5 - 11.0</td>
<td className="px-6 py-4 text-green-600 flex items-center gap-1 font-mono">
<span className="material-symbols-outlined text-[16px]">trending_flat</span>
 STABLE
 </td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-slate-50-container-highest text-gray-900-variant text-[10px] border border-gray-200 font-bold uppercase">Borderline</span>
</td>
</tr>
<tr className="hover:bg-slate-50-container-high/30 transition-colors">
<td className="px-6 py-4 font-bold text-gray-900">Hemoglobin</td>
<td className="px-6 py-4 text-gray-900 font-mono">13.8 g/dL</td>
<td className="px-6 py-4 text-gray-900-variant font-mono">13.5 - 17.5</td>
<td className="px-6 py-4 text-gray-900-variant font-mono">--</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-green-600/10 text-green-600 text-[10px] border border-tertiary/30 font-bold uppercase">Normal</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Right Column: AI Analysis (5 Columns) */}
<div className="lg:col-span-5 space-y-gutter">
{/* AI Explanation Panel */}
<div className="ai-shimmer bg-slate-50-container rounded-2xl border border-teal-200 p-8 shadow-2xl relative">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-teal-600/20 flex items-center justify-center border border-primary/40">
<span className="material-symbols-outlined text-teal-600" data-weight="fill">psychology</span>
</div>
<div>
<h3 className="text-lg font-semibold text-teal-600">AI Synthesis Engine</h3>
<p className=" text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase">Model version: Clinical-LLM v4.2</p>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-teal-600/5 rounded-xl border-l-4 border-primary">
<p className=" text-gray-900 leading-relaxed">
 &quot;This case matches <span className="text-teal-600 font-bold">84 historical pneumonia cases</span> with <span className="text-teal-600 font-bold">89% semantic similarity</span>. The trajectory indicates a high likelihood of bacterial origin based on the recent CRP spike and localized infiltration patterns.&quot;
 </p>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-4">
<div>
<p className="text-[10px] text-gray-900-variant uppercase mb-1">Confidence</p>
<div className="flex gap-1">
<div className="w-4 h-1.5 rounded-full bg-teal-600"></div>
<div className="w-4 h-1.5 rounded-full bg-teal-600"></div>
<div className="w-4 h-1.5 rounded-full bg-teal-600"></div>
<div className="w-4 h-1.5 rounded-full bg-teal-600/20"></div>
</div>
</div>
<div className="h-8 w-[1px] bg-outline-variant/30"></div>
<div>
<p className="text-[10px] text-gray-900-variant uppercase mb-1">Data Points</p>
<p className=" text-sm font-medium text-gray-900">1,402 Signal Vectors</p>
</div>
</div>
<button className="material-symbols-outlined text-gray-900-variant hover:text-teal-600 transition-all">info</button>
</div>
</div>
</div>
</div>
{/* Predicted Outcomes (Risk Gauges) */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6">
<h3 className="text-lg font-semibold mb-6">Predicted Outcomes</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50-container-low/50 p-4 rounded-xl border border-gray-200 text-center">
<div className="relative w-20 h-20 mx-auto mb-3">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-outline-variant/20" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" stroke-width="6"></circle>
<circle className="text-red-600" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" stroke-dasharray="226" stroke-dashoffset="180" stroke-width="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-red-600 font-bold">22%</div>
</div>
<p className=" text-gray-900-variant uppercase font-bold">Infection Risk</p>
</div>
<div className="bg-slate-50-container-low/50 p-4 rounded-xl border border-gray-200 text-center">
<div className="relative w-20 h-20 mx-auto mb-3">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-outline-variant/20" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" stroke-width="6"></circle>
<circle className="text-green-600" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" stroke-dasharray="226" stroke-dashoffset="45" stroke-width="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-green-600 font-bold">78%</div>
</div>
<p className=" text-gray-900-variant uppercase font-bold">Recovery Prob.</p>
</div>
</div>
</div>
{/* Treatment Effectiveness */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold ">Effectiveness Chart</h3>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-teal-600"></span>
<span className="w-3 h-3 rounded-full bg-green-600"></span>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-gray-900-variant mb-1">
<span>ANTIBIOTIC RESPONSE</span>
<span>82%</span>
</div>
<div className="w-full h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-teal-600 w-[82%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-gray-900-variant mb-1">
<span>OXYGENATION STABILITY</span>
<span>94%</span>
</div>
<div className="w-full h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-green-600 w-[94%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-gray-900-variant mb-1">
<span>INFLAMMATORY REDUCTION</span>
<span>15%</span>
</div>
<div className="w-full h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-red-600 w-[15%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* System Alerts/Badges Footer Area */}
<div className="mt-gutter grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-slate-50-container-high/40 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-600/10 flex items-center justify-center text-teal-600">
<span className="material-symbols-outlined">security</span>
</div>
<div>
<p className=" text-gray-900-variant uppercase">HIPAA Status</p>
<p className="font-bold text-gray-900">Data Fully Encrypted</p>
</div>
</div>
<div className="bg-slate-50-container-high/40 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-600/10 flex items-center justify-center text-green-600">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<p className=" text-gray-900-variant uppercase">Source Integrity</p>
<p className="font-bold text-gray-900">Verified Clinical Labs</p>
</div>
</div>
<div className="bg-slate-50-container-high/40 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-600-container flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined">sync</span>
</div>
<div>
<p className=" text-gray-900-variant uppercase">Update Frequency</p>
<p className="font-bold text-gray-900">Real-time Streamed</p>
</div>
</div>
</div>
        </div>
      </main>
    </div>
  );
}
