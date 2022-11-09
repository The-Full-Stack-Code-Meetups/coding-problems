"""This problem was asked by Google.
Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.
Recall that you can only push(item) or pop() from a stack, and enqueue(item) or dequeue() from a queue.
For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].
Hint: Try working backwards from the end state."""


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
