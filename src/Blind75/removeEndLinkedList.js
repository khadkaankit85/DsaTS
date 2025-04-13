/*
Remove Node From End of Linked List
You are given the beginning of a linked list head, and an integer n.
Remove the nth node from the end of the list and return the beginning of the list.
Example 1:
Input: head = [1,2,3,4], n = 2
Output: [1,2,4]
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
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    // to remove the nth node from the linkedlist, first we gotta find the nth element
    const dummy = new ListNode(0, head);
    //first pointer initiates at dummy
    let slowpointer = dummy;
    //second pointer should be n ahead of the slowpointer
    let fastpointer = dummy;

    for (let i = 0; i < n; i++) {
      fastpointer = fastpointer.next;
    }

    while (fastpointer != null) {
      fastpointer = fastpointer.next;
      slowpointer = slowpointer.next;
    }
    //remove the next element which is going to be nth element
    slowpointer.next = slowpointer.next.next;
    return dummy.next;
  }
}
