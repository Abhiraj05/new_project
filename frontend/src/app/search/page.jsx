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
          <div className="max-w-container-max mx-auto px-margin flex gap-8">
{/* Sidebar Filters */}
<Sidebar />
{/* Results Section */}
<section className="flex-1 space-y-6">
{/* AI Search Insights Header */}
<div className="bg-white p-6 rounded-xl border border-teal-200 shadow-sm bg-slate-50-container/60 rounded-2xl p-6 mb-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-green-600-container/20 rounded-full flex items-center justify-center animate-pulse">
<span className="material-symbols-outlined text-green-600" style={{"fontVariationSettings": "'FILL' 1"}}>psychology</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-gray-900">Semantic Search Insights</h3>
<span className="px-2 py-0.5 bg-green-600 text-white text-[10px] font-black rounded uppercase">AI Synthesis</span>
</div>
<p className="text-gray-900-variant leading-relaxed max-w-3xl">
 Found 42 patients matching your query. Patients typically exhibit <span className="text-green-600 font-bold">bilateral infiltration</span> on X-rays and have an average recovery time of <span className="text-green-600 font-bold">14.2 days</span>. 88% of these cases correlate with comorbid cardiovascular risk factors.
 </p>
</div>
</div>
</div>
{/* Patient Result Card 1 */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-50-variant flex items-center justify-center font-bold text-teal-600 border border-gray-200">
 P-829
 </div>
<div>
<h4 className="text-lg font-semibold text-gray-900">Patient #82921-X</h4>
<div className="flex items-center gap-2 text-gray-900-variant ">
<span>64y Male</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> Stable</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase mb-1">Similarity Score</p>
<div className="flex items-center gap-3">
<span className="text-3xl font-bold text-teal-600">94%</span>
<div className="w-32 h-3 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-teal-600" style={{"width": "94%"}}></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-4">
<div>
<p className="text-[10px] text-gray-900-variant font-bold uppercase tracking-widest mb-2">Diagnosis</p>
<p className=" text-gray-900">Primary Viral Pneumonia (COVID-19 related)</p>
</div>
<div>
<p className="text-[10px] text-gray-900-variant font-bold uppercase tracking-widest mb-2">Key Symptoms</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50-container-high rounded text-xs text-gray-900 border border-gray-200">Shortness of Breath</span>
<span className="px-2 py-1 bg-slate-50-container-high rounded text-xs text-gray-900 border border-gray-200">Acute Cough</span>
<span className="px-2 py-1 bg-slate-50-container-high rounded text-xs text-gray-900 border border-gray-200">Hypoxemia</span>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<p className="text-[10px] text-gray-900-variant font-bold uppercase tracking-widest mb-2">Active Medications</p>
<p className=" text-gray-900">Remdesivir, Dexamethasone, Enoxaparin</p>
</div>
<div className="p-4 bg-teal-600/5 border-l-2 border-primary rounded-r-lg">
<p className="text-[10px] text-teal-600 font-bold uppercase mb-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI Clinical Summary
 </p>
<p className=" text-gray-900-variant leading-tight">Patient shows 82% similarity to cohort with rapid pulmonary improvement. Recovery threshold reached on Day 9 post-admission.</p>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-200">
<button className="flex items-center gap-2 text-teal-600 font-bold hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined">description</span>
 VIEW FULL CASE FILE
 </button>
<button className="px-6 py-2 bg-slate-50-container-highest text-gray-900 rounded-full font-bold border border-gray-200 hover:bg-teal-600 hover:text-white transition-all">
 RETRIEVE SIMILAR CASES
 </button>
</div>
</div>
</div>
</div>
{/* Patient Result Card 2 (Similarity 88%) */}
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-container">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-50-variant flex items-center justify-center font-bold text-teal-600 border border-gray-200">
 P-114
 </div>
<div>
<h4 className="text-lg font-semibold text-gray-900">Patient #11405-Y</h4>
<div className="flex items-center gap-2 text-gray-900-variant ">
<span>58y Female</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span> Critical (ICU)</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase mb-1">Similarity Score</p>
<div className="flex items-center gap-3">
<span className="text-3xl font-bold text-teal-600">88%</span>
<div className="w-32 h-3 bg-slate-50-container-highest rounded-full overflow-hidden">
<div className="h-full bg-teal-600" style={{"width": "88%"}}></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-4">
<div>
<p className="text-[10px] text-gray-900-variant font-bold uppercase tracking-widest mb-2">Diagnosis</p>
<p className=" text-gray-900">Bacterial Superinfection / CAP</p>
</div>
<div>
<p className="text-[10px] text-gray-900-variant font-bold uppercase tracking-widest mb-2">Key Symptoms</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50-container-high rounded text-xs text-gray-900 border border-gray-200">Dyspnea</span>
<span className="px-2 py-1 bg-slate-50-container-high rounded text-xs text-gray-900 border border-gray-200">Hyperthermia</span>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<p className="text-[10px] text-gray-900-variant font-bold uppercase tracking-widest mb-2">Active Medications</p>
<p className=" text-gray-900">Vancomycin, Meropenem</p>
</div>
<div className="p-4 bg-green-600/5 border-l-2 border-tertiary rounded-r-lg">
<p className="text-[10px] text-green-600 font-bold uppercase mb-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI Clinical Summary
 </p>
<p className=" text-gray-900-variant leading-tight">Matching case with respiratory failure history. Recommended screening for sepsis-associated coagulopathy based on current trend.</p>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-200">
<button className="flex items-center gap-2 text-teal-600 font-bold hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined">description</span>
 VIEW FULL CASE FILE
 </button>
<button className="px-6 py-2 bg-slate-50-container-highest text-gray-900 rounded-full font-bold border border-gray-200 hover:bg-teal-600 hover:text-white transition-all">
 RETRIEVE SIMILAR CASES
 </button>
</div>
</div>
</div>
</div>
</section>
</div>
        </div>
      </main>
    </div>
  );
}
