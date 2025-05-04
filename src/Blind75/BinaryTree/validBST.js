/*
Valid Binary Search Tree
Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.
A valid binary search tree satisfies the following constraints:
The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.
Example 1:
Input: root = [2,1,3]
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
  isValidBST(root) {
    //Solution is to depth first search, in which we process the parent node first and then left child or right child in any order:), this is called pre-order traversal
    //for every node, we check if its in the limit of left and right
    function validate(node, left, right) {
      //no node is true, because it is true:)
      if (!node) return true;
      if (!(node.val < right && node.val > left)) {
        return false;
      }
      //pass the left limit and right limit for each
      return (
        validate(node.left, left, node.val) &&
        validate(node.right, node.val, right)
      );
    }
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  }
}
