'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { name: 'Upload Reports', href: '/intake', icon: 'upload_file' },
    { name: 'Patient Search', href: '/search', icon: 'person_search' },
    { name: 'Case Comparison', href: '/comparison', icon: 'compare_arrows' },
    { name: 'AI Insights', href: '/insights', icon: 'psychology' },
    { name: 'Knowledge Graph', href: '/knowledge-graph', icon: 'hub' },
    { name: 'Analytics', href: '/case-analysis', icon: 'analytics' },
    { name: 'System Monitoring', href: '/system-operations', icon: 'monitoring' },
    { name: 'Settings', href: '/settings', icon: 'settings' },
  ];

  return (
    <aside className="bg-white h-screen w-72 flex-col fixed left-0 top-0 border-r border-gray-200 shadow-sm hidden lg:flex z-50">
      <div className="p-6">
        <h1 className="text-xl font-bold text-teal-600">
          <Link href="/">PatientGraph AI</Link>
        </h1>
        <p className="text-sm text-gray-500 mt-1">Clinical Research Portal</p>
      </div>
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-teal-700 bg-teal-50 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="material-symbols-outlined text-xl" data-icon={link.icon}>{link.icon}</span>
              <span className="text-sm">{link.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-6 border-t border-gray-200">
        <button className="w-full py-2.5 px-4 bg-teal-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors shadow-sm text-sm">
          <span className="material-symbols-outlined text-lg" data-icon="add_circle">add_circle</span>
          New Analysis
        </button>
        <div className="mt-6 flex items-center gap-3">
          <img alt="Dr. Sarah Chen" className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBztv2IJU4-1cntPgmqXxcoULrNsCkFU7LloDY-58Wjs-TgA2grO1U-qKpi3pneiauxT2G-SfVAz8946CLXu1EPM_iX9tqSa88U0wl1exltuG1lzeyp6dS09_lwHiN-I-veyYY6wXCvUxi5Veg6PCyhuhJHbk4sYJqyS8HJ5G53FSkucSGe_y8hwjfETDOFD-GQogeSCOX58S_qntKO7jBArNeza1BOo3sVY2VrDXHHuiYvXLEngrXET1yE9ZBeecL387R_qnnf8pMz"/>
          <div className="overflow-hidden">
            <p className="font-semibold text-sm text-gray-900 truncate">Dr. Sarah Chen</p>
            <p className="text-xs text-gray-500 truncate">Lead Researcher</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
