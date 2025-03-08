/*
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Please implement encode and decode
Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]
 * */

class Solution {
  encode(strs: string[]) {
    if (strs.length < 1) return "";
    let result = "";
    for (let i = 0; i < strs.length; i++) {
      let current = strs[i];
      result += current.length + "#" + current;
    }
    return result;
  }

  decode(str: string) {
    let i = 0;
    let result = [];
    while (i < str.length) {
      let j = i;
      while (str[j] != "#") {
        j++;
      }
      let length = parseInt(str.slice(i, j));
      i = j + 1;
      if (length === 0) {
        result.push("");
        continue;
      }
      let currentString = str.slice(i, i + length);
      result.push(currentString);
      i = i + length;
    }
    return result;
  }
}

const solution = new Solution();
const strs = ["neet", "code", "love", "you"];
const encrypted = solution.encode(strs);
console.log(encrypted);
console.log(solution.decode(encrypted));
