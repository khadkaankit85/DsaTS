/*
 Binary Search
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
Your solution must run in O(logn) time.
Example 1:
Input: nums = [-1,0,2,4,6,8], target = 4
Output: 3
*/

class Solution {
  search(nums: number[], target: number) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) {
        return mid;
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else if (target < nums[mid]) {
        r = mid - 1;
      }
    }
    return -1;
  }
}

const solution = new Solution();
const nums = [-1, 0, 2, 4, 6, 8];
const target = 4;
console.log(solution.search(nums, target));
