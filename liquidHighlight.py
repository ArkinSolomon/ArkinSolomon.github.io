#!/usr/bin/env python3
# Replace markdown code highlights with liquid/rouge highlights

# Imports
from os import listdir
from os.path import isfile, join

# Get all files in _pages
pagesPath = '_pages'
onlyfiles = [f for f in listdir(pagesPath) if isfile(join(pagesPath, f))]
