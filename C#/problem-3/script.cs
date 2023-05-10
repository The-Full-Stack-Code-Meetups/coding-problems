/*
Valid Parentheses

Codewars:https://www.codewars.com/kata/52774a314c2333f0a7000688/train/csharp

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. Furthermore, the input string may be empty and/or not contain any parentheses at all. Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).
*/

using System.Collections.Generic;

public class Parentheses
{
    public static bool ValidParentheses(string braces)
    {
       var st = new Stack<char>();
    foreach (var c in braces)
      switch (c)
      {
        case '(':
          st.Push(c);
          continue;
        case ')':
          if (st.Count == 0 || st.Pop() != '(') return false;
          continue;
      }
    return st.Count == 0;
    }
}