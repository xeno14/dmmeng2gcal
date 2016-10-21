#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

txt = open(sys.argv[1]).read()

res = ""
for line in open(sys.argv[1]):
    line = line.strip()
    if line.strip().startswith("//"):
        continue
    line = line.replace("\n", "")
    line = line.replace(" ", "%20")
    line = line.replace("\"", "%22")
    res += line
res = "javascript:(function(){" + res + "})();"
print(res)
