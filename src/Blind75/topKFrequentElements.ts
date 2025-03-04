/*
 *Given an integer array nums and an integer k, return the k most frequent elements within the array.
 *The test cases are generated such that the answer is always unique.
 *You may return the output in any order.
 *Example 1:
 *Input: nums = [1,2,2,3,3,3], k = 2
 *Output: [2,3]
 */

//easiest solution is to get the count of all the numbers, make an array from that and then sort and return n number from that array
class Solution {
  topKFrequent(nums: number[], k: number): number[] {
    const counter: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
      counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    }

    /*
     * this approach is wrong, because we are using fill, which reuses  the same memory reference, so modifying one will modify all the filled elements
    const filledArray: number[][] = Array(nums.length).fill(
      Array(0).fill(null),
    );
    */
    const filledArray: number[][] = Array(nums.length).map(() => []);

    counter.forEach((currentNumberCount, currentKeyOrIndex) => {
      /*console.log(filledArray);
      console.log(
        "the current count is ",
        currentNumberCount,
        " for the number ",
        currentKeyOrIndex,);
      */
      if (!filledArray[currentNumberCount - 1]) {
        filledArray[currentNumberCount - 1] = [];
      }
      filledArray[currentNumberCount - 1].push(currentKeyOrIndex);
    });
    const result = [];
    for (let i = filledArray.length - 1; i >= 0; i--) {
      let currentArr = filledArray[i];
      if (currentArr) {
        for (const num of currentArr) {
          if (result.length >= k) {
            break;
          } else {
            result.push(num);
          }
        }
        if (result.length >= k) {
          break;
        }
      }
    }

    return result;
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 2, 2, 3, 3, 3], 2));
