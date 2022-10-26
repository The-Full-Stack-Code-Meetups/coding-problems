no_of_chars = 256


def substring(text, characters):
    if len(text) < len(characters):
        return None

    hash_pat = [0] * no_of_chars
    hash_str = [0] * no_of_chars

    # Store occurrence ofs characters of pattern

    for i in range(0, len(characters)):
        hash_pat[ord(characters[i])] += 1

    start, start_index, min_len = 0, -1, float('inf')

    # Start traversing the string

    count = 0  # count of characters

    for j in range(0, len(text)):

        # count occurrence of characters of string

        hash_str[ord(text[j])] += 1

        # If string's char matches with pattern's char then increment count

        if hash_str[ord(text[j])] <= hash_pat[ord(text[j])]:
            count += 1

        # if all the characters are matched

        if count == len(characters):

            # Try to minimize the window

            while hash_str[ord(text[start])] > hash_pat[ord(text[start])] or hash_pat[ord(text[start])] == 0:

                if hash_str[ord(text[start])] > hash_pat[ord(text[start])]:
                    hash_str[ord(text[start])] -= 1

                start += 1

            # update window size

            len_window = j - start + 1

            if min_len > len_window:
                min_len = len_window
                start_index = start

    # If no window found
    if start_index == -1:
        print("No such window exists")

        return None

    # Return substring starting from start_index and length min_len
    return text[start_index: start_index + min_len]


string = "figehaeci"
path = "aei"
print(substring(string, path))
