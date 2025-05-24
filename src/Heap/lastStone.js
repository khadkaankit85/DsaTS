/*
Last Stone Weight
You are given an array of integers stones where stones[i] represents the weight of the ith stone.

We want to run a simulation on the stones as follows:

At each step we choose the two heaviest stones, with weight x and y and smash them togethers
If x == y, both stones are destroyed
If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
Continue the simulation until there is no more than one stone remaining.

Return the weight of the last remaining stone or return 0 if none remain.

Example 1:

Input: stones = [2,3,6,2,4]

Output: 1
*/

class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {
    while (stones.length > 1) {
      // Sort in descending order to get the two heaviest stones
      stones.sort((a, b) => b - a);
      const y = stones.shift(); // largest
      const x = stones.shift(); // second largest

      if (y !== x) {
        stones.push(y - x);
      }
      // else both are destroyed, do nothing
    }

    return stones[0] || 0; // return last remaining stone or 0
  }
}
