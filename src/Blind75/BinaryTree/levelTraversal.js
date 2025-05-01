/*Binary Tree Level Order Traversal
Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.
Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [[1],[2,3],[4,5,6,7]]
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
   * @return {number[][]}
   */
  levelOrder(root) {
    if (!root) return [];
    const result = [];
    //this pops the current level everytime and then pushes the next level
    const stack = [];
    stack.push(root);

    //temp to keep track of the current level, so i push only the current level to this ok
    while (stack.length) {
      const temp = [];
      const length = stack.length;
      //careful when using for loops here, because it mutates the array directly and can cause unexpected behaviour if not done correctly
      for (let i = 0; i < length; i++) {
        const node = stack.shift();
        //remove the first element of the stack
        //push the current node to the temp
        temp.push(node.val);
        //if have children. push that to the stack for the next round
        if (node.left) {
          stack.push(node.left);
        }
        if (node.right) {
          stack.push(node.right);
        }
      }
      //at this point, temp should have all the values of the current level
      result.push(temp);
    }

    return result;
  }
}
