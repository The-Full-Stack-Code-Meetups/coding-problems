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

