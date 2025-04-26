/*Same Binary Tree
Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.
Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.
Example 1:
Input: p = [1,2,3], q = [1,2,3]
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

class Solution1 {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  //convert both into an array, then compare if both are deepEqual
  isSameTree(p, q) {
    const first = this.getArrayFromNode(p);
    const second = this.getArrayFromNode(q);
    return this.areEqualArrays(first, second);
  }
  getArrayFromNode(head) {
    const arr = [];
    function dfs(root) {
      if (!root) {
        arr.push(null);
        return;
      }
      arr.push(root.val);
      dfs(root.left);
      dfs(root.right);
    }
    dfs(head);
    return arr;
  }
  areEqualArrays(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}

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
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    //if both head are null
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    //check if both left and right are true and return that, because thats for the child node
    return this.isSameTree(p.left, q.left) && this.isSameTree(q.right, p.right);
  }
}
