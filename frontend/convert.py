import json
import re
import urllib.request
import os
from html.parser import HTMLParser

# URL map
urls = {
    "f9e1d4b7b7c24b9fb3d4483c58689baa": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA5MWFjZmViZWNjMDRkOGY5Y2QwOWIxZWNjNmNhOWNhEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "af30812372b64dff9eb305452b72de80": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzgzYzUwMWUxYjUwMTQyZTdiOWZhMzI5YmM3NmYyZTliEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "946217a3696d48c4a8413e200133bcd0": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzNiYmRmOGZlYzhkMzQ0MmNiM2VhYzZmMjU4NjUyMzg2EgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "ffa2f9b8acd04c938545b9266242d02a": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2QwODBhYjgzODRmZTRkYjQ5OTExYTkzMzk2YjQ1MWQzEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "153d8526680c497385b6f828fc11978a": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzU4OWIzZWEyNWJiYjQzY2JhMzZmOTIyZjZjNjYwMDQyEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "cf6a2c3d3996436bafe482455dc0cbcb": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzc1ZTc2YzBhYjNkZjRiNWU5NDJiY2E2YmEwNGEzZmM3EgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "3ceb649d2e7544649b66b5b22e48ff92": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA3MTc1YmQ5ODIzNjQ4MjA4YjZkZjRkOWRkODhhNWQ4EgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "6633e25277a245e290eca4b3c938c52f": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2E4NWIzNzhjZTM0ZTRkYzJiOGExNWM1MGZiMzYxYzhhEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "76873d87866c4876b33280698b1a2da9": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQzNGQ3YzlhNjI4MzQxMTk5N2VjYzA1MmJlYjYzOWRiEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "ee3a67d7dd11474baa9c583b68b98435": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Q1NzAwNDlmYzMwMTQzMDJhYzZlZWE2NWU2OTkyYjVmEgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086",
    "0b4ab9446e1544b8b5afefd81ef9cace": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzYwMGUxMGZiYjNjMzRhYjFiYjJkMDZjOGYwNThhMzM4EgsSBxDQ4738mwEYAZIBJAoKcHJvamVjdF9pZBIWQhQxODExODQzOTg0NTQyMDE5MTUwMg&filename=&opi=89354086"
}

screens = {
    "f9e1d4b7b7c24b9fb3d4483c58689baa": "comparison",
    "af30812372b64dff9eb305452b72de80": "system-operations",
    "946217a3696d48c4a8413e200133bcd0": "case-analysis",
    "ffa2f9b8acd04c938545b9266242d02a": "insights",
    "153d8526680c497385b6f828fc11978a": "search",
    "cf6a2c3d3996436bafe482455dc0cbcb": "intake",
    "3ceb649d2e7544649b66b5b22e48ff92": "", # Landing Page (root)
    "6633e25277a245e290eca4b3c938c52f": "platform",
    "76873d87866c4876b33280698b1a2da9": "signin",
    "ee3a67d7dd11474baa9c583b68b98435": "knowledge-graph",
    "0b4ab9446e1544b8b5afefd81ef9cace": "dashboard"
}

def html_to_jsx(html):
    # Self-close unclosed tags
    void_elements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]
    for tag in void_elements:
        html = re.sub(rf'<{tag}([^>]*?)(?<!/)>', rf'<{tag}\1 />', html, flags=re.IGNORECASE)
    
    # Replace attributes
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('tabindex=', 'tabIndex=')
    # Simple inline style conversion hack (won't catch everything, but good for simple styles)
    # Actually, we should just let React handle most or fix manually if it fails
    # Let's write a simple regex for style="..."
    def style_replacer(match):
        style_str = match.group(1)
        styles = {}
        for rule in style_str.split(';'):
            if ':' in rule:
                key, val = rule.split(':', 1)
                key = key.strip()
                # camelCase
                key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                styles[key] = val.strip()
        return f"style={{{json.dumps(styles)}}}"
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    
    # Remove HTML comments (JSX uses {/* */})
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html, flags=re.DOTALL)
    
    return html

def parse_html(url, name):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Extract tailwind config
    tw_match = re.search(r'<script id="tailwind-config">\s*tailwind\.config = (.*?)\s*</script>', html, re.DOTALL)
    tw_config_str = "{}"
    if tw_match:
        tw_config_str = tw_match.group(1).strip()
        # Clean up the object string to be valid JSON if possible or just parse with regex
        # But wait, it's javascript object, might have trailing commas or unquoted keys.
        # However, the preview shows it is mostly valid JSON.

    # Extract custom styles
    style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
    custom_styles = style_match.group(1).strip() if style_match else ""
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    body_content = body_match.group(1).strip() if body_match else ""
    
    jsx = html_to_jsx(body_content)
    
    # Create page
    page_dir = f"src/app/{name}" if name else "src/app"
    os.makedirs(page_dir, exist_ok=True)
    
    with open(os.path.join(page_dir, "page.jsx"), "w", encoding="utf-8") as f:
        f.write(f'''
export default function Page() {{
  return (
    <div className="dark bg-surface text-on-surface font-body-md min-h-screen">
      {jsx}
    </div>
  );
}}
''')
    
    return tw_config_str, custom_styles

def main():
    tw_config = "{}"
    global_styles = ""
    for k, v in urls.items():
        name = screens[k]
        print(f"Processing {name}...")
        tw, st = parse_html(v, name)
        if tw != "{}":
            tw_config = tw
        if st:
            global_styles = st

    # Convert tw_config (javascript object) to Tailwind v4 @theme CSS
    # It might be hard to parse JS object in Python. Let's just write a Node script to do it, or do it by regex.
    # Actually, we can just save it into a file and then process it.
    with open("tw_extracted.js", "w") as f:
        f.write("module.exports = " + tw_config + ";")
        
    with open("extracted_styles.css", "w") as f:
        f.write(global_styles)

if __name__ == "__main__":
    main()
