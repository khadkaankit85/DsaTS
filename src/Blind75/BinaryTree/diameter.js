/*
Diameter of Binary Tree
The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.
The length of a path between two nodes in a binary tree is the number of edges between the nodes.
Given the root of a binary tree root, return the diameter of the tree.

Example 1:
Input: root = [1,null,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [1,2,3,5] or [5,3,2,4].
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 *
 */

//find the height at every point first
class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */

  diameterOfBinaryTree(root) {
    let result = 0;
    //returns the height
    function dfs(curr) {
      if (!curr) return 0;
      const left = dfs(curr.left);
      const right = dfs(curr.right);

      //update the value of the result
      result = Math.max(result, left + right);
      //return the height of the tree fur the calculation of the height
      return 1 + Math.max(left, right);
    }
    dfs(root);
    return result;
  }
}
