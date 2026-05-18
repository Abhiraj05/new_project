import os

app_dir = r'c:\Users\mayur\OneDrive\Desktop\ragproject\new_project\frontend\src\app'
for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f.endswith('.jsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Replace unescaped characters with entities
            content = content.replace("world's", "world&apos;s")
            content = content.replace("It's", "It&apos;s")
            content = content.replace('"This case matches', '&quot;This case matches')
            content = content.replace('infiltration patterns."', 'infiltration patterns.&quot;')
            content = content.replace("Alzheimer's", "Alzheimer&apos;s")
            
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
print('Fixed entities')
