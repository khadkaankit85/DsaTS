/*
Count Good Nodes in Binary Tree
Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x
Given the root of a binary tree root, return the number of good nodes within the tree.
Example 1:
Input: root = [2,1,1,3,null,1,5]
Output: 3
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
  goodNodes(root) {
    function dfs(node, maxSofar) {
      // base case: if the root is null then the count of good node will be retured 0
      if (!node) return 0;

      //for this path, the value of good is 0 or 1 depending upont hte value of the root
      let good = node.val >= maxSofar ? 1 : 0;
      maxSofar = Math.max(maxSofar, node.val);
      good += dfs(node.left, maxSofar);
      good += dfs(node.right, maxSofar);
      return good;
    }
    return dfs(root, root.val);
  }
}
