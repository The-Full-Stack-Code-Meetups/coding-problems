'''
This problem was asked by Google.
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs
come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
'''


def rgb_issue(arr):
    r_idx = 0
    b_idx = len(arr) - 1

    curr_idx = 0
    while curr_idx <= b_idx:

        if arr[curr_idx] == 'R':
            arr[r_idx], arr[curr_idx] = arr[curr_idx], arr[r_idx]
            r_idx += 1
            curr_idx += 1

        elif arr[curr_idx] == 'B':
            arr[b_idx], arr[curr_idx] = arr[curr_idx], arr[b_idx]
            b_idx -= 1

        else:
            curr_idx += 1

    return arr


rgb_issue(['G', 'B', 'R', 'R', 'B', 'R', 'G'])
