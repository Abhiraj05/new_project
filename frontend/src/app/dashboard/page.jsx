'use client';
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Intelligence Dashboard</h2>
              <p className="text-gray-500 mt-1">Clinical trial progress and semantic case matching.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors shadow-sm text-sm font-medium">
                Generate Report
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Reports</p>
              <h3 className="text-3xl font-bold mt-2 text-gray-900">42,500</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Similar Cases</p>
              <h3 className="text-3xl font-bold mt-2 text-gray-900">1,204</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Avg Match</p>
              <h3 className="text-3xl font-bold mt-2 text-teal-600">94.2%</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Pipelines</p>
              <h3 className="text-3xl font-bold mt-2 text-gray-900">8</h3>
            </div>
          </div>

          {/* Recent Cases Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-900">High-Confidence Semantic Matches</h4>
              <button className="text-teal-600 text-sm font-medium hover:underline">View All Records</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-4">Patient ID</th>
                    <th className="px-6 py-4">Diagnosis Cluster</th>
                    <th className="px-6 py-4">Core Symptoms</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Semantic Match</th>
                    <th className="px-6 py-4">Upload Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-teal-600">#PAT-88219-X</td>
                    <td className="px-6 py-4">Early-stage Alzheimer&apos;s</td>
                    <td className="px-6 py-4 flex gap-1">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">Amnesia</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">Aphasia</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Improving
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 h-2 rounded-full w-24 overflow-hidden">
                          <div className="bg-teal-500 h-full w-[98%]"></div>
                        </div>
                        <span className="text-xs font-medium">98%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">Nov 23, 2024</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-teal-600">#PAT-74102-Y</td>
                    <td className="px-6 py-4">Lupus Erythematosus</td>
                    <td className="px-6 py-4 flex gap-1">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">Fatigue</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Stable
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 h-2 rounded-full w-24 overflow-hidden">
                          <div className="bg-teal-500 h-full w-[84%]"></div>
                        </div>
                        <span className="text-xs font-medium">84%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">Nov 22, 2024</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-teal-600">#PAT-11029-A</td>
                    <td className="px-6 py-4">Multiple Sclerosis</td>
                    <td className="px-6 py-4 flex gap-1">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">Optic Neuritis</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Screening
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 h-2 rounded-full w-24 overflow-hidden">
                          <div className="bg-teal-500 h-full w-[91%]"></div>
                        </div>
                        <span className="text-xs font-medium">91%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">Nov 22, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
