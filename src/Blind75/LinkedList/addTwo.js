/*
Add Two Numbers
You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.
The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.
Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Return the sum of the two numbers as a linked list.
Example 1:
Input: l1 = [1,2,3], l2 = [4,5,6]
Output: [5,7,9]
Explanation: 321 + 654 = 975.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    const dummy = new ListNode(); // dummy head
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
      const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }

    return dummy.next;
  }
}
