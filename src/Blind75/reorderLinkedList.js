/*
Reorder Linked List
You are given the head of a singly linked-list.
The positions of a linked list of length = 7 for example, can intially be represented as:
[0, 1, 2, 3, 4, 5, 6]
Reorder the nodes of the linked list to be in the following order:
[0, 6, 1, 5, 2, 4, 3]
Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
[0, n-1, 1, n-2, 2, n-3, ...]
You may not modify values in the list's nodes, but instead you must reorder the nodes themselves.
Example 1:
Input: head = [2,4,6,8]
Output: [2,8,4,6]*/

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
   * @return {void}
   */
  reorderList(head) {
    const headOf1st = head;

    //middle of the list
    let slow = head;
    //end of the list
    let fast = head;

    while (fast?.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    //the list has been split to two
    const headOf2nd = slow.next;
    slow.next = null;
    //now we are supposed to reverse the second linked list, which starts at headOf2nd

    const headOfReversed = this.reverse(headOf2nd);

    const ans = this.merge(headOf1st, headOfReversed);
    return ans;
  }

  reverse(head) {
    let prev = null;
    let current = head;
    while (current != null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  //returns the head of the newly merged linked-list
  merge(head1, head2) {
    let first = head1.next;
    let second = head2;

    let result = head1;
    const ans = result;
    while (first || second) {
      if (second) {
        result.next = second;
        second = second.next;
        result = result.next;
      }
      if (first) {
        result.next = first;
        result = result.next;
        first = first.next;
      }
    }
    return ans;
  }
}
