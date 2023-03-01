# 93% correct

'''Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true
'''


def isIsomorphic(s, t) -> bool:
    first_WORD = s
    second_WORD = t
    res = {}
    for letter in range(len(first_WORD)):
        res[first_WORD[letter]] = second_WORD[letter]

    if len(res) != len(first_WORD):
        return False

    test = ''
    for el in range(len(second_WORD)):
        for key, value in res.items():
            if second_WORD[el] == value:
                test += second_WORD[el]

    if test == second_WORD:
        print(test)
        return True

    else:
        print(test)
        print(False)
        return False


isIsomorphic("foo", "bar")
