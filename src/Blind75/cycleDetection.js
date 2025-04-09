/*
 * ;Linked List Cycle Detection
Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
Note: index is not given to you as a parameter.
Example 1:
Input: head = [1,2,3,4], index = 1
Output: true
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
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle2(head) {
    //init two pointers, one fast and one slow
    let fastPointer = head;
    let slowpointer = head;
    while (fastPointer?.next) {
      fastPointer = fastPointer.next.next;
      slowpointer = slowpointer.next;
      if (slowpointer === fastPointer) return true;
    }
    return false;
  }

  /**
   * @param {ListNode} head
   * @return {boolean}
   */

  hasCycle(head) {
    //init two pointers, one fast and one slow
    const seen = new Set();
    while (head.next) {
      const current = head.next;
      if (seen.has(current)) return true;
      seen.add(current);
      head = head.next;
    }
    return false;
  }
}
