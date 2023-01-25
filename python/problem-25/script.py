'''
This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive
characters as a single count and character. For example, the string AAAABBBCCDAA would be encoded as 4A3B2C1D2A.

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely
of alphabetic characters. You can assume the string to be decoded is valid.
'''


def run_length_encoding(chars):
    result = ''
    previous_letter = ''
    letter_count = 0
    for letter in chars:
        letter_count += 1

        if letter != previous_letter and previous_letter != '' and letter_count != 10:
            result += f'{letter_count - 1}{previous_letter}'
            letter_count = 1
        elif letter_count == 10:
            result += f'{letter_count - 1}{previous_letter}'
            letter_count = 1

        previous_letter = letter

    result += f'{letter_count}{previous_letter}'
    return result


run_length_encoding('AAAAAAAAAAABBAACCDDDD')


def decoding(chars):
    chars_list = [el for el in chars]
    res = ''

    for letter in range(0, len(chars_list), 2):
        res += int(chars_list[letter]) * f'{chars_list[letter + 1]}'

    return res


decoding('9A2A2B2A2C4D')
