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
        <div className="w-full flex-1">
          {/* Top Navigation Bar */}

{/* Page Header & Comparison Control */}
<section className="p-8 max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Patient Comparison Analysis</h2>
<p className="text-gray-900-variant max-w-2xl">Benchmarking clinical profiles against longitudinal data sets to identify outcome correlations and therapy effectiveness.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-gray-200 text-gray-900 rounded flex items-center gap-2 hover:bg-slate-50-container-low transition-all">
<span className="material-symbols-outlined">download</span>
 Export Report
 </button>
<button className="px-4 py-2 bg-teal-600-container text-white-container rounded flex items-center gap-2 font-bold hover:opacity-90">
<span className="material-symbols-outlined">share</span>
 Share Case
 </button>
</div>
</div>
{/* Comparison Grid (Bento Style) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
{/* Patient 1 Card */}
<div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-teal-600"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-600">
<span className="material-symbols-outlined text-4xl">person</span>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900">Subject A-8821</h3>
<p className="text-sm font-medium text-gray-900-variant">42M | Caucasian | Type II Diabetic</p>
<span className="inline-flex items-center mt-2 px-2 py-0.5 rounded text-[10px] bg-green-600/10 text-green-600 font-bold uppercase tracking-wider">High Stability</span>
</div>
</div>
<button className="text-teal-600 hover:underline text-sm font-medium">Change</button>
</div>
{/* Symptom Levels List */}
<div className="space-y-4 mb-6">
  <div className="flex justify-between items-center text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
    <span>Symptom Intensity</span>
    <span className="text-xs text-gray-500 uppercase">Moderate Cluster</span>
  </div>
  <div className="space-y-3">
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Fatigue</span>
        <span className="font-bold text-gray-900">65%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-500 rounded-full" style={{ width: "65%" }}></div>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Inflammation</span>
        <span className="font-bold text-gray-900">40%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-500 rounded-full" style={{ width: "40%" }}></div>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Dyspnea</span>
        <span className="font-bold text-gray-900">55%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-500 rounded-full" style={{ width: "55%" }}></div>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Nausea</span>
        <span className="font-bold text-gray-900">25%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-teal-500 rounded-full" style={{ width: "25%" }}></div>
      </div>
    </div>
  </div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-gray-900-variant">Recovery Progress</span>
<span className="text-sm font-medium text-teal-600">78%</span>
</div>
<div className="h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-teal-600 w-[78%]"></div>
</div>
</div>
</div>
</div>
{/* Comparison Metrics Center (Comparison Table Column) */}
<div className="lg:col-span-2 flex flex-col justify-center gap-8 py-10">
<div className="text-center">
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase tracking-widest mb-1">Delta</p>
<div className="h-px bg-outline-variant/30 w-full"></div>
</div>
<div className="space-y-12">
<div className="text-center">
<span className="material-symbols-outlined text-green-600">swap_horiz</span>
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">Symptoms</p>
</div>
<div className="text-center">
<span className="material-symbols-outlined text-teal-600">analytics</span>
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">Diagnosis</p>
</div>
<div className="text-center">
<span className="material-symbols-outlined text-blue-600">medication</span>
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">Meds</p>
</div>
<div className="text-center">
<span className="material-symbols-outlined text-red-600">warning</span>
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant mt-1">ICU Risk</p>
</div>
</div>
</div>
{/* Patient 2 Card */}
<div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1 h-full bg-green-600"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600">
<span className="material-symbols-outlined text-4xl">person</span>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900">Subject B-4902</h3>
<p className="text-sm font-medium text-gray-900-variant">45F | Hispanic | Non-Smoker</p>
<span className="inline-flex items-center mt-2 px-2 py-0.5 rounded text-[10px] bg-red-600/10 text-red-600 font-bold uppercase tracking-wider">Critical Monitoring</span>
</div>
</div>
<button className="text-green-600 hover:underline text-sm font-medium">Change</button>
</div>
{/* Symptom Levels List */}
<div className="space-y-4 mb-6">
  <div className="flex justify-between items-center text-sm font-semibold text-gray-900 border-b border-gray-100 pb-2">
    <span>Symptom Intensity</span>
    <span className="text-xs text-gray-500 uppercase">Intense Cluster</span>
  </div>
  <div className="space-y-3">
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Fatigue</span>
        <span className="font-bold text-gray-900">90%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Inflammation</span>
        <span className="font-bold text-gray-900">85%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Dyspnea</span>
        <span className="font-bold text-gray-900">80%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width: "80%" }}></div>
      </div>
    </div>
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium text-gray-700">Nausea</span>
        <span className="font-bold text-gray-900">50%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 rounded-full" style={{ width: "50%" }}></div>
      </div>
    </div>
  </div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="text-sm font-medium text-gray-900-variant">Recovery Progress</span>
<span className="text-sm font-medium text-green-600">42%</span>
</div>
<div className="h-2 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-green-600 w-[42%]"></div>
</div>
</div>
</div>
</div>
</div>
{/* Detailed Comparison Table */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-8">
<div className="px-6 py-4 border-b border-gray-200 bg-slate-50-container-high/50">
<h4 className="text-lg font-semibold text-gray-900">Metric Matrix</h4>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50-container-low">
<th className="p-4 text-sm font-medium text-gray-900-variant uppercase tracking-widest border-b border-gray-200">Clinical Dimension</th>
<th className="p-4 text-sm font-medium text-gray-900-variant uppercase tracking-widest border-b border-gray-200">Subject A-8821</th>
<th className="p-4 text-sm font-medium text-gray-900-variant uppercase tracking-widest border-b border-gray-200 text-right">Subject B-4902</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr>
<td className="p-4 font-bold text-gray-900">Primary Diagnosis</td>
<td className="p-4">
<span className="px-3 py-1 rounded-full bg-teal-600/10 text-teal-600 text-sm font-medium border border-teal-200">Acute Respiratory Distress</span>
</td>
<td className="p-4 text-right">
<span className="px-3 py-1 rounded-full bg-green-600/10 text-green-600 text-sm font-medium border border-tertiary/20">Viral Pneumonia (Variant G)</span>
</td>
</tr>
<tr>
<td className="p-4 font-bold text-gray-900">Active Medications</td>
<td className="p-4">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-0.5 bg-slate-50-container-highest text-gray-900-variant rounded text-xs">Remdesivir</span>
<span className="px-2 py-0.5 bg-slate-50-container-highest text-gray-900-variant rounded text-xs">Dexamethasone</span>
</div>
</td>
<td className="p-4">
<div className="flex flex-wrap gap-2 justify-end">
<span className="px-2 py-0.5 bg-slate-50-container-highest text-gray-900-variant rounded text-xs">Baricitinib</span>
<span className="px-2 py-0.5 bg-slate-50-container-highest text-gray-900-variant rounded text-xs">Heparin (LMW)</span>
<span className="px-2 py-0.5 bg-slate-50-container-highest text-gray-900-variant rounded text-xs">Oxygen Therapy</span>
</div>
</td>
</tr>
<tr>
<td className="p-4 font-bold text-gray-900">ICU Probability</td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-600 animate-pulse shadow-[0_0_8px_#4edea3]"></div>
<span className="text-sm font-medium font-bold text-green-600">14.2%</span>
</div>
</td>
<td className="p-4 text-right">
<div className="flex items-center gap-2 justify-end">
<span className="text-sm font-medium font-bold text-red-600">68.5%</span>
<div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#ffb4ab]"></div>
</div>
</td>
</tr>
<tr>
<td className="p-4 font-bold text-gray-900">Recovery Duration</td>
<td className="p-4 text-gray-900-variant">Estimated: 12-14 Days</td>
<td className="p-4 text-right text-gray-900-variant">Estimated: 24-30 Days</td>
</tr>
<tr>
<td className="p-4 font-bold text-gray-900">Comorbidity Sync</td>
<td className="p-4">
<div className="w-full bg-slate-50-container-highest h-1.5 rounded-full">
<div className="bg-teal-600 h-full w-[90%] rounded-full"></div>
</div>
<p className="text-[10px] text-gray-900-variant mt-1">90% match to diabetic cohort</p>
</td>
<td className="p-4">
<div className="w-full bg-slate-50-container-highest h-1.5 rounded-full flex justify-end">
<div className="bg-green-600 h-full w-[35%] rounded-full"></div>
</div>
<p className="text-[10px] text-gray-900-variant mt-1 text-right">35% outlier (Unique markers)</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* AI Insight Section */}
<div className="mesh-gradient-border rounded-xl">
<div className="bg-slate-50-container p-6 rounded-[calc(0.75rem-1px)]">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-teal-600" style={{"fontVariationSettings": "'FILL' 1"}}>psychology</span>
<h4 className="text-lg font-semibold text-gray-900">AI Synthesis: Differential Correlation</h4>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="col-span-2">
<p className="text-gray-900-variant leading-relaxed">
 Analysis indicates that <span className="text-teal-600 font-bold">Subject B-4902</span> exhibits a rare cytokine profile despite lower traditional risk factors. The AI recommends immediate intervention with IL-6 inhibitors based on the matching pattern seen in 1,200 similar global cases. Conversely, <span className="text-green-600 font-bold">Subject A-8821</span> is responding exceptionally well to standard protocol, suggesting a high probability of discharge within 72 hours.
 </p>
</div>
<div className="bg-slate-50-container-high rounded-lg p-4 border border-gray-200">
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase mb-2">Confidence Score</p>
<p className=" text-teal-600 leading-none mb-1">94.8%</p>
<p className="text-xs font-medium uppercase tracking-wider text-green-600">Validated by 48k clinical trials</p>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
        </div>
      </main>
    </div>
  );
}
