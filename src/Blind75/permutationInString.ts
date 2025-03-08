/*
Permutation in String
You are given two strings s1 and s2.
Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
Both strings only contain lowercase letters.
Example 1:
Input: s1 = "abc", s2 = "lecabee"
Output: true
 */

class Solution {
  checkInclusion(s1: string, s2: string) {
    let s2Arr = s2.split("");
    let secondPointer = s2.length;
    let currentTempSubString = "";
    if (s1.length > s2.length) return false;
    for (let i = 0; i < s1.length; i++) {
      currentTempSubString += s2[i];
    }
    while (secondPointer < s2Arr.length) {}
  }
}
