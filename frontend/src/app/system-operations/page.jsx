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
          {/* Top Navigation Bar */}

{/* Dashboard Content */}
<div className="flex-1 p-8 max-w-container-max mx-auto w-full">
{/* Page Title and Quick Stats */}
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<h2 className="text-2xl font-bold text-teal-600 mb-1">Infrastructure Health</h2>
<p className="text-sm text-gray-900-variant">Real-time telemetry for PatientGraph AI core services.</p>
</div>
<div className="flex gap-4">
<button className="bg-slate-50-container-high border border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-slate-50-container-highest transition-all">
<span className="material-symbols-outlined text-sm">download</span> Export Logs
 </button>
<button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-sm">refresh</span> Force Restart
 </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-12 gap-6">
{/* Primary Metrics Row */}
<div className="col-span-12 md:col-span-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-teal-600/40"></div>
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium uppercase tracking-wider uppercase tracking-widest text-gray-900-variant">AI Response Latency</p>
<span className="material-symbols-outlined text-teal-600">timer</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-bold text-gray-900">142</span>
<span className="text-lg font-semibold text-gray-900-variant">ms</span>
</div>
<div className="mt-4 flex items-center gap-2 text-green-600 ">
<span className="material-symbols-outlined text-sm">arrow_downward</span>
<span>12% vs last hour</span>
</div>
</div>
<div className="col-span-12 md:col-span-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-green-600/40"></div>
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium uppercase tracking-wider uppercase tracking-widest text-gray-900-variant">Embedding Speed</p>
<span className="material-symbols-outlined text-green-600">bolt</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-bold text-gray-900">3.8</span>
<span className="text-lg font-semibold text-gray-900-variant">k/sec</span>
</div>
<div className="mt-4 flex items-center gap-2 text-green-600 ">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span>Nominal load</span>
</div>
</div>
<div className="col-span-12 md:col-span-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-600/40"></div>
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium uppercase tracking-wider uppercase tracking-widest text-gray-900-variant">Active Workers</p>
<span className="material-symbols-outlined text-blue-600">memory</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-bold text-gray-900">24</span>
<span className="text-lg font-semibold text-gray-900-variant">/ 32</span>
</div>
<div className="mt-4 flex items-center gap-2 text-gray-900-variant ">
<div className="w-full bg-slate-50-container-highest h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-600 h-full w-3/4"></div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-teal-600/40"></div>
<div className="flex justify-between items-start mb-4">
<p className="text-xs font-medium uppercase tracking-wider uppercase tracking-widest text-gray-900-variant">API Request Rate</p>
<span className="material-symbols-outlined text-teal-600">api</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-bold text-gray-900">842</span>
<span className="text-lg font-semibold text-gray-900-variant">rps</span>
</div>
<div className="mt-4 flex items-center gap-2 text-red-600 ">
<span className="material-symbols-outlined text-sm">warning</span>
<span>Peak load detected</span>
</div>
</div>
{/* Activity Timeline Graph Placeholder */}
<div className="col-span-12 md:col-span-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-gray-900">System Throughput (24h)</h3>
<div className="flex gap-2">
<span className="px-2 py-1 bg-slate-50-container-highest rounded text-[10px] text-xs font-medium uppercase tracking-wider text-teal-600">TRAFFIC</span>
<span className="px-2 py-1 bg-slate-50-container-highest rounded text-[10px] text-xs font-medium uppercase tracking-wider text-green-600">NODES</span>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-1">
{/* Mock chart bars */}
<div className="w-full bg-teal-600/20 h-[40%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[45%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[30%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[60%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[75%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[85%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[70%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[55%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[65%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[90%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[95%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[80%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[60%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[50%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[40%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[35%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[55%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[75%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[85%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[92%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[88%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[70%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[65%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
<div className="w-full bg-teal-600/20 h-[60%] rounded-t-sm hover:bg-teal-600/40 transition-all"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase tracking-widest">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
<span>23:59</span>
</div>
</div>
{/* Health Grid */}
<div className="col-span-12 md:col-span-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-6">Service Health</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-green-600 glow-green animate-pulse-slow"></span>
<span className="text-sm font-medium text-gray-900">Kafka Cluster</span>
</div>
<span className="text-[10px] text-xs font-medium uppercase tracking-wider text-green-600">99.99% UP</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-green-600 glow-green animate-pulse-slow"></span>
<span className="text-sm font-medium text-gray-900">Redis Cache</span>
</div>
<span className="text-[10px] text-xs font-medium uppercase tracking-wider text-green-600">STABLE</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-red-600 glow-red"></span>
<span className="text-sm font-medium text-gray-900">Vector DB (Shard 3)</span>
</div>
<span className="text-[10px] text-xs font-medium uppercase tracking-wider text-red-600">LATENCY HIGH</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-green-600 glow-green animate-pulse-slow"></span>
<span className="text-sm font-medium text-gray-900">Auth Service</span>
</div>
<span className="text-[10px] text-xs font-medium uppercase tracking-wider text-green-600">NOMINAL</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-50-container-low rounded-lg border border-gray-200">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-green-600 glow-green animate-pulse-slow"></span>
<span className="text-sm font-medium text-gray-900">Graph Sync</span>
</div>
<span className="text-[10px] text-xs font-medium uppercase tracking-wider text-green-600">HEALTHY</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-200">
<div className="flex items-center justify-between mb-2">
<span className=" text-gray-900-variant uppercase tracking-widest">Global Status</span>
<span className=" text-green-600">OPTIMAL</span>
</div>
<div className="grid grid-cols-10 gap-1">
{/* Status pips */}
<div className="h-2 bg-green-600 rounded-full opacity-40"></div>
<div className="h-2 bg-green-600 rounded-full"></div>
<div className="h-2 bg-green-600 rounded-full"></div>
<div className="h-2 bg-green-600 rounded-full"></div>
<div className="h-2 bg-green-600 rounded-full opacity-60"></div>
<div className="h-2 bg-green-600 rounded-full"></div>
<div className="h-2 bg-red-600 rounded-full"></div>
<div className="h-2 bg-green-600 rounded-full"></div>
<div className="h-2 bg-green-600 rounded-full"></div>
<div className="h-2 bg-green-600 rounded-full animate-pulse"></div>
</div>
</div>
</div>
{/* Real-time Log Stream */}
<div className="col-span-12 bg-white p-6 rounded-xl border border-gray-200 shadow-sm rounded-xl overflow-hidden flex flex-col h-96">
<div className="bg-slate-50-container-highest px-6 py-3 border-b border-gray-200 flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-teal-600 text-sm">terminal</span>
<h3 className="text-sm font-medium text-gray-900 font-bold uppercase tracking-widest">Real-time System Logs</h3>
</div>
<div className="flex items-center gap-4 text-gray-900-variant text-[10px] text-xs font-medium uppercase tracking-wider">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span> INFO</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> ERROR</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> DEBUG</span>
</div>
</div>
<div className="flex-1 p-4 text-xs font-medium uppercase tracking-wider overflow-y-auto custom-scrollbar bg-slate-50-container-lowest/50 text-gray-900-variant space-y-1">
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:01]</span>
<span className="text-blue-600 shrink-0">[DEBUG]</span>
<span>Embedding worker #04 initiated batch processing for case_ID: 88219-X</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:03]</span>
<span className="text-teal-600 shrink-0">[INFO]</span>
<span className="text-gray-900">Kafka stream connection established. Topic: clinical_events_v2</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:05]</span>
<span className="text-teal-600 shrink-0">[INFO]</span>
<span>Redis cache hit: patient_history_metadata (92ms)</span>
</div>
<div className="flex gap-4 bg-red-600/10 border-l-2 border-error px-2 -mx-2">
<span className="text-outline shrink-0">[14:22:08]</span>
<span className="text-red-600 shrink-0">[ERROR]</span>
<span className="text-on-error-container">Vector index &apos;sh-3&apos; timeout exception during upsert operation. Retrying...</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:12]</span>
<span className="text-teal-600 shrink-0">[INFO]</span>
<span>AI Inference Engine load balanced: traffic redirected to cluster_east_02</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:15]</span>
<span className="text-blue-600 shrink-0">[DEBUG]</span>
<span>Memory usage: 82% | CPU usage: 64% | Disk I/O: 14%</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:18]</span>
<span className="text-teal-600 shrink-0">[INFO]</span>
<span className="text-gray-900">PatientGraph knowledge sync completed for 1,402 new nodes.</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:20]</span>
<span className="text-teal-600 shrink-0">[INFO]</span>
<span>API Gateway health check passed. Heartbeat signal: OK</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:22]</span>
<span className="text-blue-600 shrink-0">[DEBUG]</span>
<span>Garbage collection task finished in 44ms.</span>
</div>
<div className="flex gap-4">
<span className="text-outline shrink-0">[14:22:25]</span>
<span className="text-teal-600 shrink-0">[INFO]</span>
<span>New analysis request received from user: sarah_chen_lead</span>
</div>
</div>
<div className="p-2 bg-slate-50-container-high border-t border-gray-200 flex justify-between items-center px-4">
<span className="text-[9px] text-xs font-medium uppercase tracking-wider text-gray-900-variant uppercase tracking-widest">Streaming live... 124 lines/sec</span>
<div className="flex gap-3">
<button className="text-gray-900-variant hover:text-teal-600 transition-colors"><span className="material-symbols-outlined text-sm">pause</span></button>
<button className="text-gray-900-variant hover:text-teal-600 transition-colors"><span className="material-symbols-outlined text-sm">delete</span></button>
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
