import re

with open('style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace variables
content = re.sub(r'--bg-dark:\s*#0a192f;', '--bg-dark: #121212;', content)
content = re.sub(r'--bg-darker:\s*#050c18;', '--bg-darker: #050505;', content)
content = re.sub(r'--surface-color:\s*rgba\(30, 41, 59, 0\.6\);', '--surface-color: rgba(255, 255, 255, 0.03);', content)
content = re.sub(r'--surface-hover:\s*rgba\(30, 41, 59, 0\.9\);', '--surface-hover: rgba(255, 255, 255, 0.08);', content)
content = re.sub(r'--text-main:\s*#ffffff;', '--text-main: #ffffff;', content)
content = re.sub(r'--text-muted:\s*#8892b0;', '--text-muted: #999999;', content)
content = re.sub(r'--accent:\s*#00f2fe;', '--accent: #ffffff;', content)
content = re.sub(r'--accent-secondary:\s*#10b981;', '--accent-secondary: #aaaaaa;', content)

# Replace specific hardcoded rgba colors for the monochrome look
# Cyan: 0, 242, 254
content = re.sub(r'rgba\(0,\s*242,\s*254,\s*([0-9.]+)\)', r'rgba(255, 255, 255, \1)', content)
# Green: 16, 185, 129
content = re.sub(r'rgba\(16,\s*185,\s*129,\s*([0-9.]+)\)', r'rgba(255, 255, 255, \1)', content)
# Blue-ish profile gradient: 79, 172, 254
content = re.sub(r'rgba\(79,\s*172,\s*254,\s*([0-9.]+)\)', r'rgba(255, 255, 255, \1)', content)

# Update site header scroll background
content = re.sub(r'rgba\(5,\s*12,\s*24,\s*0\.85\)', r'rgba(18, 18, 18, 0.85)', content)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced successfully')
