# coding-problems

In this section, you will find coding problems and their solutions, worked collaboratively by some of our members.

<h2>Problem 1</h2>
Difficulty: Easy
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N. You should be as efficient with time and space as possible.
You should be as efficient with time and space as possible.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/tree/main/js/problem-1/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-1/1.py)

<h2>Problem 2</h2>
 This problem was asked by Quora.
 Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
 For example, given /usr/bin/../bin/./scripts/../, return /usr/bin/.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-2/shortestPath.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-2/shortest_path.py)
<h2>Problem 3</h2>

This problem was asked by Square.
Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-3/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-3/script.py)

<h2>Problem 4</h2>
Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string abracadabra and the pattern abr, you should return [0, 7].

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-4/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-4/script.py)

<h2>Problem 5</h2>
This problem was asked by Facebook.
Given an array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.


Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-5/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-5/script.py)

<h2>Problem 6</h2>
This problem was asked by Facebook.

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-6/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-6/script.py)

<h2>Problem 7</h2>

This problem was asked by Google.

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push(item) or pop() from a stack, and enqueue(item) or dequeue() from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-7/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-7/script.py)

<h2>Problem 8</h2>

This problem was asked by Microsoft.

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-8/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-8/script.py)


<h2>Problem 9</h2>
This problem was asked by Google.

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-9/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-9/script.py)

<h2>Problem 10</h2>

This problem was asked by Palantir.

Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.


Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-10/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-10/script.py)

<h2>Problem 11</h2>

This problem was asked by Stripe.

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-11/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-11/script.py)

<h2>Problem 12</h2>

This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string acbbac, return b. Given the string abcdef, return null.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-12/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-12/scipt.py)


<h2>Problem 13</h2>

This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.


Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-13/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-13/script.py)


