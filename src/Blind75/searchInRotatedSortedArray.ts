/*
Search in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.
You may assume all elements in the sorted rotated array nums are unique,
A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?
Example 1:
Input: nums = [3,4,5,6,1,2], target = 1
Output: 4
*/
//the logic is to constantly keep looking for which side to binary search

class Solution {
  search(nums: number[], target: number) {}
}

const solution = new Solution();
const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
console.log(solution.search(nums, target));
