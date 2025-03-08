/*
 *Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
Example 1: Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
 */

class Solution {
  /* why this approach is wrong, it doesn't handle the case when its three continuous nums, e.g [0,0,0,0]
  threeSum(nums: number[]) {
    let numbers = nums.sort((a, b) => a - b);
    let result = [];
    //[-4,-1,0,1,2]
    for (let i = 0; i < numbers.length - 2; i++) {
      const rqNum = 0 - (numbers[i] + numbers[i + 1]);

      console.log("req num is", rqNum);

      let pointer = i + 2;
      while (pointer < numbers.length && numbers[pointer] <= rqNum) {
        if (numbers[pointer] === rqNum) {
          result.push([numbers[i], numbers[i + 1], numbers[pointer]]);
        }
        pointer++;
      }
    }
    return result;
  }
  */
  threeSum(num: number[]) {
    let numbers = num.sort((a, b) => a - b);
    let result = [];
    //[-4,-1,0,0,0,0,1,2]
    for (let i = 0; i < numbers.length; i++) {
      //num1+num2+num3=0
      //so, we have to find num2 and num3 such that, they sum up to num1

      //to skip te duplicate numbers
      if (i > 0 && numbers[i] === numbers[i - 1]) continue;
      let target = -numbers[i];
      let left = i + 1;
      let right = numbers.length - 1;
      while (left < right) {
        //if its a duplicate num
        //comparing sum with the target (numbers[i])
        let currentSum = numbers[left] + numbers[right];
        if (currentSum === target) {
          result.push([numbers[i], numbers[left], numbers[right]]);
          left++;
          right--;
          while (left < right && numbers[left] === numbers[left - 1]) left++;
          while (left < right && numbers[right] === numbers[right + 1]) right--;
        } else if (currentSum < target) {
          //if the num is smaller than targer, then make the num larger by moving left pointer to the right
          left++;
        } else {
          //if the target is  greater than num, then decrease num by moving the right pointer
          right--;
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
