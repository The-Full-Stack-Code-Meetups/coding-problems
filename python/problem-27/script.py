def find_island(given_matrix):
    rows, cols = len(given_matrix), len(given_matrix[0])

    def dfs(row, col):
        if row < 0 or col < 0 or row == rows or col == cols:
            return 0
        if given_matrix[row][col] == 0:
            return 0
        given_matrix[row][col] = 0
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)
        return 1

    res = 0
    for r in range(rows):
        for c in range(cols):
            res += dfs(r, c)
    return res


print(find_island([[1, 1, 0, 0, 0],
                   [1, 1, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 1, 1]]))