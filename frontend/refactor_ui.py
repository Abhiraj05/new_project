import os
import re

app_dir = r"c:\Users\mayur\OneDrive\Desktop\ragproject\new_project\frontend\src\app"

pages = [
    "case-analysis", "comparison", "insights",
    "knowledge-graph", "platform", "search", "system-operations",
    "about", "contact", "signin", "page.jsx" # page.jsx is root
]

header_template = """        <header className="bg-white sticky top-0 z-40 border-b border-gray-200 flex justify-between items-center h-16 px-8 w-full shadow-sm">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-icon="search">search</span>
              <input
                className="bg-gray-100 border-none rounded-md pl-10 pr-4 py-2 w-80 text-sm focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                placeholder="Search Patient ID, Symptom..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-100">
              <span className="material-symbols-outlined text-[18px]" data-icon="auto_awesome">auto_awesome</span>
              <span className="text-sm font-medium">AI Engine: Online</span>
            </div>
          </div>
        </header>"""

class_replacements = {
    r'\bdark\b': '',
    r'\bbg-surface\b': 'bg-slate-50',
    r'\bbg-surface-container\b': 'bg-white',
    r'\bbg-surface-container-low\b': 'bg-gray-50',
    r'\bbg-surface-container-highest\b': 'bg-gray-100',
    r'\bbg-surface-container-high\b': 'bg-gray-100',
    r'\bbg-surface-variant\b': 'bg-gray-200',
    r'\btext-on-surface\b': 'text-gray-900',
    r'\btext-on-surface-variant\b': 'text-gray-500',
    r'\btext-primary\b': 'text-teal-600',
    r'\bbg-primary\b': 'bg-teal-600',
    r'\btext-on-primary\b': 'text-white',
    r'\bbg-primary/10\b': 'bg-teal-50',
    r'\bbg-primary/20\b': 'bg-teal-100',
    r'\btext-tertiary\b': 'text-green-600',
    r'\bbg-tertiary\b': 'bg-green-600',
    r'\btext-on-tertiary\b': 'text-white',
    r'\bbg-tertiary/10\b': 'bg-green-50',
    r'\bbg-tertiary/20\b': 'bg-green-100',
    r'\btext-secondary\b': 'text-blue-600',
    r'\bbg-secondary\b': 'bg-blue-600',
    r'\btext-on-secondary\b': 'text-white',
    r'\bbg-secondary/10\b': 'bg-blue-50',
    r'\bbg-secondary/20\b': 'bg-blue-100',
    r'\bborder-outline-variant/10\b': 'border-gray-200',
    r'\bborder-outline-variant/20\b': 'border-gray-200',
    r'\bborder-outline-variant/30\b': 'border-gray-200',
    r'\bborder-outline-variant\b': 'border-gray-200',
    r'\bborder-outline\b': 'border-gray-300',
    r'\bborder-primary/20\b': 'border-teal-200',
    r'\bborder-primary/30\b': 'border-teal-200',
    r'\btext-error\b': 'text-red-600',
    r'\bbg-error\b': 'bg-red-600',
    r'\bbg-error-container/20\b': 'bg-red-50',
    r'\bfont-headline-lg\b': 'text-2xl font-bold',
    r'\btext-headline-lg\b': '',
    r'\bfont-headline-md\b': 'text-xl font-bold',
    r'\btext-headline-md\b': '',
    r'\bfont-headline-sm\b': 'text-lg font-semibold',
    r'\btext-headline-sm\b': '',
    r'\bfont-body-lg\b': 'text-lg',
    r'\btext-body-lg\b': '',
    r'\bfont-body-md\b': 'text-sm',
    r'\btext-body-md\b': '',
    r'\bfont-body-sm\b': 'text-xs',
    r'\btext-body-sm\b': '',
    r'\bfont-label-md\b': 'text-sm font-medium',
    r'\btext-label-md\b': '',
    r'\bfont-label-sm\b': 'text-xs font-medium uppercase tracking-wider',
    r'\btext-label-sm\b': '',
    r'\bfont-display-lg\b': 'text-3xl font-bold',
    r'\btext-display-lg\b': '',
    r'\bglass-panel\b': 'bg-white p-6 rounded-xl border border-gray-200 shadow-sm',
    r'\bglass-card\b': 'bg-white p-6 rounded-xl border border-gray-200 shadow-sm',
    r'\bai-glow-border\b': 'bg-white p-6 rounded-xl border border-teal-200 shadow-sm',
}

for page in pages:
    is_root = (page == "page.jsx")
    page_path = os.path.join(app_dir, page) if is_root else os.path.join(app_dir, page, "page.jsx")
    if not os.path.exists(page_path):
        continue
    
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply class replacements
    for pattern, repl in class_replacements.items():
        content = re.sub(pattern, repl, content)

    # Clean up empty class attributes or double spaces
    content = re.sub(r' +', ' ', content)
    content = content.replace(' className=" "', '')

    # Fix Layout Structure
    # Remove old <header> completely
    content = re.sub(r'<header.*?</header>', '', content, flags=re.DOTALL)
    # Remove old <footer> completely
    content = re.sub(r'<footer.*?</footer>', '', content, flags=re.DOTALL)

    # Extract everything inside <main>...</main> OR the root wrapper if main is missing
    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, flags=re.DOTALL)
    if main_match:
        inner_content = main_match.group(1).strip()
    else:
        # Just grab the children of the outermost div
        div_match = re.search(r'<div[^>]*>(.*)</div>', content, flags=re.DOTALL)
        if div_match:
            inner_content = div_match.group(1).strip()
            # Remove <Sidebar /> from inner_content if it's there
            inner_content = inner_content.replace('<Sidebar />', '').strip()
        else:
            inner_content = content

    # Reconstruct the page
    # Notice we don't want the root page to have a sidebar maybe? 
    # Well, if root page is meant to be a landing page, adding sidebar might break it, but user said "only dashboard and upload reports are working fine or as how i want, rest everything is not working not proper ui fix all of it".
    
    new_page_content = f"""import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Page() {{
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen">
{header_template}
        <div className="p-8 max-w-7xl mx-auto w-full flex-1 space-y-6">
          {inner_content}
        </div>
      </main>
    </div>
  );
}}
"""
    # Remove any extra imports
    new_page_content = re.sub(r'import Link from "next/link";\n+', 'import Link from "next/link";\n', new_page_content)
    new_page_content = re.sub(r'import Sidebar from "@/components/Sidebar";\n+', 'import Sidebar from "@/components/Sidebar";\n', new_page_content)
    
    # if it had extra 'use client'
    if "'use client'" in content:
        new_page_content = "'use client';\n" + new_page_content

    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(new_page_content)

print("Refactored UI successfully.")
