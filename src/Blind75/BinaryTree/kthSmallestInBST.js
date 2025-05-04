/*
Kth Smallest Integer in BST
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.
A binary search tree satisfies the following constraints:
The left subtree of every node contains only nodes with keys less than the node's key.
The right subtree of every node contains only nodes with keys greater than the node's key.
Both the left and right subtrees are also binary search trees.
Example 1:
Input: root = [2,1,3], k = 1
Output: 1
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
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    //in a bst if we do in-order traversal, left->root->right, then we get the tree in an ascending sorted array
    const store = [];
    function dfs(node) {
      if (!node) return;
      dfs(node.left);
      //we push from the most left, in-order traversal, left->root->right
      store.push(node.val);
      dfs(node.right);
    }
    dfs(root);
    const result = store.filter((item) => item !== null);
    return result[k - 1];
  }
}
