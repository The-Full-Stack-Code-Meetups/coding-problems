# This problem was asked by Microsoft.
# Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. 
# For example, given the string abracadabra and the pattern abr, you should return [0, 7].



def find_pattern(text, pattern):
    my_list = []
    x = 0
    text_len = len(text)
    patt_len = len(pattern)
    while x < text_len:
        if text[x] == pattern[0]:
            if text[x:x + patt_len] == pattern:
                my_list.append(x)
                x += patt_len
            else:
                x += 1
        else:
            x += 1
    return my_list


print(find_pattern("abracadabra", "abr"))
