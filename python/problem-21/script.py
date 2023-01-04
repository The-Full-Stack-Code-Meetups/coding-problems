def missingNumber(arr1, arr2):
    d = {}

    for num in arr2:
        if num in d:
            d[num] += 1
        else:
            d[num] = 0

    for num in arr1:
        if d[num] == 0:
            return num