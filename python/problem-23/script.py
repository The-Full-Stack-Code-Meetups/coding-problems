def is_palindrome(word):
    return word == word[::-1]


def all_indices(list_strings):
    result = []
    n = len(list_strings)

    for i in range(n):
        for j in range(n):
            if is_palindrome(list_strings[i]+list_strings[j]) and list_strings[i] != list_strings[j]:
                result.append([i,j])
            else:
                continue

    return result