/*
Longest Substring Without Repeating Characters
Medium
Topics
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
  let result = 0;
  const map = new Map();
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }

    map.set(char, end);
    result = Math.max(result, end - start + 1);
  }

  return result;
}
