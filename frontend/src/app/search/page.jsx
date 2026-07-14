
'use client';
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const patients = [
  { id: "PAT-82921", name: "John Doe", diagnosis: "Viral Pneumonia", similarity: "94%" },
  { id: "PAT-11405", name: "Sarah Smith", diagnosis: "Lupus", similarity: "88%" },
  { id: "PAT-20418", name: "David Lee", diagnosis: "Bronchitis", similarity: "82%" },
];

export default function Page() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 lg:ml-72 flex flex-col">
        <header className="sticky top-0 z-40 h-16 border-b border-slate-700 bg-slate-950/90 backdrop-blur flex items-center justify-between px-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>

            <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search Patient..."
              className="w-80 rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 py-2 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="text-sm font-medium">AI Online</span>
          </div>
        </header>

        <div className="max-w-6xl w-full mx-auto p-8">

          <h1 className="text-4xl font-bold">Semantic Search</h1>
          <p className="mt-2 text-slate-400">
            Search and view similar patient records.
          </p>

          <div className="mt-8 space-y-4">
            {patients.map((patient)=>(
              <div
                key={patient.id}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-xl font-semibold">{patient.name}</h2>

                    <p className="mt-1 text-slate-400">
                      {patient.id}
                    </p>

                    <p className="mt-4">
                      <span className="text-cyan-400 font-medium">
                        Diagnosis:
                      </span>{" "}
                      {patient.diagnosis}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-400 text-sm">
                      Similarity
                    </p>

                    <p className="text-3xl font-bold text-cyan-400">
                      {patient.similarity}
                    </p>

                    <button className="mt-4 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-900 hover:bg-cyan-400">
                      View Details
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
