import { describe, it, expect } from 'vitest'
import { treeToDoublyList, Node } from '@/426' // Assuming Node is exported from 426.ts

// Helper function to create a BST from an array (level order)
// Note: This is a simplified helper for testing and might need adjustments
// based on how null nodes are represented in typical LeetCode array inputs.
// For this problem, it's easier to construct the tree manually for clarity.

// Helper function to convert DLL back to array for verification
const dllToArray = (head: Node | null): number[] => {
  if (!head) {
    return []
  }
  const result: number[] = []
  let current: Node | null = head
  do {
    result.push(current.val)
    current = current.right
  } while (current !== head && current !== null) // Check current !== null for safety
  return result
}

// Helper function to verify the circular doubly linked list properties
const verifyDLL = (head: Node | null): boolean => {
  if (!head) {
    return true // An empty list is valid
  }

  let current: Node | null = head
  let count = 0
  const maxNodes = 1000 // Safety break for potential infinite loops

  // Traverse forward
  let lastNode: Node | null = null
  do {
    if (count++ > maxNodes) return false // Loop detected or too large
    if (current.right === null) return false // Right pointer should not be null in circular DLL
    if (current.right.left !== current) return false // Back pointer check
    lastNode = current
    current = current.right
  } while (current !== head)

  // Check circularity: last node's right should point to head
  if (lastNode === null || lastNode.right !== head) return false
  // Check circularity: head's left should point to last node
  if (head.left !== lastNode) return false

  return true
}

describe('426. Convert Binary Search Tree to Sorted Doubly Linked List', () => {
  it('should return null for an empty tree', () => {
    const root = null
    const head = treeToDoublyList(root)
    expect(head).toBeNull()
    expect(verifyDLL(head)).toBe(true)
  })

  it('should convert a single node tree', () => {
    const root = new Node(1)
    const head = treeToDoublyList(root)
    expect(head).toBe(root)
    expect(head?.val).toBe(1)
    expect(head?.left).toBe(head) // Points to itself
    expect(head?.right).toBe(head) // Points to itself
    expect(dllToArray(head)).toEqual([1])
    expect(verifyDLL(head)).toBe(true)
  })

  it('should convert a simple BST', () => {
    //   4
    //  / \
    // 2   5
    // / \
    // 1   3
    const root = new Node(4)
    root.left = new Node(2)
    root.right = new Node(5)
    root.left.left = new Node(1)
    root.left.right = new Node(3)

    const head = treeToDoublyList(root)

    // Expected DLL: 1 <-> 2 <-> 3 <-> 4 <-> 5 (circular)
    expect(head?.val).toBe(1) // Head should be the smallest element
    expect(dllToArray(head)).toEqual([1, 2, 3, 4, 5])
    expect(verifyDLL(head)).toBe(true)

    // Check specific links for clarity (optional, verifyDLL covers this)
    const node1 = head
    const node2 = head?.right
    const node3 = node2?.right
    const node4 = node3?.right
    const node5 = node4?.right

    // Check forward links
    expect(node1?.right).toBe(node2)
    expect(node2?.right).toBe(node3)
    expect(node3?.right).toBe(node4)
    expect(node4?.right).toBe(node5)
    expect(node5?.right).toBe(node1) // Circular

    // Check backward links
    expect(node5?.left).toBe(node4)
    expect(node4?.left).toBe(node3)
    expect(node3?.left).toBe(node2)
    expect(node2?.left).toBe(node1)
    expect(node1?.left).toBe(node5) // Circular
  })

  it('should convert a left-skewed tree', () => {
    //     3
    //    /
    //   2
    //  /
    // 1
    const root = new Node(3)
    root.left = new Node(2)
    root.left.left = new Node(1)

    const head = treeToDoublyList(root)
    expect(head?.val).toBe(1)
    expect(dllToArray(head)).toEqual([1, 2, 3])
    expect(verifyDLL(head)).toBe(true)
  })

  it('should convert a right-skewed tree', () => {
    // 1
    //  \
    //   2
    //    \
    //     3
    const root = new Node(1)
    root.right = new Node(2)
    root.right.right = new Node(3)

    const head = treeToDoublyList(root)
    expect(head?.val).toBe(1)
    expect(dllToArray(head)).toEqual([1, 2, 3])
    expect(verifyDLL(head)).toBe(true)
  })
})
