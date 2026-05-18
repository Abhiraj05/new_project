'use client';
import Sidebar from "@/components/Sidebar";
import { useState, useRef, useEffect } from "react";

export default function Page() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (newFiles) => {
    const fileObjs = newFiles.map(f => ({
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(1) + ' MB',
      progress: 0,
      status: 'Uploading...'
    }));
    setFiles(prev => [...prev, ...fileObjs]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFiles(prev => prev.map(f => {
        if (f.progress < 100) {
          const nextProg = Math.min(f.progress + Math.random() * 20, 100);
          return { ...f, progress: nextProg, status: nextProg === 100 ? 'Completed' : 'Processing...' };
        }
        return f;
      }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

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
                placeholder="Search clinical records or files..."
                type="text"
              />
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full flex-1 space-y-6">
          <header className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Upload Research Reports</h2>
            <p className="text-gray-500 mt-2">Ingest unstructured clinical PDFs for AI extraction and vector indexing.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Drag & Drop Zone */}
            <section
              className={`bg-white rounded-xl p-12 border-dashed border-2 ${isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300'} flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer shadow-sm`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" multiple />
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-teal-600">
                <span className="material-symbols-outlined text-3xl" data-icon="cloud_upload">cloud_upload</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Drop clinical reports here</h3>
              <p className="text-gray-500 mt-2 text-sm max-w-sm">Drag and drop PDF, DICOM, or XML files. Our AI handles the extraction automatically.</p>
              <button className="mt-6 px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors shadow-sm text-sm">
                Select Files
              </button>
            </section>

            {/* Right: File List & Status */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 h-full flex flex-col overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Active Ingestion</h3>
                <span className="text-xs font-medium text-teal-700 bg-teal-100 px-2 py-1 rounded-full">{files.length} Files</span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[400px]">
                {files.length === 0 && (
                  <div className="text-center py-12 text-gray-400 text-sm">
                    No files currently processing.
                  </div>
                )}
                {files.map((file, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-gray-400" data-icon="description">description</span>
                        <div>
                          <p className="font-medium text-sm text-gray-900 truncate w-48">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.size} • {file.status}</p>
                        </div>
                      </div>
                      {file.progress < 100 ? (
                        <div className="w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <span className="material-symbols-outlined text-teal-600 text-lg">check_circle</span>
                      )}
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                      <div className="bg-teal-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${file.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
