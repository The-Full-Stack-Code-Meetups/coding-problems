def Fibonacci(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    elif n > 2:
        return Fibonacci(n-1)+Fibonacci(n-2)