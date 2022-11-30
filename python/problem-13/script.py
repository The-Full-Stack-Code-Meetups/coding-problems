from itertools import chain, combinations


def subsets(iterable):
    s = list(iterable)
    result = []
    for obj in chain.from_iterable(combinations(s, r) for r in range(len(s)+1)):
        element = set(list(obj))
        if len(element) == 0:
            result.append({})
        else:
            result.append(element)
    return result