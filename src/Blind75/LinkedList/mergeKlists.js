/*
Merge K Sorted Linked Lists
You are given an array of k linked lists lists, where each list is sorted in ascending order.
Return the sorted linked list that is the result of merging all of the individual linked lists.
Example 1:
Input: lists = [[1,2,4],[1,3,5],[3,6]]
Output: [1,1,2,3,3,4,5,6]
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

// how to do it?? merge only two linked lists at a time, use recursion to solve it

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    //if the length of the lists is 0
    if (lists.length === 0) return null;
    //if the length is 1
    if (lists.length === 1) return lists[0];

    //find the mid
    const mid = Math.floor(lists.length / 2);
    //call itself on left
    const left = this.mergeKLists(lists.slice(0, mid));
    //call itself on the right side
    const right = this.mergeKLists(lists.slice(mid, lists.length));

    //merges the result of each other
    return this.mergeTwoLists(left, right);
  }
  mergeTwoLists(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    const dummy = new ListNode();
    let tail = dummy;

    //if we have both pointers
    while (p1 && p2) {
      //if the first pointer is pointing to the smaller value
      if (p1.val < p2.val) {
        //point the tail node to the first as thats the smaller one
        tail.next = p1;
        //move the pointer 1 to the next place
        p1 = p1.next;
        //if the second-one is pointing to the smaller value
      } else {
        //point the tail to the second pointer
        tail.next = p2;
        //move the second pointer
        p2 = p2.next;
      }
      //move the pointer to the next node
      tail = tail.next;
    }
    //if one of the linked list is shorter
    if (p1) {
      tail.next = p1;
    }
    if (p2) {
      tail.next = p2;
    }

    return dummy.next;
  }
}
