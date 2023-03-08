def minEatingSpeed(piles, h):
    left, right = 1, max(piles)
    while left <= right:
        mid = left+(right-left)//2
        count = 0
        for i in piles:
            count += i//mid
            if i%mid!=0:
                count += 1
        if count > h:
            left = mid+1
        else:
            right = mid - 1
    return left


print(minEatingSpeed([3,6,7,11], 8))