/*
Merge Two Sorted Linked Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
The new list should be made up of nodes from list1 and list2.
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]
*/
//   Definition for singly-linked list.
//@ts-nocheck
// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val: number = 0, next: ListNode | null = null) {
		this.val = val;
		this.next = next;
	}
}

class Solution {
	mergeTwoLists(
		list1: ListNode | null,
		list2: ListNode | null,
	): ListNode | null {
		// Create a dummy node to serve as the starting point
		const dummy = new ListNode();
		let current = dummy;

		while (list1 && list2) {
			if (list1.val <= list2.val) {
				current.next = list1;
				list1 = list1.next;
			} else {
				current.next = list2;
				list2 = list2.next;
			}
			current = current.next;
		}

		// Attach the remaining elements
		current.next = list1 || list2;

		return dummy.next;
	}
}

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
	let head: ListNode | null = null;
	let tail: ListNode | null = null;

	for (const val of arr) {
		const newNode = new ListNode(val);
		if (!head) {
			head = newNode;
			tail = head;
		} else {
			tail!.next = newNode;
			tail = newNode;
		}
	}

	return head;
}

// Helper function to print a linked list
function printList(head: ListNode | null): string {
	const result: number[] = [];
	let current = head;
	while (current) {
		result.push(current.val);
		current = current.next;
	}
	return result.join(" -> ");
}

// Test the solution
const solution = new Solution();
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 5]);

console.log("List 1:", printList(list1));
console.log("List 2:", printList(list2));

const mergedList = solution.mergeTwoLists(list1, list2);
console.log("Merged List:", printList(mergedList));
