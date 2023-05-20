def longest_consecutive_ones(n):
    binary_string = bin(n)[2:]  # Convert to binary string
    max_run_length = 0
    current_run_length = 0

    for digit in binary_string:
        if digit == '1':
            current_run_length += 1
            max_run_length = max(max_run_length, current_run_length)
        else:
            current_run_length = 0

    return max_run_length
