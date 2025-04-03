/*
Given an integer array nums, return the length of the longest strictly increasing 
subsequence

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 */
function lengthOfLIS(nums: number[]): number {
  let counter: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = counter.length;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (counter[mid] < i) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
}
//TODO: incomplete
