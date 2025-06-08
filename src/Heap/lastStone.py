import heapq
from typing import List

"""
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.
Return the weight of the last remaining stone. If there are no stones left, return 0.
"""


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [-n for n in stones]
        heapq.heapify(max_heap)
        while len(max_heap) > 1:
            # while the heap has more than 1 element
            max_val1 = -heapq.heappop(max_heap)
            max_val2 = -heapq.heappop(max_heap)
            diff = max_val1 - max_val2
            # if the diff of top two is more than zero, then push it to the heap
            if diff > 0:
                heapq.heappush(max_heap, -diff)
        # after there is 1 or 0 element in the heap
        return -heapq.heappop(max_heap) if max_heap else 0
