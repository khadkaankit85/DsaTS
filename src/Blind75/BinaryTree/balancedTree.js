/*
Balanced Binary Tree
Given a binary tree, return true if it is height-balanced and false otherwise.
A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
Example 1:
Input: root = [1,2,3,null,null,4]
Output: true
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
   * @return {boolean}
   */
  isBalanced(root) {
    //will return the height of the tree plus wheather it is Balanced
    function dfs(head) {
      if (!head) return [true, 0];
      const left = dfs(head.left);
      const right = dfs(head.right);
      //if both side are balanced
      let balanced = false;
      if (left[0] && right[0]) {
        // current is also balanced
        if (Math.abs(left[1] - right[1]) <= 1) {
          balanced = true;
        }
      }
      //return if balanced and height of the current tree
      return [balanced, 1 + Math.max(left[1], right[1])];
    }
    return dfs(root)[0];
  }
}
