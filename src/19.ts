/**
 *  19. Remove Nth Node From End of List
 *  https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *  Medium
 *
 * Removes the nth node from the end of a linked list and returns its head.
 *
 * Algorithm: Two-pointer approach
 * Time Complexity: O(n) where n is the length of the linked list
 * Space Complexity: O(1) as we only use constant extra space
 *
 * @param {ListNode | null} head - The head of the linked list
 * @param {number} n - The position from the end of the list of the node to be removed (1-indexed)
 * @return {ListNode | null} - The head of the modified linked list
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || n === 0) return head

  const preHead = new ListNode()
  preHead.next = head

  let fast: ListNode | null = preHead
  let slow: ListNode | null = preHead

  for (let jump = 0; jump < n; jump++) {
    if (fast.next) fast = fast.next
    else return head
  }

  while (fast.next) {
    fast = fast.next!
    slow = slow.next!
  }

  slow.next = slow.next!.next

  return preHead.next
}

export { removeNthFromEnd, ListNode }
