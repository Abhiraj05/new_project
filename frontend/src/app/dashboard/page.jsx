
'use client';
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-slate-950 text-white min-h-screen flex">
      <Sidebar />

      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 h-16 bg-slate-950/90 backdrop-blur border-b border-slate-700 flex items-center justify-between px-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              placeholder="Search Patient ID, Symptom..."
              className="w-80 rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 py-2 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="text-sm font-medium">AI Engine: Online</span>
          </div>
        </header>

        <div className="flex-1 p-8 space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold">Intelligence Dashboard</h1>
              <p className="mt-2 text-slate-400">
                Clinical trial progress and semantic case matching.
              </p>
            </div>

            <button className="rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-slate-900 hover:bg-cyan-400">
              Generate Report
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["42,500","Total Reports"],
              ["1,204","Similar Cases"],
              ["94.2%","Avg Match"],
              ["8","Active Pipelines"],
            ].map(([v,t])=>(
              <div key={t} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-wider text-slate-400">{t}</p>
                <h2 className="mt-3 text-3xl font-bold text-cyan-400">{v}</h2>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-6 py-4">
              <h2 className="text-lg font-semibold">High-Confidence Semantic Matches</h2>
              <button className="text-cyan-400 hover:underline">View All</button>
            </div>

            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-slate-400">
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Diagnosis</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Match</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["#PAT-88219","Alzheimer's","Improving","98%"],
                  ["#PAT-74102","Lupus","Stable","84%"],
                  ["#PAT-11029","Multiple Sclerosis","Screening","91%"],
                ].map((r)=>(
                  <tr key={r[0]} className="border-b border-slate-800 hover:bg-slate-800/60">
                    <td className="px-6 py-4 font-medium text-cyan-400">{r[0]}</td>
                    <td className="px-6 py-4">{r[1]}</td>
                    <td className="px-6 py-4 text-slate-300">{r[2]}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-cyan-400" style={{width:r[3]}} />
                        </div>
                        <span>{r[3]}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
