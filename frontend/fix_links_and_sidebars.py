import os
import re

app_dir = r"c:\Users\mayur\OneDrive\Desktop\ragproject\new_project\frontend\src\app"
pages = [
    "case-analysis", "comparison", "insights",
    "knowledge-graph", "platform", "search", "system-operations",
    "about", "contact", "signin"
]

for page in pages:
    page_path = os.path.join(app_dir, page, "page.jsx")
    if not os.path.exists(page_path):
        continue
        
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace <a> with <Link>
    content = re.sub(r'<a (\s*[^>]*href="[^"]*"[^>]*)>', r'<Link \1>', content)
    content = content.replace('</a>', '</Link>')
    
    if '<Link' in content and 'import Link' not in content:
        content = 'import Link from "next/link";\n' + content

    # 2. Remove hardcoded sidebars (nav with hidden lg:flex flex-col h-screen w-72)
    # The sidebar in case-analysis looks like: <nav className="hidden lg:flex flex-col h-screen w-72 fixed left-0 top-0...
    content = re.sub(r'<nav[^>]*h-screen w-72[^>]*>.*?</nav>', '', content, flags=re.DOTALL)
    
    # Remove old sidebars if it was aside
    content = re.sub(r'<aside[^>]*h-screen w-72[^>]*>.*?</aside>', '', content, flags=re.DOTALL)

    # 3. Add <Sidebar /> if not present
    if 'import Sidebar' not in content:
        content = 'import Sidebar from "@/components/Sidebar";\n' + content
        
    # Inject <Sidebar /> right after the opening <div className="dark bg-surface..."> if not there
    if '<Sidebar />' not in content:
        content = re.sub(r'(<div className="dark[^>]*>)', r'\1\n      <Sidebar />', content, count=1)

    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Fixed pages")
