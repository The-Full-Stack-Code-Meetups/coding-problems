from collections import deque


def interleave(stack):
    stack = deque(stack)
    queue = deque()
    n = len(stack)
    for i in range(n // 2):
        first = None
        last = None
        for j in range(i, n - i):
            x = stack.popleft()
            if j == i:
                first = x
            elif j == n - i - 1:
                last = x
            else:
                queue.append(x)
        if i % 2 == 0:
            stack.appendleft(first)
            stack.appendleft(last)
        else:
            stack.appendleft(last)
            stack.appendleft(first)
        while queue:
            stack.appendleft(queue.popleft())
    while stack:
        queue.append(stack.pop())
    return queue