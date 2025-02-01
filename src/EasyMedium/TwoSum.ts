/*
 *Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *You can return the answer in any order.
 */

// brute force
function twoSumBrute(nums: number[], target: number): number[] {
  //map over the element, for each element, try to add it to another element and then  check the sum, if the sum is the target, then return the indices
  let firstIn = -1;
  let secondIn = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        firstIn = i;
        secondIn = j;
      }
    }
  }
  return [firstIn, secondIn];
}

const nums = [2, 7, 11, 15];
twoSumBrute(nums, 9);

function twoSum(nums: number[], target: number): number[] {
  let hashmap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let numNeeded = target - nums[i];
    if (hashmap.has(numNeeded)) {
      return [hashmap.get(numNeeded)!, i];
    }
    hashmap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum(nums, 9));
