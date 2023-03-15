def longest_common_prefix(arr):
    for i in range(len(arr[0])):
        chr = arr[0][i]
        for j in range(1,len(arr)):
            if i == len(arr[j]) or chr != arr[j][i]:
                return arr[0][:i]
    return arr[0]