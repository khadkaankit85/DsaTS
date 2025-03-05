/*
 *Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
Example 1: Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
 */

class Solution {
  threeSum(nums: number[]) {
    const numbers = nums.sort((a, b) => a - b);
    let result: number[][] = [];
    for (let i = 0; i < numbers.length - 2; i++) {
      let left = i + 1;
      let right = numbers.length - 1;
      if (i > 0 && numbers[i] === numbers[i - 1]) {
        continue;
      }
      while (left < right) {
        const sum = numbers[left] + numbers[right] + numbers[i];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          const temp = [numbers[i], numbers[left], numbers[right]];
          result.push(temp);
          left++;
          right--;
          while (left < right && numbers[left] === numbers[left + 1]) left++;
          while (left < right && numbers[right] === numbers[right - 1]) right--;
        }
      }
    }
    return result;
  }
}
const solution = new Solution();
const nums = [-1, 0, 1, 2, -1, -4];

//const nums = [-4,-1,-1, 0, 1, 2];
console.log(solution.threeSum(nums));
