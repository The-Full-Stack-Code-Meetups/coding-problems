'''This problem was asked by Facebook.

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space?'''

from collections import Counter
def unique_array(arr):
    #v1
    #Counter is an unordered collection where elements are stored as Dict keys and their count as dict value
    c = Counter(arr)
    return ([k for k,v in c.items() if v==1])

    #v2
    res = []
    for el in range(len(arr)):
        if el == len(arr):
            continue
        if arr[el] in arr[el+1::]:
            continue
        else:
            if arr[el] in arr[0:el-1]:
                continue
            else:
                res.append(arr[el])

    return res



unique_array( [2, 4, 6, 8, 10, 2, 6, 10])