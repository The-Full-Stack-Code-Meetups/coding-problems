"""
This problem was asked by Microsoft.
Given an unsorted array of integers,
find the length of the longest consecutive elements sequence.

For example, given [100, 4, 200, 1, 3, 2],
 the longest consecutive element sequence is [1, 2, 3, 4].
  Return its length: 4.
Your algorithm should run in O(n) complexity."""


def longest_consec_els(array):
    array.sort()
    sorted_arr = []
    arrays = []
    for el in range(len(array)):
        if sorted_arr:
            last_el = sorted_arr[len(sorted_arr)-1]
            if last_el + 1 == array[el]:
                sorted_arr.append(array[el])
                continue
            arrays.append(tuple(sorted_arr))
            sorted_arr.clear()

        else:
            sorted_arr.append(array[el])

    return len(max(arrays))


longest_consec_els([100, 4, 200, 1, 3, 2])
