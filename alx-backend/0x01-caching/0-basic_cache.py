#!/usr/bin/python3
"""a class BasicCache that inherits from BaseCaching and is a caching system"""

BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """
    Basic Cache class that inherits from BaseCaching
    """

    def ___init__(self):
        """call the constructor of the parent class BaseCaching using
        super().__init__().
        This initializes the cache_data dictionary from the parent class
        """
        super().__init__()

    def put(self, key, item):
        """ assigns self.cache_data the item value for the key key"""
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Must return the value in self.cache_data linked to key.
        If key is None or if the key doesn’t exist in self.cache_data,
        return None.
        """
        if key is not None:
            return self.cache_data.get(key, None)
        return None
