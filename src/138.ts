// filepath: /Users/rromanv/projects/leetcode-ts/src/138.ts
/**
 *  138. Copy List with Random Pointer
 *  https://leetcode.com/problems/copy-list-with-random-pointer/
 *  Medium
 *
 * Creates a deep copy of a linked list where each node contains an additional random pointer
 *
 * Algorithm: Two-pass approach using a Map to establish node correspondence
 * - First pass: Create copies of all nodes and map original nodes to their copies
 * - Second pass: Connect next and random pointers in the copy using the mapping
 * Time Complexity: O(n) where n is the length of the linked list
 * Space Complexity: O(n) for storing the node mapping
 *
 * @param {_Node | null} head - Head of the linked list to be copied
 * @return {_Node | null} - Head of the new copied linked list
 */

// Definition for _Node.
class _Node {
  val: number
  next: _Node | null
  random: _Node | null
  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null

  const nodeMap = new Map<_Node, _Node>()

  let current: _Node | null = head

  while (current) {
    nodeMap.set(current, new _Node(current.val))
    current = current.next
  }

  current = head

  while (current) {
    const copyNode = nodeMap.get(current)!
    copyNode.next = current.next ? nodeMap.get(current.next)! : null
    copyNode.random = current.random ? nodeMap.get(current.random)! : null
    current = current.next
  }

  return nodeMap.get(head)!
}

export { copyRandomList, _Node }
