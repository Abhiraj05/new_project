import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <Sidebar />
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        
        {/* Simple Header */}
        <header className="sticky top-0 z-40 h-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400 text-base font-semibold border border-cyan-500/20">
            <span className="material-symbols-outlined text-xl">auto_awesome</span>
            AI Engine Online
          </div>
        </header>
        
        {/* Core Content Container */}
        <div className="max-w-5xl mx-auto w-full p-8 space-y-10 flex-1">
          
          {/* 1. Profile Settings Card */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="border-b border-slate-800/60 p-8">
              <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
              <p className="text-base text-slate-400 mt-2">Manage your account information and preferences.</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-semibold text-slate-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-lg text-white outline-none focus:border-cyan-400 transition-all" 
                    defaultValue="Sarah" 
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-slate-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-lg text-white outline-none focus:border-cyan-400 transition-all" 
                    defaultValue="Chen" 
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-lg text-white outline-none focus:border-cyan-400 transition-all" 
                    defaultValue="dr.chen@clinical.org" 
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-slate-300 mb-2">Role</label>
                  <input 
                    type="text" 
                    disabled 
                    className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800/50 text-slate-500 rounded-xl text-lg cursor-not-allowed outline-none" 
                    defaultValue="Lead Researcher" 
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-slate-950/40 px-8 py-5 border-t border-slate-800/60 flex justify-end gap-4">
              <button className="px-6 py-2.5 text-base font-bold text-slate-400 hover:text-white rounded-xl transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 text-base font-bold text-slate-900 bg-cyan-500 hover:bg-cyan-400 rounded-xl transition-colors shadow-lg shadow-cyan-500/10">
                Save Changes
              </button>
            </div>
          </div>
          
          {/* 2. Application Preferences Card */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="border-b border-slate-800/60 p-8">
              <h2 className="text-2xl font-bold text-white">Application Preferences</h2>
              <p className="text-base text-slate-400 mt-2">Customize how PatientGraph AI works for you.</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between py-2 border-b border-slate-800/40 pb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Notifications</h3>
                  <p className="text-base text-slate-400 mt-1">Receive weekly summaries of new clinical insights.</p>
                </div>
                {/* Custom Toggle (Active/Cyan) */}
                <div className="relative inline-flex h-7 w-12 items-center rounded-full bg-cyan-500 cursor-pointer transition-colors">
                  <span className="inline-block h-5 w-5 translate-x-6 rounded-full bg-slate-950 transition-transform"></span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">Dark Mode</h3>
                  <p className="text-base text-slate-400 mt-1">Toggle the application theme.</p>
                </div>
                {/* Custom Toggle (Active/Cyan for Dark Theme UI) */}
                <div className="relative inline-flex h-7 w-12 items-center rounded-full bg-cyan-500 cursor-pointer transition-colors">
                  <span className="inline-block h-5 w-5 translate-x-6 rounded-full bg-slate-950 transition-transform"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}