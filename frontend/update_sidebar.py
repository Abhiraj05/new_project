import os
import re

app_dir = r"c:\Users\mayur\OneDrive\Desktop\ragproject\new_project\frontend\src\app"

pages_with_sidebar = [
    "case-analysis", "comparison", "dashboard", "insights",
    "intake", "knowledge-graph", "platform", "search", "system-operations"
]

def process_page(dir_name):
    page_path = os.path.join(app_dir, dir_name, "page.jsx")
    if not os.path.exists(page_path):
        return
    
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove existing <aside>...</aside>
    # Note: Regex with DOTALL to remove the entire aside block
    content = re.sub(r'<aside.*?</aside>', '<Sidebar />', content, flags=re.DOTALL)
    
    # Check if Sidebar is imported
    if "import Sidebar" not in content:
        # Add import at the top
        content = 'import Sidebar from "@/components/Sidebar";\n' + content

    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {dir_name}")

for page in pages_with_sidebar:
    process_page(page)

# Process landing page (page.jsx)
landing_path = os.path.join(app_dir, "page.jsx")
with open(landing_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Make "Launch Dashboard" route to /dashboard
content = content.replace('<button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container', '<Link href="/dashboard" className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-container')
content = content.replace('Launch Dashboard\n                        </button>', 'Launch Dashboard\n                        </Link>')

# "Upload Reports"
content = content.replace('<button className="px-8 py-4 glass-panel text-on-surface border border-outline-variant', '<Link href="/intake" className="inline-block px-8 py-4 glass-panel text-on-surface border border-outline-variant')
content = content.replace('Upload Reports\n                        </button>', 'Upload Reports\n                        </Link>')

if "import Link" not in content:
    content = 'import Link from "next/link";\n' + content

with open(landing_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Processed Landing Page")

# Process Signin page
signin_path = os.path.join(app_dir, "signin", "page.jsx")
if os.path.exists(signin_path):
    with open(signin_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Find button "Sign In to Platform" or similar and make it a link to /dashboard
    content = content.replace('<button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold shadow-[0_0_15px_rgba(137,206,255,0.3)] hover:scale-[1.02] transition-transform">Sign In to Dashboard</button>', '<Link href="/dashboard" className="block w-full text-center bg-primary text-on-primary py-3 rounded-lg font-bold shadow-[0_0_15px_rgba(137,206,255,0.3)] hover:scale-[1.02] transition-transform">Sign In to Dashboard</Link>')
    
    if "import Link" not in content:
        content = 'import Link from "next/link";\n' + content
        
    with open(signin_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Processed Signin Page")
