/*
You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.
Example 1:
Input: root = [1,2,3]
Output: [1,3]
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

//approach is to level order traversal and only push the rightmost value of the current level
class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  rightSideView(root) {
    //init the result arr
    const result = [];

    //if no root, then return mate
    if (!root) return [];
    //initialing a queue for level order traversal
    const q = [root];
    //while we have node in the queue
    while (q.length) {
      //a var to store the value for current queue length
      const temp = [];
      const length = q.length;
      //go throught the current arr for the initial length times, length before the queue was modified
      for (let i = 0; i < length; i++) {
        //get the first element
        const current = q.shift();
        //we can push the current directly in the temp arr, because current is never going to be null, why? because we don't push null
        temp.push(current);
        if (current.left) {
          q.push(current.left);
        }
        if (current.right) {
          q.push(current.right);
        }
      }
      const rightMostElement = temp[temp.length - 1];
      if (rightMostElement) {
        result.push(rightMostElement.val);
      }
    }
    return result;
  }
}
