/*Lowest Common Ancestor in Binary Search Tree
Given a binary search tree (BST) where all node values are unique, and two nodes from the tree p and q, return the lowest common ancestor (LCA) of the two nodes.
The lowest common ancestor between two nodes p and q is the lowest node in a tree T such that both p and q as descendants. The ancestor is allowed to be a descendant of itself.
Example 1:
Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
Output: 5
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
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  //how to solve it? This is a BST problem
  lowestCommonAncestor(root, p, q) {
    let curr = root;
    //while we have the current/root
    while (curr) {
      //if both are on the left side from BST properties
      if (curr.val > p.val && curr.val > q.val) {
        curr = curr.left;
        //if both are on the left side
      } else if (curr.val < p.val && curr.val < q.val) {
        curr = curr.right;
        //if both are on the different sides
      } else {
        return curr;
      }
    }
  }
}
