/*
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
Example 1:
Input: head = [0,1,2,3]
Output: [3,2,1,0]
*/

class ListNode {
  val
  next: ListNode | null
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  reverseList(head: ListNode | null) {
    let prev = null
    let current = head
    if (!current) return current
    while (current) {
      const next: ListNode | null = current.next
      current.next = prev
      prev = current
      current = next
    }
    return prev
  }
}
