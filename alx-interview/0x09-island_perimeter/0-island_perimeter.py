#!/usr/bin/python3
"""
Create a function def island_perimeter(grid):
that returns the perimeter of the island described in grid
"""


def island_perimeter(grid):
    """
    Args: grid is a list of list of integers
    0 represents water
    1 represents land
    Each cell is square, with a side length of 1
    Cells are connected horizontally/vertically (not diagonally).
    grid is rectangular, with its width and height not exceeding 100
    returns the perimeter of the island
    """
    if not grid:
        return 0

    per = 0
    r, c = len(grid), len(grid[0])

    for i in range(r):
        for j in range(c):
            if grid[i][j] == 1:
                per += 4

                # check left cell
                if j > 0 and grid[i][j - 1] == 1:
                    per -= 2

                # check top cell
                if i > 0 and grid[i - 1][j] == 1:
                    per -= 2
    return per
