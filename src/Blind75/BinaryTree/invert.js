/*
Invert Binary Tree
You are given the root of a binary tree root. Invert the binary tree and return its root.
Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,3,2,7,6,5,4]
*/
/** Definition for a binary tree node.
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
   * @return {TreeNode}
   */
  invertTree(root) {
    //store the ref to the right because we are gonna change it ok
    if (!node) return null;
    const temp = root.right;
    root.right = root.left;
    root.left = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);
    return root;
  }
}
