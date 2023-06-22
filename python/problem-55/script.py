# Problem 55
# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
# such that nums[i] == nums[j] and abs(i - j) <= k.

# Example 1:
# Input: nums = [1,2,3,1], k = 3
# Output: True

# Example 2:
# Input: nums = [1,0,1,1], k = 1
# Output: True

# Example 3:
# Input: nums = [1,2,3,1,2,3], k = 2
# Output: False

# Constraints:
# 1 <= len(nums) <= 10^5
# -10^9 <= nums[i] <= 10^9
# 0 <= k <= 10^5

from typing import List

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen = {}
        for i, num in enumerate(nums):
            if num in seen and abs(i - seen[num]) <= k:
                return True
            seen[num] = i
        return False

solution = Solution()

nums1 = [1, 2, 3, 1]
k1 = 3
print(solution.containsNearbyDuplicate(nums1, k1))

nums2 = [1, 0, 1, 1]
k2 = 1
print(solution.containsNearbyDuplicate(nums2, k2))

nums3 = [1, 2, 3, 1, 2, 3]
k3 = 2
print(solution.containsNearbyDuplicate(nums3, k3))

