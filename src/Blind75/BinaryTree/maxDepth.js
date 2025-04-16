/*
Maximum Depth of Binary Tree
Given the root of a binary tree, return its depth.
The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.
Example 1:
Input: root = [1,2,3,null,null,4]
Output: 3*
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {
    //find the depth of the left
    //find the depth of the right
    //max of both is the depth of the tree
    if (!root) return 0;
    const left = 1 + this.maxDepth(root.left);
    const right = 1 + this.maxDepth(root.right);
    return Math.max(left, right);
  }
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));

const sol = new Solution();
console.log("Max Depth:", sol.maxDepth(tree));
