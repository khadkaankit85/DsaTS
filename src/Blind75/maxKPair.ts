/*
 *
You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.
Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
 * */

function maxOperations(nums: number[], k: number): number {
  //store the count and occurance of a number
  let store = new Map<number, number>();
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const required = k - current;

    if (store.has(required) && store.get(required)! > 0) {
      counter++;
      store.set(required, store.get(required)! - 1);
    } else {
      store.set(current, (store.get(current) || 0) + 1);
    }
  }
  return counter;
}

console.log(maxOperations([1, 2, 3, 4], 6));
//console.log(maxOperations([3, 1, 3, 4, 3], 6));

/*
function maxOperations(nums: number[], k: number): number {
  const sorted = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let counter = 0;
  while (left < right) {
    const currentSum = sorted[left] + sorted[right];
    if (currentSum === k) {
      counter++;
      left++;
      right--;
    } else if (currentSum < k) {
      left++;
    } else if (currentSum > k) {
      right--;
    }
  }
  return counter;
}
*/
