/*
 *Given a string s, return true if it is a palindrome, otherwise return false.
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
Example 1:
Input: s = "Was it a car or a cat I saw?"
Output: true
 */
class Solution {
  isPalindrome(s: string) {
    const set = new Set("abcdefghijklmnopqrstuvwxyz1234567890");
    const newStr = s.toLowerCase();
    let left = 0;
    let right = newStr.length - 1;
    while (left <= right) {
      console.log(1);

      if (set.has(newStr[left])) {
        console.log(2);

        if (set.has(newStr[right])) {
          console.log(3);
          if (!(newStr[left] === newStr[right])) {
            console.log(4);
            return false;
          } else {
            left++;
            right--;
          }
        } else {
          right--;
        }
      } else {
        left++;
      }
    }
    return true;
  }
}
const solution = new Solution();
const s = "Was it a car or a cat I saw?";

console.log(solution.isPalindrome(s));
