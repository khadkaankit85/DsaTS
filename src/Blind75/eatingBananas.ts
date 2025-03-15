/*
*Koko Eating Bananas
You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
Return the minimum integer k such that you can eat all the bananas within h hours.
Input: piles = [1,4,3,2], h = 9
Example 1:
Output: 2
*/

class Solution {
  minEatingSpeed(piles: number[], h: number) {
    let k = Math.max(...piles); //O(n) time
    let left = 1;
    let right = k;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      let totalTime = 0;
      for (const banana of piles) {
        totalTime += Math.ceil(banana / mid);
      }
      if (totalTime <= h) {
        k = Math.min(k, mid);
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return k;
  }
}

const solution = new Solution();
const piles = [1, 4, 3, 2],
  h = 9;
console.log(solution.minEatingSpeed(piles, h));
