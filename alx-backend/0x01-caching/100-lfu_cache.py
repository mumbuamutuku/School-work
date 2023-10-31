#!/usr/bin/python3
"""
LFU Caching
"""

BaseCaching = __import__('base_caching').BaseCaching


class LFUCache(BaseCaching):
    """
    a class LFUCache that inherits from BaseCaching and is a caching system
    """
    def __init__(self):
        """initialize class """
        super().__init__()
        self.usage_frequency = {}
        self.min_frequency = 0

    def put(self, key, item):
        """
        assign to the dictionary self.cache_data the item value for the key key
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                self.evict_least_frequent_or_lru()

            self.cache_data[key] = item
            self.usage_frequency[key] = 1

    def get(self, key):
        """
        return the value in self.cache_data linked to key
        """
        if key is not None:
            if key in self.cache_data:
                # Update the usage frequency and minimum frequency
                self.usage_frequency[key] += 1
                self.min_frequency = min(
                        self.usage_frequency[key],
                        self.min_frequency
                        )
                return self.cache_data[key]
        return None

    def evict_least_frequent_or_lru(self):
        """ Find keys with minimum frequency (LFU candidates)"""
        lfu_candidates = [
                key for key in self.usage_frequency
                if self.usage_frequency[key] == self.min_frequency
                ]

        if len(lfu_candidates) == 0:
            # No LFU candidates, use LRU to find the least recently used item
            lru_candidate = self.find_lru_candidate()
            key_to_evict = lru_candidate
        else:
            """ If multiple LFU candidates, use LRU algorithm to find
            the least recently used among them"""

            lru_candidate = self.find_lru_candidate(lfu_candidates)
            key_to_evict = lru_candidate

        print("DISCARD:", key_to_evict)
        del self.cache_data[key_to_evict]
        del self.usage_frequency[key_to_evict]

        # Update the minimum frequency for the next eviction round
        self.min_frequency += 1

    def find_lru_candidate(self, candidates=None):
        """ Use LRU algorithm to find the least recently used item among
        the LFU candidates or the entire cache"""
        if candidates is None:
            candidates = self.cache_data.keys()

        for key in self.usage_frequency.keys():
            if key in candidates:
                return key
