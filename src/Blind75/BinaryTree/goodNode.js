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
  goodNodes(root) {
    //lets try to traversals, first one is parent, left node and right node traversal, known as pre-order traversal
    //pass the maxvalue so far
    function dfs(node, maxSofar) {
      if (!node) return 0;
      //for the current level, current path or whatever, declare this variable
      //the scope of this result variable is
      let result = node.val >= maxSofar ? 1 : 0;
      maxSofar = Math.max(maxSofar, node.val);
      //do the same thing on the left child side
      result += dfs(node.left, maxSofar);
      //do the same thing on the right child side
      result += dfs(node.right, maxSofar);
      return result;
    }
    return dfs(root, root.val);
  }
}

// -------- RUN TEST BELOW --------
const input = [2, 1, 1, 3, null, 1, 5];
const root = buildTree(input);
const sol = new Solution();
const result = sol.goodNodes(root);
console.log("Good Nodes:", result);

// Convert array (level order) to binary tree
function buildTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}
