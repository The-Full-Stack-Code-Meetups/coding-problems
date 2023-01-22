"""This problem was asked by Quora.
Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
For example, given /usr/bin/../bin/./scripts/../,
 return /usr/bin/."""


# . -> ignore
# .. --> one step back

def absolute_path(path):
    res = ''
    if '..' not in path:
        for x in path:
            if x.isalpha():
                res += '/'
                res += x

        return res

    split_path = path.split('/')
    letters = []
    for el in range(len(split_path)):

        if split_path[el] == '.' or split_path == '':
            continue
        elif split_path[el] == '..':
            if letters:
                letters.pop()
        else:
            letters.append(split_path[el])

    for el in letters:
        res += '/'
        res += el

    if not letters:
        res = '/'

    return res


print(absolute_path('/a//b//c//////d'))
