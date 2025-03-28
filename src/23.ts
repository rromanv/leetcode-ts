// filepath: /Users/rromanv/projects/leetcode-ts/src/23.ts
/**
 *  23. Merge k Sorted Lists
 *  https://leetcode.com/problems/merge-k-sorted-lists/
 *  Hard
 *
 * Merges k sorted linked lists into one sorted linked list
 *
 * Algorithm: Not implemented (shell function only)
 * Time Complexity: Not specified
 * Space Complexity: Not specified
 *
 * @param {ListNode[]} lists - Array of heads of linked lists to be merged
 * @return {ListNode | null} - Head of the merged linked list
 */

import { mergeTwoLists } from '@/21'

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || !lists.length) return null

  let newList = Array.from(lists)

  while (newList.length > 1) {
    const mergeList = new Array<ListNode | null>()
    for (let index = 0; index < newList.length; index += 2) {
      const list1 = newList[index]
      const list2 = newList[index + 1] ?? null
      mergeList.push(mergeTwoLists(list1, list2))
    }
    newList = mergeList
  }
  return newList.shift()!
}

export { mergeKLists, ListNode }
