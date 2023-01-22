# the convention is: every exercise should be named script.language_exception
# examples: script.py, script.js

import os, sys
from problems_folders import js_problems, python_problems

def main(path):
    for root, dirs, files in os.walk(path):
        for i in files:
            if (python_problems in root):
                os.rename(os.path.join(root, i), os.path.join(root, "script.py"))
            elif (js_problems in root):
                os.rename(os.path.join(root, i), os.path.join(root, "script.js"))


if __name__ == '__main__':
    main(sys.argv[1])