/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.
 */
function singleNonDuplicate(nums: number[]): number {
  // the idea is that the side with the result will always be odd
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor(start + (end - start) / 2);

  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);

    if (mid % 2 == 1) {
      mid--;
    }
    if (nums[mid] === nums[mid + 1]) {
      start = mid + 2;
    } else {
      end = mid;
    }
  }
  return nums[start];
}
let myarr = [1, 1, 2, 3, 3, 4, 4, 5, 5];
console.log(singleNonDuplicate(myarr));
