/*
Longest Repeating Character Replacement
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
Example 1:
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.
*/

class Solution {
  characterReplacement(s: string, k: number) {
    let store: Map<string, number> = new Map();
    let maxFrequency = 0;
    let leftPointer = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      store.set(s[i], (store.get(s[i]) || 0) + 1);
      maxFrequency = Math.max(maxFrequency, store.get(s[i]) || 0);
      //if the letter is not valid to put as a substring
      if (i - leftPointer + 1 - maxFrequency > k) {
        store.set(s[leftPointer], store.get(s[leftPointer])! - 1);
        leftPointer++;
      }
      result = Math.max(i - leftPointer + 1, result);
    }
    return result;
  }
}
const solution = new Solution();
let s = "XYYX";
let k = 2;

console.log(solution.characterReplacement(s, k));
