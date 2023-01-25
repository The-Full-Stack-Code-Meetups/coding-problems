''''

This problem was asked by Microsoft.

Given a number in the form of a list of digits, return all possible permutations.

For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].

'''''

from itertools import permutations


def permute(Alist):
    return [el for el in list(permutations(Alist))]


print(permute([1, 2, 3]))
