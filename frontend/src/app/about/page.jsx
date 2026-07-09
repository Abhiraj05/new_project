import Link from "next/link";
import Sidebar from "@/components/Sidebar";
export default function Page() {
  return (
    <div className="flex-1 px-8 py-12">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="mb-12">
      <span className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-1 text-sm font-medium text-cyan-700">
        About PatientGraph AI
      </span>

      <h1 className="mt-6 text-5xl font-black text-slate-900">
        Transforming Healthcare
        <span className="block text-cyan-600">
          With Artificial Intelligence
        </span>
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">
        PatientGraph AI helps hospitals, clinics, and researchers
        extract structured information from medical reports using
        Artificial Intelligence. Our platform enables semantic search,
        intelligent report analysis, and clinical insights within
        seconds.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
          <span className="material-symbols-outlined text-cyan-600">
            psychiatry
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          AI Powered
        </h3>

        <p className="mt-3 text-slate-600">
          Advanced OCR and LLM technology convert medical reports into
          structured clinical data.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100">
          <span className="material-symbols-outlined text-emerald-600">
            search
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Semantic Search
        </h3>

        <p className="mt-3 text-slate-600">
          Search patients using symptoms, diagnoses, medications,
          and clinical concepts instead of keywords.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100">
          <span className="material-symbols-outlined text-violet-600">
            analytics
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Clinical Insights
        </h3>

        <p className="mt-3 text-slate-600">
          Generate AI summaries, visualize patient history,
          and accelerate clinical decision making.
        </p>
      </div>

    </div>

    {/* Bottom Section */}

    <div className="mt-14 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-10 text-white">
      <h2 className="text-3xl font-bold">
        Built for Modern Healthcare
      </h2>

      <p className="mt-4 max-w-2xl text-cyan-100">
        Secure, scalable, and designed to simplify medical data
        processing with the latest AI technologies.
      </p>
    </div>

  </div>
</div>
  );
}
