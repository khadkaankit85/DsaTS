/*
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Please implement encode and decode
Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]
 * */

class Solution {
  encode(strs: string[]) {
    let result = "";
    for (let i = 0; i < strs.length; i++) {
      result += strs[i] + "####";
    }
    return result;
  }

  decode(str: string) {
    let result = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] != "####") {
        temp += str[i];
      } else {
        result.push(temp);
        temp = "";
      }
    }
    return result;
  }
}

const solution = new Solution();
