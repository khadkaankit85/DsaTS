/*
Kth Largest Element in an Array
Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.
By kth largest element, we mean the kth largest element in the sorted order, not the kth distinct element.
Follow-up: Can you solve it without sorting?
*/

//create a heap from the given array and pop k times, as easy as that
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let sorted = nums.sort((a, b) => a - b)
  return nums[nums.length - k];
};
