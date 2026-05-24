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
        <div className="p-8 w-full flex-1 flex flex-col xl:flex-row gap-6 h-[calc(100vh-4rem)]">
          {/* Graph Workspace */}
{/* Simple Structured Relationship View */}
<div className="flex-1 overflow-y-auto min-h-[500px] rounded-xl border border-gray-200 shadow-sm bg-white p-8">
  <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center border border-teal-200 shadow-sm">
        <span className="material-symbols-outlined text-teal-600 text-3xl" data-icon="coronavirus">coronavirus</span>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">T2D Mellitus</h2>
        <div className="flex items-center gap-2">
          <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-widest border border-teal-100">Disease Anchor</span>
          <span className="text-sm text-gray-500">1,429 Connections</span>
        </div>
      </div>
    </div>
    
    <div className="flex gap-2">
      <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">filter_list</span> Filter
      </button>
      <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">download</span> Export
      </button>
    </div>
  </div>
  
  <div className="space-y-6">
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-teal-600">hub</span>
      <h3 className="text-lg font-semibold text-gray-900">Direct AI Correlations</h3>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Connection 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group">
        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">medication</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900 text-lg">Metformin</h4>
            <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200">0.89 CORR</span>
          </div>
          <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-2">Medication Entity</p>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-700 leading-snug">High correlation detected with resistance patterns in Patient Group B-12.</p>
          </div>
        </div>
      </div>
      
      {/* Connection 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">styler</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900 text-lg">Hyperglycemia</h4>
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded border border-blue-200">0.94 CORR</span>
          </div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Symptom Entity</p>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-700 leading-snug">Primary symptomatic presentation. Consistently observed across 94% of cohort.</p>
          </div>
        </div>
      </div>
      
      {/* Connection 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group">
        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">biotech</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900 text-lg">A1C Levels</h4>
            <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded border border-purple-200">0.88 CORR</span>
          </div>
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-2">Biomarker Entity</p>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-700 leading-snug">Elevated levels strongly predictive of long-term complication severity.</p>
          </div>
        </div>
      </div>

       {/* Connection 4 */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group">
        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">warning</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-bold text-gray-900 text-lg">Chronic Kidney Dis.</h4>
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded border border-red-200">0.74 CORR</span>
          </div>
          <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-2">Co-morbidity Entity</p>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-sm text-gray-700 leading-snug">Frequently co-occurs as a secondary complication in late-stage timelines.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Detail Sidebar (Bento Style) */}
<div className="w-96 bg-white p-6 rounded-xl border border-gray-200 shadow-sm border-l border-gray-200 overflow-y-auto p-6 hidden xl:block">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-semibold text-gray-900">Entity Details</h2>
<button className="text-gray-900-variant hover:text-gray-900">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
{/* Selected Node Info */}
<div className="bg-slate-50-container-high rounded-2xl p-6 mb-6 border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center border border-teal-200">
<span className="material-symbols-outlined text-teal-600" data-icon="coronavirus">coronavirus</span>
</div>
<div>
<h3 className="text-lg font-semibold text-teal-600">T2D Mellitus</h3>
<p className=" text-gray-900-variant uppercase">Code: ICD-10 E11</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-slate-50-container rounded-lg p-3">
<p className="text-[10px] text-gray-900-variant uppercase font-bold mb-1">Centrality</p>
<p className="text-sm font-medium text-gray-900">0.942 (High)</p>
</div>
<div className="bg-slate-50-container rounded-lg p-3">
<p className="text-[10px] text-gray-900-variant uppercase font-bold mb-1">Connections</p>
<p className="text-sm font-medium text-gray-900">1,429</p>
</div>
</div>
<div className="space-y-4">
<p className=" text-gray-900-variant leading-relaxed">
 Chronic condition affecting the way the body processes blood sugar (glucose). Type 2 diabetes is the most common form in the clinical dataset.
 </p>
<button className="w-full py-2 border border-teal-200 rounded-lg text-teal-600 font-bold hover:bg-teal-600/10 transition-all">
 View Full Clinical Path
 </button>
</div>
</div>
{/* Correlations List */}
<div className="space-y-4">
<h4 className="text-sm font-medium text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-2">Top Correlations</h4>
<div className="flex items-center justify-between p-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl hover:bg-white/5 cursor-pointer transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600 text-sm" data-icon="check_circle" data-weight="fill">check_circle</span>
<span className=" font-bold">Metformin</span>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-green-600">92% Match</span>
</div>
<div className="flex items-center justify-between p-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl hover:bg-white/5 cursor-pointer transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-gray-900-variant text-sm" data-icon="radio_button_checked">radio_button_checked</span>
<span className=" font-bold">A1C Levels</span>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-gray-900-variant">88% Match</span>
</div>
<div className="flex items-center justify-between p-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl hover:bg-white/5 cursor-pointer transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-red-600 text-sm" data-icon="warning">warning</span>
<span className=" font-bold">Chronic Kidney Dis.</span>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-red-600">74% Co-occurence</span>
</div>
</div>
{/* Visualization Insights */}
<div className="mt-8">
<h4 className="text-sm font-medium text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">AI Insight Graph</h4>
<div className="h-32 bg-slate-50-container rounded-xl flex items-end gap-1 p-3">
<div className="flex-1 bg-teal-600/20 hover:bg-teal-600/50 transition-all rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-teal-600/20 hover:bg-teal-600/50 transition-all rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-teal-600/40 hover:bg-teal-600/60 transition-all rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-teal-600/20 hover:bg-teal-600/50 transition-all rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-teal-600/30 hover:bg-teal-600/50 transition-all rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-teal-600/20 hover:bg-teal-600/50 transition-all rounded-t-sm h-[30%]"></div>
<div className="flex-1 bg-teal-600/20 hover:bg-teal-600/50 transition-all rounded-t-sm h-[55%]"></div>
<div className="flex-1 bg-green-600/40 hover:bg-green-600/60 transition-all rounded-t-sm h-[85%]"></div>
</div>
<p className="text-[10px] text-gray-900-variant mt-2 text-center">Trend Analysis: Correlation Volatility (30 Days)</p>
</div>
</div>
        </div>
      </main>
    </div>
  );
}
