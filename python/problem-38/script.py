def roman_to_int(num):
    rti_dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    res = 0
    for i in range(len(num)-1):
        if rti_dict[num[i]] < rti_dict[num[i+1]]:
            res = res - rti_dict[num[i]]
        else:
            res = res + rti_dict[num[i]]
    return res+rti_dict[num[-1]]