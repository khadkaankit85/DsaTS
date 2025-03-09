/*
Trapping Rain Water
You are given an array non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
Return the maximum area of water that can be trapped between the bars.
Input: height = [0,2,0,3,1,0,1,3,2,1]
Output: 9
*/

class Solution {
  trap(height: number[]) {
    if (height.length < 3) return 0;
    let preMax = new Array(height.length);
    let postMax = new Array(height.length);
    let maxLeft = 0;
    let maxRight = 0;
    let result = 0;
    for (let i = 1; i < height.length; i++) {
      maxLeft = Math.max(maxLeft, height[i - 1]);
      preMax[i] = maxLeft;
    }
    for (let i = height.length - 2; i >= 0; i--) {
      maxRight = Math.max(maxRight, height[i + 1]);
      postMax[i] = maxRight;
    }
    for (let i = 1; i < height.length - 1; i++) {
      const waterCollected = Math.min(preMax[i], postMax[i]) - height[i];
      result += Math.max(waterCollected, 0);
    }
    return result;
  }
}
const solution = new Solution();
//let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(solution.trap(height));
