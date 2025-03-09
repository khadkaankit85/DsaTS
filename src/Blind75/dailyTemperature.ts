/*
 You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.
Example 1:
Input: temperatures = [30,38,30,36,35,40,28]
Output: [1,4,1,2,1,0,0]
 */

class Solution {
  dailyTemperatures(temperatures: number[]) {
    let result = Array.from({ length: temperatures.length }, () => 0);
    let stack: number[][] = [];

    stack.push([temperatures[0], 0]);

    for (let i = 1; i < temperatures.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
        const indexOfElementOnTheTopOfTheStack = stack[stack.length - 1][1];
        result[indexOfElementOnTheTopOfTheStack] =
          i - indexOfElementOnTheTopOfTheStack;
        stack.pop();
      }
      stack.push([temperatures[i], i]);
    }
    return result;
  }
}
const solution = new Solution();
let temperatures = [30, 38, 30, 36, 35, 40, 28];
console.log(solution.dailyTemperatures(temperatures));
