def first_recurring(string):
    for i in range(0, len(string)-1):
        curr_element = string[i]
        next_element = string[i+1]
        if curr_element == next_element:
            return curr_element
    else:
        return None
    
