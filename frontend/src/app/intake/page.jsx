
'use client';
import Sidebar from "@/components/Sidebar";
import { useState, useRef, useEffect } from "react";

export default function Page() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const addFiles = (newFiles) => {
    const list = newFiles.map(f => ({
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(1) + " MB",
      progress: 0,
      status: "Uploading..."
    }));
    setFiles(prev => [...prev, ...list]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) addFiles(Array.from(e.dataTransfer.files));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFiles(prev =>
        prev.map(f => {
          if (f.progress >= 100) return f;
          const p = Math.min(f.progress + 15, 100);
          return { ...f, progress: p, status: p === 100 ? "Completed" : "Processing..." };
        })
      );
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 lg:ml-72 flex flex-col">
        <header className="sticky top-0 z-40 h-16 border-b border-slate-700 bg-slate-950/90 backdrop-blur-xl flex items-center justify-between px-8">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-80 rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 py-2 text-white outline-none focus:border-cyan-400"
              placeholder="Search reports..."
            />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="text-sm">AI Engine: Online</span>
          </div>
        </header>

        <div className="max-w-6xl mx-auto w-full p-8">
          <h1 className="text-4xl font-bold">Upload Reports</h1>
          <p className="mt-2 text-slate-400">
            Upload PDF reports for AI processing.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e)=>{e.preventDefault();setIsDragging(true);}}
              onDragLeave={()=>setIsDragging(false)}
              onDrop={handleDrop}
              className={`rounded-2xl border-2 border-dashed p-10 text-center cursor-pointer transition ${
                isDragging
                  ? "border-cyan-400 bg-slate-800"
                  : "border-slate-700 bg-slate-900"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                hidden
                onChange={(e)=>addFiles(Array.from(e.target.files||[]))}
              />

              <span className="material-symbols-outlined text-6xl text-cyan-400">
                cloud_upload
              </span>

              <h2 className="mt-4 text-xl font-semibold">
                Drag & Drop Files
              </h2>

              <p className="mt-2 text-slate-400">
                PDF, DOCX or Images
              </p>

              <button className="mt-6 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-900 hover:bg-cyan-400">
                Select Files
              </button>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden">
              <div className="border-b border-slate-700 px-6 py-4 flex justify-between">
                <h2 className="font-semibold">Uploads</h2>
                <span className="text-cyan-400">{files.length} Files</span>
              </div>

              <div className="p-4 space-y-4 max-h-[420px] overflow-y-auto">
                {files.length===0 && (
                  <p className="text-slate-400 text-center py-10">
                    No files uploaded.
                  </p>
                )}

                {files.map((file,index)=>(
                  <div key={index} className="rounded-xl border border-slate-700 p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-slate-400">
                          {file.size} • {file.status}
                        </p>
                      </div>
                      <span className="text-cyan-400">
                        {Math.round(file.progress)}%
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-slate-700">
                      <div
                        className="h-2 rounded-full bg-cyan-400"
                        style={{width:`${file.progress}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
