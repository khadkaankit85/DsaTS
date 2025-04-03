/* There is an integer array nums sorted in ascending order (with distinct values).
 Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
*/

function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Check if the middle element is the target
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which side is sorted
    if (nums[start] <= nums[mid]) {
      // Left side is sorted
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1; // Target is in the sorted left side
      } else {
        start = mid + 1; // Target is in the right side
      }
    } else {
      // Right side is sorted
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1; // Target is in the sorted right side
      } else {
        end = mid - 1; // Target is in the left side
      }
    }
  }

  return -1; // Target not found
}

// Example usage
let myarr = [6, 7, 9, 0, 2, 4, 5];
let target = 2;
console.log(search(myarr, target)); // Output: 4
