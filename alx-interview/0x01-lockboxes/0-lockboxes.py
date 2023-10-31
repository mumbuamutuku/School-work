#!/usr/bin/python3
""" Lock boxes function"""


def canUnlockAll(boxes):
    """ Function which returns true if all boxes can be opened
    n Number of boxes
    visited Track visited boxes
    stack the stack
    """
    n = len(boxes)  # Number of boxes
    visited = [False] * n  # Track visited boxes
    visited[0] = True  # Mark the first box as visited
    stack = [0]  # Initialize a stack with the first box

    # DFS traversal
    while stack:
        box = stack.pop()
        for key in boxes[box]:
            if key < n and not visited[key]:
                visited[key] = True
                stack.append(key)

    # Check if all boxes have been visited
    return all(visited)
