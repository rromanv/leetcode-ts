// filepath: /Users/rromanv/projects/leetcode-ts/src/708.ts
/**
 * 708. Insert into a Sorted Circular Linked List
 * https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
 * Medium
 *
 * Given a node from a Circular Linked List which is sorted in ascending order,
 * write a function to insert a value insertVal into the list such that it remains sorted.
 *
 * Algorithm: Single pass traversal with edge cases handling
 * Time Complexity: O(n) where n is the number of nodes in the list
 * Space Complexity: O(1) as we only use constant extra space
 *
 * @param {_Node | null} head - The head node of the circular linked list
 * @param {number} insertVal - The value to insert into the list
 * @return {_Node} - The head of the modified circular linked list
 */

class _Node {
  val: number
  next: _Node | null
  constructor(val?: number, next?: _Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function insert(head: _Node | null, insertVal: number): _Node {
  const node = new _Node(insertVal)

  if (!head) {
    node.next = node
    return node
  }

  let prev = head
  let current = prev.next

  do {
    if (shouldInsertAfter(prev, current!, insertVal)) break
    prev = current!
    current = current!.next
  } while (prev !== head)

  prev.next = node
  node.next = current
  return head
}

function shouldInsertAfter(prev: _Node, current: _Node, insertVal: number): boolean {
  // Case 1: Normal ascending sequence
  const isInSequence = prev.val <= insertVal && insertVal <= current.val

  // Case 2: At cycle point (e.g., 5->1 where prev > current)
  const isCyclePoint = prev.val > current.val
  const isGreaterThanPrev = insertVal >= prev.val
  const isLessThanCurrent = insertVal <= current.val

  return isInSequence || (isCyclePoint && (isGreaterThanPrev || isLessThanCurrent))
}

export { _Node, insert }
