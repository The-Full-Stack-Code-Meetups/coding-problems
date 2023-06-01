/* Problem 51 

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

*/

/**
 * @param {string} s
 * @return {number}
 */

def length_last_word(s):
    # Removing trailing white spaces
    words = s.strip().split()

    return len(words[-1])

print(length_last_word('Hello world'))
print(length_last_word('  fly me to the  moon'))

