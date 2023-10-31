#!/usr/bin/python3
"""
Given a pile of coins of different values, determine the fewest number of coins
needed to meet a given amount total.
"""


def makeChange(coins, total):
    """
    Prototype makeChange
    Args:
    coins - pile of coins as a list
    total - total given
    """
    if total <= 0:
        return 0

    arr = [float('inf')] * (total + 1)
    arr[0] = 0

    for coin in coins:
        for amount in range(coin, total + 1):
            arr[amount] = min(arr[amount], arr[amount - coin] + 1)

    return arr[total] if arr[total] != float('inf') else -1
