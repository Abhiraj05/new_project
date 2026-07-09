
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 h-16 px-8 flex items-center justify-between border-b border-slate-700 bg-slate-950/90 backdrop-blur-xl">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search Patient..."
              className="w-80 rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 py-2 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="text-sm font-medium">AI Engine: Online</span>
          </div>
        </header>

        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </Link>

            <div className="mt-6 mb-8">
              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                Patient Details
              </span>

              <h1 className="mt-4 text-3xl font-bold">John Doe</h1>

              <p className="mt-2 text-slate-400">
                Male • 42 Years • Patient ID: PT-1023
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <h2 className="mb-4 text-lg font-semibold">Patient Information</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Blood Group</span>
                    <span>B+</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Height</span>
                    <span>174 cm</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Weight</span>
                    <span>72 kg</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Doctor</span>
                    <span>Dr. Smith</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <h2 className="mb-4 text-lg font-semibold text-cyan-400">AI Summary</h2>

                <p className="leading-7 text-slate-400">
                  Patient shows signs of a mild respiratory infection.
                  Continue medication and review after 48 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <h2 className="mb-4 text-lg font-semibold">Symptoms</h2>

                <div className="flex flex-wrap gap-2">
                  {["Fever","Cough","Fatigue"].map((item)=>(
                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <h2 className="mb-4 text-lg font-semibold">Medications</h2>

                <ul className="space-y-2 text-slate-300">
                  <li>• Amoxicillin 500mg</li>
                  <li>• Paracetamol 650mg</li>
                </ul>
              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h2 className="mb-4 text-lg font-semibold">Lab Results</h2>

              <table className="w-full text-sm text-slate-300">
                <thead className="border-b border-slate-700 text-slate-400">
                  <tr>
                    <th className="py-3 text-left">Test</th>
                    <th>Value</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">CRP</td>
                    <td className="text-center">48 mg/L</td>
                    <td className="text-center text-red-400">High</td>
                  </tr>

                  <tr>
                    <td className="py-3">WBC</td>
                    <td className="text-center">11.2</td>
                    <td className="text-center text-green-400">Normal</td>
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
