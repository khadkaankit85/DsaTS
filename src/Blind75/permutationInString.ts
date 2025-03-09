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
  /*
   * why this didn't work? for whatever reason
  checkInclusion(s1: string, s2: string) {
    const permanentStore: Map<string, number> = new Map();
    //created the store to check for string and its count
    for (let i = 0; i < s1.length; i++) {
      permanentStore.set(s1[i], (permanentStore.get(s1[i]) || 0) + 1);
    }
    for (let i = 0; i < s2.length; i++) {
      let store = new Map(permanentStore);
      let rightPointer = i;
      const current = s2[rightPointer];
      while (
        store.has(current) &&
        store.get(current)! > 0 &&
        rightPointer < s2.length
      ) {
        store.set(current, store.get(current)! - 1);
        rightPointer++;
      }
      console.log(rightPointer, i);

      if (rightPointer - i === s1.length - 2) {
        return true;
      }
    }
    return false;
  }
  */
  checkInclusion(s1: string, s2: string) {}
}
const solution = new Solution();
let s1 = "abc",
  s2 = "lecaabee";
console.log(solution.checkInclusion(s1, s2));
