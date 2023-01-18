'''This problem was asked by Bloomberg.

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
'''


def check_mapping(s1, s2):
    if len(s1) != len(s2):
        return 0


    chars_map = {}
    # escaping duplicates
    chars_set = set()

    for i in range(len(s1)):
        char1 = s1[i]
        char2 = s2[i]

        if char1 in chars_map:
            if chars_map[char1] != char2:
                return False
        else:
            if char2 in chars_set:
                return False

            chars_map[char1] = char2
            chars_set.add(char2)

    return True


check_mapping('abc', 'bcd')
