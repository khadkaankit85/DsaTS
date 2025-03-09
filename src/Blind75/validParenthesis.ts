/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.
 * */

class Solution {
  isValid(s: string) {
    let stack: string[] = [];
    let parenthesisCouple = new Map([
      ["}", "{"],
      [")", "("],
      ["]", "["],
    ]);

    for (let i = 0; i < s.length; i++) {
      if (!parenthesisCouple.has(s[i])) {
        stack.push(s[i]);
      } else {
        const popped = stack.pop();
        if (parenthesisCouple.get(s[i]) != popped) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}

const s = "([{}])";
const solution = new Solution();
console.log(solution.isValid(s));
