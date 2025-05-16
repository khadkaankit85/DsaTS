/*
Design Add and Search Word Data Structure
Design a data structure that supports adding new words and searching for existing words.
Implement the WordDictionary class:
void addWord(word) Adds word to the data structure.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
Example 1:
Input:
["WordDictionary", "addWord", "day", "addWord", "bay", "addWord", "may", "search", "say", "search", "day", "search", ".ay", "search", "b.."]
Output:
[null, null, null, null, false, true, true, true]
Explanation:
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("day");
wordDictionary.addWord("bay");
wordDictionary.addWord("may");
wordDictionary.search("say"); // return false
wordDictionary.search("day"); // return true
wordDictionary.search(".ay"); // return true
wordDictionary.search("b.."); // return true
Constraints:
*/

class Word {
  constructor() {
    this.isEndOfAnWord = false;
    this.childrens = new Map();
  }
}

class WordDictionary {
  constructor() {
    this.root = new Word();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let curr = this.root;
    for (const letter of word) {
      if (!curr.childrens.has(letter)) {
        curr.childrens.set(letter, new Word());
      }
      curr = curr.childrens.get(letter);
    }
    curr.isEndOfAnWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    //pass the root node to start looking for, and then the word we serach and then the index
    return dfs(this.root, word, 0);

    function dfs(node, word, index) {
      //base case: if we have successfully processed all the words
      //this means we have gone through a path in our trienode
      if (index === word.length) {
        return node.isEndOfAnWord;
      }

      //get the current character from the word we are searching for
      const char = word[index];
      //current character that we are searching for is a wildcard
      if (char === ".") {
        //for wildcard, we gotta call the function itself for all of its childrens
        //each childnode represents the a potential match for wildcard "."
        for (const childNode of node.childrens.values()) {
          //recursively call itself on all of the childrens of the current node, move to the next charcter with index+1
          //if any one of the recursive call returns true, then we found the word that we searched for so return true
          if (dfs(childNode, word, index + 1)) {
            return true;
          }
        }
        //if went through all the childrens of the current node and none returrned true, then return false as we have gone through all the paths
        return false;
      }
      //if that was just a regular character
      if (node.childrens.has(char)) {
        //if the child exists for this character and keep looking in its childen  recursively
        return dfs(node.childrens.get(char), word, index + 1);
      }
      return false;
    }
  }
}
