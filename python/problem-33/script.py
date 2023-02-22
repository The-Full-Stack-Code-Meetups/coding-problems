count_char = 0
text_left = ""


def read7(filename: str = "text.txt") -> str:
    global count_char
    with open(filename, "r") as f:
        f.seek(count_char, 0)
        data = f.read(7)
    count_char += 7
    return data


def readN(n: int, filename: str = "text.txt") -> str:
    global text_left
    for i in range((n // 7) + 1):
        text_left += read7(filename)
    text = text_left[:n]
    text_left = text_left[n:]
    return text


print(readN(3))
print(read7())
print(read7())