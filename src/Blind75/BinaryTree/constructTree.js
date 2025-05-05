/*
Construct Binary Tree from Preorder and Inorder Traversal
You are given two integer arrays preorder and inorder.
preorder is the preorder traversal of a binary tree
inorder is the inorder traversal of the same tree
Both arrays are of the same size and consist of unique values.
Rebuild the binary tree from the preorder and inorder traversals and return its root.
Example 1:
Input: preorder = [1,2,3,4], inorder = [2,1,3,4]
Output: [1,2,3,null,null,null,4]
/*
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
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   */
  buildTree(preorder, inorder) {
    //if no preorder and inorder, then return
    if (!preorder.length || !inorder.length) return null;
    //first element of preorder is always going to be the root
    const root = new TreeNode(preorder[0]);
    //divider devides what is going to be on the left of the current root and what is going to be on the right of the current node using inorder traversal
    //note:anything on the left of the current node in inorder traversal will go on the left and anything that is on the right side will go on the right side
    const divider = inorder.indexOf(preorder[0]);
    //1 to divider +1 will go on the left of the current node, or root
    root.left = this.buildTree(
      preorder.slice(1, divider + 1),
      inorder.slice(0, divider),
    );
    root.right = this.buildTree(
      preorder.slice(divider + 1),
      inorder.slice(divider + 1),
    );
    return root;
  }
}
