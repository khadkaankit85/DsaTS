/*
* Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.
A substring is a contiguous sequence of characters within a string.
Example 1:
Input: s = "zxyzxyz"
Output: 3
*/

class Solution {
  lengthOfLongestSubstring(s: string) {
    if (s.length < 2) return s.length;
    let firstPointer = 0;
    let secondPointer = 1;
    let maximumLength = Number.MIN_SAFE_INTEGER;
    let store = new Set();
    store.add(s[firstPointer]);
    while (secondPointer < s.length) {
      if (!store.has(s[secondPointer])) {
        store.add(s[secondPointer]);
        secondPointer++;
        maximumLength = Math.max(secondPointer - firstPointer, maximumLength);
      } else {
        store.delete(s[firstPointer]);
        firstPointer++;
      }
    }
    return maximumLength;
  }
}
const solution = new Solution();
const s = "zxyzxyz";
console.log(solution.lengthOfLongestSubstring(s));
