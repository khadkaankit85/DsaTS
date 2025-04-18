/*
Reverse Linked List
Solved 
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
Example 1:
Input: head = [0,1,2,3]
Output: [3,2,1,0]
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
	 * @return {ListNode}
	 */
	reverseList(head) {
		let current = head;
		let prev = null;
		while (current) {
			const next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return prev;
	}
}
