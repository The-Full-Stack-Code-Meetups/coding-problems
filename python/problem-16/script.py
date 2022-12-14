"""This problem was asked by Amazon.

Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
For example, given the following matrix:

[
 [1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]
]

You should print out the following:
1
2
3
4
5
10
15
20
19
18
17
16
11
6
7
8
9
14
13
12"""


def clockwise_matrix(matrix):
    k = 0
    l = 0

    m = len(matrix)  # number of rows
    n = len(matrix[0])  # since all columns are of an equal size

    ''' 
    k - starting row index
    m - ending row index
    l - starting column index
    n - ending column index
    i - iterator 
    '''

    while k < m and l < n:

        # Print the first row from
        # the remaining rows
        # i = current row index
        for i in range(l, n):
            print(matrix[k][i])

        k += 1

        # Print the last column from
        # the remaining columns
        # i = current row index
        for i in range(k, m):
            print(matrix[i][n - 1])

        n -= 1

        # Print the last row from
        # the remaining rows
        # i = current row index
        if k < m:

            for i in range(n - 1, (l - 1), -1):
                print(matrix[m - 1][i])

            m -= 1

        # Print the first column from
        # the remaining columns
        if l < n:
            for i in range(m - 1, k - 1, -1):
                print(matrix[i][l])

            l += 1


a = clockwise_matrix([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]
)
