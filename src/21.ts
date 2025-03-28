/**
 *  21. Merge Two Sorted Lists
 *  https://leetcode.com/problems/merge-two-sorted-lists/description/
 *  Easy
 *
 * Merge two sorted linked lists and return the head of the merged linked list
 *
 * Algorithm: Iterative approach to merge two sorted linked lists
 * Time Complexity: O(n+m) where n and m are the lengths of list1 and list2
 * Space Complexity: O(1) since we're reusing the existing nodes
 *
 * @param {ListNode | null} list1 - The head of the first sorted linked list
 * @param {ListNode | null} list2 - The head of the second sorted linked list
 * @return {ListNode | null} - The head of the merged sorted linked list
 */

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const preHead = new ListNode()
  let tail = preHead

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }
    tail = tail.next
  }

  if (list1) tail.next = list1
  if (list2) tail.next = list2

  return preHead.next
}

export { mergeTwoLists, ListNode }
