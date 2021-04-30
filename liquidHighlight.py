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
    file = open(f, 'w+')
    text = file.read()
    newText = re.sub(r'^```(\w+)?$', text, '{% highlight \1 linenos %}', flags=re.MULTILINE)
    newText = re.sub(r'^```$', newText, '{% endhighlight %}', flags=re.MULTILINE)
    file.seek(0)
    file.write(newText)
    file.close()
