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
      if (!node) return 0;
      //calc the value that it can return and calc the value if it doesn't have to return
      const leftSum = dfs(node.left);
      const rightSum = dfs(node.right);
      const canReturnToParent = node.val + Math.max(leftSum, rightSum);
      //if the current node doesn't need to return any value and it can branch out from itself to the left and to the right
      const ifNoReturn =
        node.val + Math.max(0, leftSum) + Math.max(0, rightSum);
      result = Math.max(result, ifNoReturn);
      return Math.max(canReturnToParent, 0);
    }
    dfs(root);
    return result;
  }
}
