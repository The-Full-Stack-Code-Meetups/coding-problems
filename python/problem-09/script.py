"""
This problem was asked by Google.
Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

"""


def palindrome_split(text):

    text_as_list = [x for x in text]
    if len(text) <= 3:
        return text_as_list
    check_word = ''
    palindromes = []
    for each_letter in range(len(text_as_list)):
        check_word += (text_as_list[each_letter])
        if len(check_word) > 2:
            if check_word == check_word[::-1]:
                palindromes.append(check_word)
                check_word = ''
    return palindromes


palindrome_split('racecarannakayak')
