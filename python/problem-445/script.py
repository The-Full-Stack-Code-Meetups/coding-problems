'''
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

Constraints:
    3 <= nums.length <= 500
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104
'''


def closest_sum_of_three(nums, target):
    nums.sort()

    closest_sum = float('inf')

    for i in range(len(nums)):
        left = i + 1
        right = len(nums) - 1

        while left < right:
            combination = nums[i] + nums[left] + nums[right]
            if abs(combination - target) < abs(closest_sum - target):
                closest_sum = combination

            if combination < target:
                left += 1
            else:
                right -= 1

    return closest_sum

