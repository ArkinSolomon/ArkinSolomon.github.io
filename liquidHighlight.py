#!/usr/bin/env python3
# Replace markdown code highlights with liquid/rouge highlights

# Imports
from pathlib import Path
import re

# Get all files in _pages
pagesPath = '_pages'
files = list(Path(pagesPath).rglob('*.[mM][dD]'))#

# Loop through all files
for f in files:
    file = open(f, 'r')
    text = file.read()
    file.close()
    new_text = re.sub(r'^```(\w+)$', r'{% highlight \1 linenos %}', text, flags=re.MULTILINE)
    new_text = re.sub(r'^```$', '{% endhighlight %}', new_text, flags=re.MULTILINE)
    file = open(f, 'w')
    file.write(new_text)
    file.close()
