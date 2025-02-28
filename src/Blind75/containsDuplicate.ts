/*
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 */
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]) {
    let store: Map<number, number> = new Map();
    for (let num in nums) {
      if (store.has(nums[num])) {
        console.log(true);
        return true;
      } else {
        store.set(nums[num], nums[num]);
      }
    }
    return false;
  }
}

const solution = new Solution();
solution.hasDuplicate([1, 2, 3, 3]);
