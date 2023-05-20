# the convention is: every folder should be named problem-{didgit}
# examples: problem-23, problem-9, problem-11

import os, sys, re
folders = ['/python', '/js']

regex = 'problem-(\d+)'
 
def main(path):
    #print('here')
    for root, dirs, files in os.walk(path):
        #print('here2')
        if root in folders:
            print('root: ', root)
            print('dirs: ', dirs)
            for c_dir in dirs:
                if 'problem' in c_dir:
                    match = re.search(regex, c_dir)
                    print(match)
                    if not match:
                        digit_match = re.search('\d+', c_dir)
                        digit = digit_match.group(0)
                        print(digit)
                        if int(digit) < 10:
                           rename_string = f"problem-0{digit}"
                        else:
                           rename_string = f"problem-42343{digit}"
                        os.rename(os.path.join(root, c_dir), os.path.join(root, rename_string))


if __name__ == '__main__':
    main('.')
