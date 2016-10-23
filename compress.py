#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests
import sys
import re

with open("./dmmeng2gcal.js", "r") as f:
    js_code = f.read()

# Compress the code using Clojure Compiler Service
# https://developers.google.com/closure/compiler/docs/api-ref
res = requests.post("https://closure-compiler.appspot.com/compile",
        {
            "js_code": js_code,
            "compilation_level": "SIMPLE_OPTIMIZATIONS",
            "output_format": "json",
            "warning_level": "default",
            "output_info": "compiled_code",
        }).json()
compiled_code = res["compiledCode"]
compiled_code = compiled_code.replace("\n", "")
print(compiled_code)

# Update README.md
with open("./README.md", "r") as f:
    readme = f.read()

readme = re.sub(r"javascript:.+", "javascript:" + compiled_code, readme)
with open("./README.md", "w") as f:
    f.write(readme)
