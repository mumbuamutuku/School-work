#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        return a dictionary with the following key-value pairs
        index: the current start index of the return page.
        next_index: the next index to query with.
        page_size: the current page size
        data: the actual page of the dataset
        """
        assert isinstance(index, int) and isinstance(page_size, int)
        assert index is None or index >= 0
        assert page_size > 0

        dataset = self.indexed_dataset()
        total_rows = len(dataset)

        if index is None:
            index = 0

        start_index = max(0, min(index, total_rows))
        end_index = start_index + page_size

        if end_index > total_rows:
            end_index = total_rows

        next_index = end_index if end_index < total_rows else None

        data = [dataset[i] for i in range(start_index, end_index)
                if i in dataset]

        return {
                "index": start_index,
                "next_index": next_index,
                "page_size": page_size,
                "data": data
                }
