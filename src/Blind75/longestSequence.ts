/*
 * Longest Consecutive Sequence
 * Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
 * A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
 * You must write an algorithm that runs in O(n) time.
 * Example 1:
 * Input: nums = [2,20,4,10,3,4,5]
 * Output: 4
 */
class Solution {
  longestConsecutive(nums: number[]) {
    const set = new Set(nums);
    let maxLength = 0;
    let currentMaxLength = 1;
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      if (!set.has(current - 1)) {
        while (set.has(current + 1)) {
          currentMaxLength++;
          current++;
        }
        maxLength = Math.max(maxLength, currentMaxLength);
        currentMaxLength = 1;
      }
    }
    return maxLength;
  }
}
const nums = [100, 4, 200, 1, 3, 2];
const solution = new Solution();
console.log(solution.longestConsecutive(nums));
