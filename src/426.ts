/**
 * 426. Convert Binary Search Tree to Sorted Doubly Linked List
 * {@link https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/}
 * Difficulty: MediumPremium
 *
 * Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
 *
 * You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list.
 * For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.
 *
 * We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor,
 * and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.
 *
 * Algorithm: To be implemented
 * Time Complexity: To be implemented
 * Space Complexity: To be implemented
 *
 * @param {Node | null} root The root of the Binary Search Tree.
 * @returns {Node | null} The head of the sorted circular doubly-linked list.
 */

// Definition for a Node.
class Node {
  val: number
  left: Node | null
  right: Node | null

  constructor(val?: number, left?: Node | null, right?: Node | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function treeToDoublyList(root: Node | null): Node | null {
  if (!root) return null

  let head: Node | null = null
  let prev: Node | null = null

  function inOrder(node: Node | null) {
    if (!node) return
    inOrder(node.left)
    if (prev) {
      prev.right = node
      node.left = prev
    } else {
      head = node
    }
    prev = node
    inOrder(node.right)
  }

  inOrder(root)
  if (head && prev) {
    ;(head as Node).left = prev
    ;(prev as Node).right = head
  }

  return head
}

export { treeToDoublyList, Node }
