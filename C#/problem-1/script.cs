/* 
Valid Parentheses

Leetcode: https://leetcode.com/problems/valid-parentheses/

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

*/

using System.Collections.Generic;
public class Solution {
    public bool IsValid(string s) {
     var stack = new Stack<char>();
    foreach (var c in s) {
        if (c == '(' || c == '[' || c == '{') {
            stack.Push(c);
        } else if (c == ')' && (stack.Count == 0 || stack.Pop() != '(')) {
            return false;
        } else if (c == ']' && (stack.Count == 0 || stack.Pop() != '[')) {
            return false;
        } else if (c == '}' && (stack.Count == 0 || stack.Pop() != '{')) {
            return false;
        }
    }
    return stack.Count == 0;
    }
}