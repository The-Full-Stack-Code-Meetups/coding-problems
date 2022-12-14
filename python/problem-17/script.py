"""This problem was asked by Google.

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3."""


def node_list(arr):
    start = 0
    end = len(arr)

    curr_idx = start
    while curr_idx < end - 1:
        arr[curr_idx], arr[curr_idx + 1] = arr[curr_idx + 1], arr[curr_idx]
        curr_idx += 2

    print(arr)


node_list([1, 2, 3, 4])
