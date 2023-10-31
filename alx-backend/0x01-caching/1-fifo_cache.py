#!/usr/bin/python3
"""a class BasicCache that inherits from BaseCaching and is a caching system"""

BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """
    FIFO Cache class that inherits from BaseCaching
    """
    def ___init__(self):
        """call the constructor of the parent class BaseCaching using
        super().__init__().
        This initializes the cache_data dictionary from the parent class
        """
        super().__init__()

    def put(self, key, item):
        """
        assign to the dictionary self.cache_data the item value for key key.
        If key or item is None, this method should not do anything.
        If the number of items in self.cache_data is higher that
        BaseCaching.MAX_ITEMS
        you must discard the first item put in cache (FIFO algorithm)
        you must print DISCARD: with the key discarded and following bynew line
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                first_item = next(iter(self.cache_data))
                print("DISCARD:", first_item)
                del self.cache_data[first_item]
            self.cache_data[key] = item

    def get(self, key):
        """Must return the value in self.cache_data linked to key.
        If key is None or if the key doesn’t exist in self.cache_data,
        return None.
        """
        if key is not None:
            return self.cache_data.get(key, None)
        return None
