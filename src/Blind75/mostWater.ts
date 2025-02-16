/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

  */
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(currentArea, max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
