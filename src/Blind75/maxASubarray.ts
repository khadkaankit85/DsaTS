/*
 *You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * */

function findMaxAverage(nums: number[], k: number): number {
  if (nums.length == 1) return nums[0] / k;
  let firstKsum = 0;
  for (let i = 0; i < k; i++) {
    firstKsum += nums[i];
  }

  let left = 0;
  let maxSum = firstKsum;

  for (let right = k; right < nums.length; right++) {
    firstKsum += nums[right] - nums[left];
    maxSum = Math.max(firstKsum, maxSum);
    left++;
  }

  return maxSum / k;
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
