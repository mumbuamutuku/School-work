#!/usr/bin/python3
"""a class LifoCache that inherits from BaseCaching and is a caching system"""

BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """
    FIFO Cache class that inherits from BaseCaching
    """
    def ___init__(self):
        """call the constructor of the parent class BaseCaching using
        super().__init__().
        This initializes the cache_data dictionary from the parent class
        """
        super().__init__()
        self.order_of_insertion = []

    def put(self, key, item):
        """
        assign to the dictionary self.cache_data the item value for key key.
        If key or item is None, this method should not do anything.
        If the number of items in self.cache_data is higher that
        BaseCaching.MAX_ITEMS
        you must discard the last item put in cache (LIFO algorithm)
        you must print DISCARD: with the key discarded and following bynew line
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                last_item = self.order_of_insertion.pop()
                print("DISCARD:", last_item)
                del self.cache_data[last_item]

            self.cache_data[key] = item
            self.order_of_insertion.append(key)

        def get(self, key):
            """Must return the value in self.cache_data linked to key.
            If key is None or if the key doesn’t exist in self.cache_data,
            return None.
            """
            if key is not None:
                return self.cache_data.get(key, None)
            return None
