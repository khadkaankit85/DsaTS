/*
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 *  An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 */

class Solution {
  isAnagram(s: string, t: string) {
    if (s.length !== t.length) return false;

    let firstHash = new Map();

    for (let letter of s) {
      firstHash.set(letter, (firstHash.get(letter) || 0) + 1);
    }
    for (let letter of t) {
      if (!firstHash.has(letter) || firstHash.get(letter) < 1) {
        return false;
      }
      firstHash.set(letter, firstHash.get(letter) - 1);
    }

    return true;
  }
}

const solution = new Solution();
console.log(solution.isAnagram("listen", "silent")); // true
console.log(solution.isAnagram("rat", "car")); // false
console.log(solution.isAnagram("a", "b")); // false
console.log(solution.isAnagram("anagram", "nagaram")); // true
