/*
Serialize and Deserialize Binary Tree
Implement an algorithm to serialize and deserialize a binary tree.
Serialization is the process of converting an in-memory structure into a sequence of bits so that it can be stored or sent across a network to be reconstructed later in another computer environment.
You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. There is no additional restriction on how your serialization/deserialization algorithm should work.
Note: The input/output format in the examples is the same as how NeetCode serializes a binary tree. You do not necessarily need to follow this format.

Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
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
//approach:
//Serialize: first traverse the tree, then make the string and then done
//Deserialize: convert the string into an array, and then convert that into a tree

class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    function dfs(node) {
      if (!node) return "null";
      const leftSide = dfs(node.left);
      const rightSide = dfs(node.right);
      const data = `{"${node.val}":{"left":${leftSide},"right":${rightSide}}}`;
      return data;
    }

    return dfs(root);
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    if (!data) return null;
    const parsedData = JSON.parse(data);
    function rec(arr) {
      if (!arr) return null;
      const key = Object.keys(arr)[0];
      const obj = arr[key];
      if (!key || key == null) {
        return null;
      }
      const root = new TreeNode();
      root.val = Number.parseInt(key);
      root.left = rec(obj.left);
      root.right = rec(obj.right);
      return root;
    }
    return rec(parsedData);
  }
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// Run serialize
const sol = new Codec();
const serialized = sol.serialize(root);
const deserialized = sol.deserialize(serialized);

//console.log(serialized);
console.log(deserialized);
