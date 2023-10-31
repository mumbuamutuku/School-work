#!/usr/bin/python3
"""
a method that determines if a given data set represents a valid UTF-8 encoding
"""


def validUTF8(data):
    """ method
    Return: True if data is a valid UTF-8 encoding, else return False
    """

    def next_byte(byte):
        """ A function to check if a byte starts with '10' pattern """
        return byte & 0b11000000 == 0b10000000

    count = 0
    while count < len(data):
        byte = data[count]

        # Check for single byte character (starts with '0')
        if byte & 0b10000000 == 0:
            count += 1
        # Check for two-byte character starts with 110
        elif byte & 0b11100000 == 0b11000000:
            if count + 1 >= len(data) or not next_byte(data[count + 1]):
                return False
            count += 2
        # Check for three-byte character starts with 1110
        elif byte & 0b11110000 == 0b11100000:
            if count + 2 >= len(data) or \
               not next_byte(data[count + 1]) or \
               not next_byte(data[count + 2]):
                return False
            count += 3
        # Check for four byte charcter starts with 11110
        elif byte & 0b11111000 == 0b11110000:
            if count + 3 >= len(data) or \
               not next_byte(data[count + 1]) or \
               not next_byte(data[count + 2]) or \
               not next_byte(data[count + 3]):
                return False
            count += 4
        else:
            return False  # Invalid starting byte

    return True
