#!/usr/bin/python3
"""
0. Prime Game

"""


def isPrime(number):
    """
    Get prime number of number
    Args: number - integer to calculate prime number
    Return True if number is a prime number else false
    """
    if number <= 1:
        return False
    if number <= 3:
        return True
    if number % 2 == 0 or number % 3 == 0:
        return False
    i = 5
    while i * i <= number:
        if number % i == 0 or number % (i + 2) == 0:
            return False
        i += 6
    return True


def win(n):
    """
    Function to check if a player can win a game with a given n
    Return True or false
    """
    if n == 1:
        return False
    if n % 2 == 0:
        return True
    return not isPrime(n)


def isWinner(y, num):
    """
    function to iterate through the list of nums to count how
    many games Maria and Ben each win based on the rules you provided.
    """
    maria_win = 0
    ben_win = 0

    for n in num:
        if win(n):
            maria_win += 1

    ben_win = y - maria_win

    if maria_win > ben_win:
        return "Maria"
    elif ben_win > maria_win:
        return "Ben"
    else:
        return None
