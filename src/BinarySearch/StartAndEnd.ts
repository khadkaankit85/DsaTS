/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
*/
function searchRange(nums: number[], target: number): number[] {
  let result = [-1, -1];
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] == target) {
      let left = mid;
      while (nums[left] == target) {
        result[0] = left;
        left--;
      }

      let right = mid;
      while (nums[right] == target) {
        result[1] = right;
        right++;
      }
      return result;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return result;
}
let myarr = [1, 2, 3, 5, 6, 6, 6, 7];
console.log(searchRange(myarr, 6));
