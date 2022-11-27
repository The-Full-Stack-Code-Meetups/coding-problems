"""This problem was asked by Palantir.
Write a program that checks whether an integer is a palindrome.
 For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.
  Do not convert the integer into a string."""

import math


def check_palindrome(num):
    # number length
    digits = int(math.log10(num)) + 1

    numbers = []
    for idx in range(1, digits + 1):
        curr_digit = num // 10 ** (int(math.log(num, 10)) - idx + 1) % 10
        numbers.append(curr_digit)

    for idx in range(len(numbers)):
        if numbers[idx] != numbers[-1 - idx]:
            return False
    return True


print(check_palindrome(89798))
print(check_palindrome(781))
print(check_palindrome(121))
print(check_palindrome(678))
