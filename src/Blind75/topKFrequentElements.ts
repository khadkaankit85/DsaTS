/*
 *Given an integer array nums and an integer k, return the k most frequent elements within the array.
 *The test cases are generated such that the answer is always unique.
 *You may return the output in any order.
 *Example 1:
 *Input: nums = [1,2,2,3,3,3], k = 2
 *Output: [2,3]
 */

//easiest solution is to get the count of all the numbers, make an array from that and then sort and return n number from that array
class Solution {
  topKFrequent(nums: number[], k: number): number[] {
    let topKElements = new Set();
    let memory: Map<number, number> = new Map();
    for (let num in nums) {
      let currentCount = memory.get(nums[num]) || 0;
      memory.set(nums[num], currentCount + 1);
    }
  }
}
