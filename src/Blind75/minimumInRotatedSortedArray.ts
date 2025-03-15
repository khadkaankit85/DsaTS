/*
*Find Minimum in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.
Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.
A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?
Example 1:
Input: nums = [3,4,5,6,1,2]
Output: 1
*/

class Solution {
  findMin(nums: number[]) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < nums[mid - 1]) {
        return nums[mid];
      } else if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return nums[0];
  }
}
const solution = new Solution();
const nums = [3, 4, 5, 6, 1, 2];
console.log(solution.findMin(nums));
