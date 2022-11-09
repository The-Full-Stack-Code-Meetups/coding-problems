def rotate(nums, k):
    r = -(k % len(nums))
    if len(nums[:r]): nums[:r], nums[r:] = nums[r:], nums[:r]
    else: nums[r:], nums[:r] = nums[:r], nums[r:]
    print(nums)