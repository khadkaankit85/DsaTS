/*
 * You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
Example 1:
Input: prices = [10,1,5,6,7,1]
Output: 6
*/
class Solution {
  maxProfit(prices: number[]) {
    let maximumProfit = Number.MIN_SAFE_INTEGER;
    let lowestPrice = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < prices.length; i++) {
      lowestPrice = Math.min(lowestPrice, prices[i]);
      const currentProfit = prices[i] - lowestPrice;
      maximumProfit = Math.max(currentProfit, maximumProfit);
    }
    return maximumProfit;
  }
}
const solution = new Solution();
const prices = [10, 1, 5, 6, 7, 1];
console.log(solution.maxProfit(prices));
