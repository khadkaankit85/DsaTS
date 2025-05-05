/*
Binary Tree Maximum Path Sum
Given the root of a non-empty binary tree, return the maximum path sum of any non-empty path.
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can not appear in the sequence more than once. The path does not necessarily need to include the root.
The path sum of a path is the sum of the node's values in the path.
Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxPathSum(root) {
    let result = Number.NEGATIVE_INFINITY;
    function dfs(node) {
      //find the maximum on the left and on the right
      //find the value if we could split on the current node:)
      //max of these is going to be the result
      if (!node) return 0;
      //check wheather left would return max or right would
      const leftMax = Math.max(0, dfs(node.left));
      const rightMax = Math.max(0, dfs(node.right));
      const splitPathSum = node.val + leftMax + rightMax;
      result = Math.max(result, splitPathSum);
      return node.val + Math.max(leftMax, rightMax);
    }
    dfs(root);
    return result;
  }
}
