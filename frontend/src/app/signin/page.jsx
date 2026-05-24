import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left Side: Visual/Illustration (Split Screen) */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-50-container-lowest items-center justify-center p-margin">
        {/* Background Visualization Content */}
        <div className="absolute inset-0 z-0 opacity-40 mesh-gradient-bg"></div>
        <div className="relative z-10 w-full max-w-2xl flex flex-col gap-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/10 border border-teal-200 text-teal-600 text-sm font-medium ">
              <span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>auto_awesome</span>
              Clinical Intelligence v4.0
            </span>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Advancing Clinical Research Through <span className="text-teal-600">AI Synthesis.</span>
            </h1>
            <p className="text-lg text-gray-900-variant max-w-lg">
              Accelerate discovery with secure, HIPAA-compliant patient data mapping and deep neural analytics for precision medicine.
            </p>
          </div>
          {/* Abstract Visualization Element */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-white p-6 rounded-xl border border-gray-200 shadow-sm ai-glow">
            <img alt="Abstract Neural Network Visualization" className="w-full h-full object-cover" data-alt="A high-fidelity, futuristic 3D visualization of a neural network composed of glowing cyan and emerald data nodes connected by thin fiber-optic light strands. The aesthetic is professional and clinical, set against a deep navy blue background with a subtle glassmorphism blur. The lighting is soft and ambient, emphasizing a complex web of medical information being processed by an advanced artificial intelligence system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk6VDDi9qOsgW7mNGp3gjzdy_8gZW-VzE-Cjnr6poFBeUFN7mmN98moCSLyL51Wpdi9uAjubK5ySt6YN25m_-LRNkSIpc5hulq0KSUn_UvGSCFzbKt7hMCIN_OhVxqq52fVpGgePVzL8pPFxQQM0DI60JqD0pHx01palY1o8bW6UQWltu308y_h10qvo3QW3aIYVZrZc6lL9i1Po2OxZ3QwhqLlSOlLNj6yRkFx4_K8Px_G_kmP-n6WFWVeQyjQO-IHVLIJ3ALbK_o"/>
            {/* Overlay Data Chips */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="px-3 py-1 bg-slate-50-container/80 backdrop-blur-md rounded-lg border border-white/5 text-xs font-medium uppercase tracking-wider text-green-600">
                LIVE_ANALYSIS_SYNCING
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-slate-50-container/80 backdrop-blur-md p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-600/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-teal-600">hub</span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Data Integrity</div>
                <div className="text-xs font-medium uppercase tracking-wider text-gray-900-variant">99.9% Verified Node Connectivity</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 mt-4">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900">1.2M+</span>
              <span className="text-sm font-medium text-gray-900-variant">Patients Mapped</span>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900">450+</span>
              <span className="text-sm font-medium text-gray-900-variant">Research Institutes</span>
            </div>
          </div>
        </div>
      </section>
      {/* Right Side: Auth Form (Split Screen) */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-gutter relative mesh-gradient-bg lg:bg-none">
        {/* Mobile Logo Only */}
        <div className="absolute top-8 left-8 lg:hidden">
          <span className="text-xl font-bold font-black tracking-tight text-teal-600">PatientGraph AI</span>
        </div>
        <div className="w-full max-w-[440px] flex flex-col gap-8">
          {/* Form Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Clinical Login</h2>
            <p className="text-sm text-gray-900-variant">Access your secure research portal and patient insights.</p>
          </div>
          {/* Glassmorphism Card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm p-8 rounded-xl shadow-2xl flex flex-col gap-6">
            {/* OAuth Cluster */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-slate-50-container hover:bg-slate-50-container-high border border-gray-200 transition-all text-xs text-gray-900">
                <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzBMrtAy0_2J4-f6DoijvFs9ro6TyRViX3-vlSl335uz2Wx4hT4Es4hajjiS-o9Qs6NIGhxqtHRyIC5iB1XvmFMOrYIBujo7S3zJVVBqYpPkScjNoIQj8AiNu3Q6Hs6psQ6g4SaIOscsnA9tGm9cdUGfZdYI5TkdwqD-tg7z15rW0VuFTjahHS8hs9VijH9d7GwZbcOa3B9oX1Fv4SzRp0UN1IMXiVUfhxg1MaQW-cnnQXaNMSynsSq-ZsqMkRotCf1izBVhWiExRM"/>
                SSO Login
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-slate-50-container hover:bg-slate-50-container-high border border-gray-200 transition-all text-xs text-gray-900">
                <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                Enterprise
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-900-variant">OR EMAIL IDENTITY</span>
              <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
            </div>
            {/* Input Fields */}
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900-variant" htmlFor="email">INSTITUTIONAL EMAIL</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-900-variant text-[20px]">alternate_email</span>
                  <input className="w-full bg-slate-50-container-low border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-gray-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-900-variant/40 text-sm " id="email" placeholder="dr.chen@institute.org" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-900-variant" htmlFor="password">SECURE PASSPHRASE</label>
                  <Link className="text-xs font-medium uppercase tracking-wider text-teal-600 hover:underline" href="#">Forgot?</Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-900-variant text-[20px]">lock</span>
                  <input className="w-full bg-slate-50-container-low border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-gray-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-900-variant/40 text-sm " id="password" placeholder="••••••••••••" type="password"/>
                </div>
              </div>
              <div className="flex items-center gap-3 py-1">
                <input className="w-4 h-4 rounded border-gray-200 bg-slate-50-container-low text-teal-600 focus:ring-primary/50" id="mfa" type="checkbox"/>
                <label className="text-xs text-gray-900-variant" htmlFor="mfa">Trust this device for 30 days (MFA required)</label>
              </div>
              <button className="w-full py-4 rounded-lg bg-teal-600 hover:bg-teal-600-container text-white text-lg font-semibold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="submit">
                Authorize Access
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
          {/* Footer Links */}
          <div className="flex flex-col gap-6 text-center">
            <p className="text-xs text-gray-900-variant">
              New research associate? <Link className="text-teal-600 font-bold hover:underline" href="#">Request an Invite</Link>
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-green-600">
                <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified_user</span>
                HIPAA COMPLIANT
              </span>
              <div className="w-1 h-1 rounded-full bg-outline-variant/30"></div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-900-variant">
                SOC2 TYPE II
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
