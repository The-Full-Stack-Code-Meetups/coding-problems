def missing_positive_integer(array):
    for i in range(1, max(array)+2):
        missing = True
        for j in range(max(array)):
            if array[j] == i:
                missing = False
                break
        if missing:
            return i


print(missing_positive_integer([3, 4, -1, 1]))