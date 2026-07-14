import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <Link href="/">
              Patient<span className="text-cyan-400">Graph AI</span>
            </Link>
          </h1>

        

          {/* Action Buttons: Linked to Authentication Pages */}
          <div className="flex items-center gap-4">
            <Link 
              href="/signin" 
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-xl transition-colors shadow-lg shadow-cyan-500/10"
            >
              Get Started
            </Link>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-1 min-w-0 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-950 to-blue-600/20"></div>

          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center px-6">
            <div>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
                Enterprise AI Platform
              </span>

              <h1 className="mt-8 text-6xl font-black leading-tight">
                AI Powered
                <span className="block text-cyan-400">Medical Intelligence</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Upload reports, extract structured medical data, perform semantic
                search and generate AI summaries in seconds.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/intake"
                  className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 grid place-items-center text-slate-900"
                >
                  Upload Report
                </Link>

                <Link
                  href="/dashboard"
                  className="rounded-xl border border-slate-700 px-8 py-4 hover:bg-slate-900 grid place-items-center"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            {/* AI Summary Progress Bars Widget */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-bold">AI Dashboard</h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["OCR", "Semantic Search", "LLM Summary", "Case Matching", "Analytics", "Timeline"].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                    <p className="font-semibold text-cyan-400">{item}</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-700">
                      <div className="h-2 w-3/4 rounded-full bg-cyan-400"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="mb-12 text-center text-4xl font-bold">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["AI OCR", "LLM Extraction", "Semantic Search", "Patient Timeline", "Analytics", "Vector Search"].map((feature) => (
              <div key={feature} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:-translate-y-2 transition">
                <div className="mb-5 text-3xl">✦</div>
                <h3 className="text-xl font-bold">{feature}</h3>
                <p className="mt-4 text-slate-400">Faster, smarter healthcare powered by AI.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* EXTENDED PROFESSIONAL FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">
              Patient<span className="text-cyan-400">Graph AI</span>
            </h3>
            <p className="text-sm text-slate-500">
              Next-generation intelligence tools built explicitly for clinical research platforms.
            </p>
          </div>

          {/* Platform Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/intake" className="hover:text-cyan-400 transition-colors">Upload Portal</Link></li>
              <li><Link href="/search" className="hover:text-cyan-400 transition-colors">Semantic Search</Link></li>
            </ul>
          </div>

          {/* Security & Compliance Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Security</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">HIPAA Compliance</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Data Encryption</Link></li>
              <li><Link href="/security" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact / Help Desk */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/docs" className="hover:text-cyan-400 transition-colors">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-cyan-400 transition-colors">Help Desk</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-4">
          <p>&copy; 2026 PatientGraph AI Technologies Inc. All rights reserved.</p>
          <p>Protected by end-to-end enterprise military-grade encryption systems.</p>
        </div>
      </footer>

    </div>
  );
}