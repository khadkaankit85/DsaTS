/*
 *Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
Note: index is not given to you as a parameter.
Example 1:
Input: head = [1,2,3,4], index = 1
Output: true
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val = 0, next: ListNode | null = null) {
		this.val = val;
		this.next = next;
	}
}

class Solution {
	hasCycle(head: ListNode | null): boolean {
		if (!head || !head.next) return false;

		let slow: ListNode | null = head;
		let fast: ListNode | null = head.next;

		while (slow !== fast) {
			if (!fast || !fast.next) return false;
			if (slow) {
				slow = slow.next;
			}
			fast = fast.next.next;
		}

		return true;
	}
}
