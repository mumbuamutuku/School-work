#!/usr/bin/env python3
"""
MRU Caching
"""


BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """
    class mruCache that inherits from BaseCaching and is a caching system
    """

    def __init__(self):
        """
        Init method
        """
        super().__init__()
        self.key_indexes = []

    def put(self, key, item):
        """
        Must assign to the dictionary self.cache_data
        the item value for the key key.
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                mru_key = self.key_indexes.pop()
                print("DISCARD:", mru_key)
                del self.cache_data[mru_key]

            self.cache_data[key] = item
            self.key_indexes.append(key)

    def get(self, key):
        """
        Must return the value in self.cache_data linked to key.
        """
        if key is not None:
            if key in self.cache_data:
                self.key_indexes.remove(key)
                self.key_indexes.append(key)
                return self.cache_data[key]
        return None
