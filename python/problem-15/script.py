import sys


class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


root = Node(10)
root.left = Node(5)
root.left.right = Node(2)
root.right = Node(5)
root.right.right = Node(1)
root.right.right.left = Node(-1)


def min_path_sum(root):
    if root is None:
        return 0
    result = root.data
    leftresult = sys.maxsize
    rightresult = sys.maxsize
    if (root.left is None) and (root.right is None):
        return result
    else:
        if root.left is not None:
            leftresult = min_path_sum(root.left)
        if root.right is not None:
            rightresult = min_path_sum(root.right)
        if leftresult < rightresult:
            result += leftresult
        else:
            result += rightresult
    return result


print(min_path_sum(root))