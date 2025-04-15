/*
Find the Duplicate Number
You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.
Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.
Example 1:
Input: nums = [1,2,3,2,2]
Output: 2
*/

class Solution {
  findDuplicate(nums) {
    //how to find duplicates??? either sort and then check two adjacent elements
    //or use a hashset:)
    const store = new Set();
    for (const num of nums) {
      if (store.has(num)) return num;
      store.add(num);
    }
    return -1;
  }
}
