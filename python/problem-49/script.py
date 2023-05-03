# 40. Combination Sum II --> https://leetcode.com/problems/combination-sum-ii/
'''
Given a collection of candidate numbers (candidates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]
'''


class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def lst2link(lst):
    cur = dummy = ListNode()
    for e in lst:
        cur.next = ListNode(e)
        cur = cur.next
    return dummy.next


class Solution(object):

    def mergeTwoLists(self, list1, list2):
        v = []

        while list1 is not None:
            v.append(list1.val)
            list1 = list1.next

        while list2 is not None:
            v.append(list2.val)
            list2 = list2.next

        v.sort()
        answer = lst2link(v)
        return answer
