#!/usr/bin/python3
"""
"""


import sys


def is_safe(board, row, col):
    n = len(board)

    # Check if there is a queen in the same column on a row above
    for i in range(row):
        if board[i][col]:
            return False

    # Check if there is a queen in the upper-left diagonal
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j]:
            return False

    # Check if there is a queen in the upper-right diagonal
    for i, j in zip(range(row, -1, -1), range(col, n)):
        if board[i][j]:
            return False

    return True


def solve_nqueens(board, row, solutions):
    n = len(board)

    if row == n:
        solution = [[i, board[i].index(1)] for i in range(n)]
        solutions.append(solution)
        return

    for col in range(n):
        if is_safe(board, row, col):
            board[row][col] = 1
            solve_nqueens(board, row + 1, solutions)
            board[row][col] = 0


def nqueens(N):
    try:
        N = int(N)
        if N < 4:
            print("N must be at least 4")
            sys.exit(1)

        board = [[0 for _ in range(N)] for _ in range(N)]
        solutions = []
        solve_nqueens(board, 0, solutions)

        for solution in solutions:
            print(solution)

    except ValueError:
        print("N must be a number")
        sys.exit(1)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: nqueens N")
        sys.exit(1)

    nqueens(sys.argv[1])
