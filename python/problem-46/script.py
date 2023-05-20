'''
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
'''


def valid_parentheses(expression):
    brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    indexes = []

    for index in range(len(expression)):
        if expression[index] in brackets.keys():
            indexes.append(index)
        elif not indexes:
            return False
        elif expression[index] == brackets[expression[indexes[-1]]]:
            indexes.pop()
        else:
            return False

    if indexes:
        return False
    return True
