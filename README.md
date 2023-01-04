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

<h2>Problem 14</h2>

This question was asked by Riot Games.

Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

record(timestamp): records a hit that happened at timestamp
total(): returns the total number of hits recorded
range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
Follow-up: What if our system has limited memory?

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-14/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-14/script.py)

<h2>Problem 15</h2>
This question was asked by Apple.

Given a binary tree, find a minimum path sum from root to a leaf.

For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

```javascript
  10
 /  \
5    5
 \     \
   2    1
       /
     -1

```
Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-15/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-15/script.py)

<h2>Problem 16</h2>

This problem was asked by Amazon.

Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

For example, given the following matrix:

[
 [1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]
]
You should print out the following:

1
2
3
4
5
10
15
20
19
18
17
16
11
6
7
8
9
14
13
12

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-16/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-16/script.py)

<h2>Problem 17</h2>

This problem was asked by Google.

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-17/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-17/script.py)

<h2>Problem 18</h2>
This problem was asked by Microsoft.
Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.
For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a difference of 5, which is the smallest possible difference.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-18/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-18/script.py)

<h2>
Problem 19
</h2>

This problem was asked by Google.
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-19/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-19/script.py)



<h2>
Problem 20
</h2>
Fibonacci
By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

For example, the first ten Fibonacci numbers are:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-20/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-20/script.py)


<h2>
Problem 21
</h2>

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

Solution for JS: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/js/problem-21/script.js)
<br>
Solution for Py: [Solution](https://github.com/The-Full-Stack-Code-Meetups/coding-problems/blob/main/python/problem-21/script.py)


