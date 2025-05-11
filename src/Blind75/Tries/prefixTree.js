/*
Implement Trie (Prefix Tree)
A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the PrefixTree class:

PrefixTree() Initializes the prefix tree object.
void insert(String word) Inserts the string word into the prefix tree.
boolean search(String word) Returns true if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
Example 1:

Input: 
["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

Output:
[null, null, true, false, true, null, true]

Explanation:
PrefixTree prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");    // return true
prefixTree.search("do");     // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do");     // return true
*/

class TrieNode {
  constructor() {
    this.isEndOfAWord = false;
    this.childrens = new Map();
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;
    for (const letter of word) {
      if (!curr.childrens.has(letter)) {
        curr.childrens.set(letter, new TrieNode());
      }
      curr = curr.childrens.get(letter);
    }
    curr.isEndOfAWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let curr = this.root;
    for (const letter of word) {
      if (!curr.childrens.has(letter)) {
        return false;
      }
      curr = curr.childrens.get(letter);
    }
    return curr.isEndOfAWord === true;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */

  startsWith(prefix) {
    let curr = this.root;
    for (const letter of prefix) {
      if (!curr.childrens.has(letter)) {
        return false;
      }
      curr = curr.childrens.get(letter);
    }
    return true;
  }
}
