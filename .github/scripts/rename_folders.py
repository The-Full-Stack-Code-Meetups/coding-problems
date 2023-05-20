# the convention is: every folder should be named problem-{didgit}
# examples: problem-23, problem-9, problem-11

import os, sys, re
from folders_location import folders

regex = 'problem-(\d+)'
 
def main(path):
    for root, dirs, files in os.walk(path):
        if root in folders:
            for c_dir in dirs:
                if 'problem' in c_dir:
                    match = re.search(regex, c_dir)

                    if not match:
                        digit_match = re.search('\d+', c_dir)
                        digit = digit_match.group(0)
                        if int(digit) < 10:
                           rename_string = f"problem-0{digit}"
                        else:
                           rename_string = f"problem-{digit}"
                        os.rename(os.path.join(root, c_dir), os.path.join(root, rename_string))


if __name__ == '__main__':
    main(sys.argv[1])
