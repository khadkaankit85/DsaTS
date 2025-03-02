/*
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 */
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]) {
    let store = new Set();
    for (let num in nums) {
      if (store.has(nums[num])) {
        return true;
      }
      store.add(nums[num]);
    }
    return false;
  }
}

const solution = new Solution();
solution.hasDuplicate([1, 2, 3, 3]);
