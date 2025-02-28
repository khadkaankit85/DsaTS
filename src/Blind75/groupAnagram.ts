/* Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 */

class Solution {
  groupAnagrams(strs: string[]): string[][] {
    let memory: Map<string, string[]> = new Map();
    let result: string[][] = [];
    for (let str in strs) {
      const current = strs[str];
      const currentSorted = current.split("").sort().join("");
      if (memory.has(currentSorted)) {
        const inMemory = memory.get(currentSorted)!;
        inMemory.push(current);
        memory.set(currentSorted, inMemory);
      } else {
        memory.set(currentSorted, [current]);
      }
    }
    memory.forEach((value, _key) => {
      result.push(value);
    });
    console.log(result);

    return result;
  }
}

const solution = new Solution();
let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
solution.groupAnagrams(strs);
