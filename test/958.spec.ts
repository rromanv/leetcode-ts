import { describe, it, expect } from 'vitest'
import { isCompleteTree, TreeNode } from '@/958'

// Helper function to build a tree from an array (level-order)
function buildTree(values: (number | null)[]): TreeNode | null {
  if (!values || values.length === 0 || values[0] === null) {
    return null
  }

  const root = new TreeNode(values[0])
  const queue: (TreeNode | null)[] = [root]
  let i = 1

  while (i < values.length) {
    const current = queue.shift()

    if (current) {
      // Left child
      if (values[i] !== null && values[i] !== undefined) {
        current.left = new TreeNode(values[i]!)
        queue.push(current.left)
      }
      i++

      // Right child
      if (i < values.length && values[i] !== null && values[i] !== undefined) {
        current.right = new TreeNode(values[i]!)
        queue.push(current.right)
      }
      i++
    } else {
      // If the current node is null, we still need to advance the index
      // for its potential children, but we don't add them to the queue.
      i += 2 // Skip potential left and right children
    }
  }

  return root
}

describe('958. Check Completeness of a Binary Tree', () => {
  it('should return true for a complete binary tree', () => {
    // Tree: [1, 2, 3, 4, 5, 6]
    //      1
    //    /   \
    //   2     3
    //  / \   /
    // 4   5 6
    const root = buildTree([1, 2, 3, 4, 5, 6])
    expect(isCompleteTree(root)).toBe(true)
  })

  it('should return false for an incomplete binary tree', () => {
    // Tree: [1, 2, 3, 4, 5, null, 7]
    //      1
    //    /   \
    //   2     3
    //  / \     \
    // 4   5     7  (Node 6 is missing)
    const root = buildTree([1, 2, 3, 4, 5, null, 7])
    expect(isCompleteTree(root)).toBe(false)
  })

  it('should return true for a perfect binary tree', () => {
    // Tree: [1, 2, 3, 4, 5, 6, 7]
    //      1
    //    /   \
    //   2     3
    //  / \   / \
    // 4   5 6   7
    const root = buildTree([1, 2, 3, 4, 5, 6, 7])
    expect(isCompleteTree(root)).toBe(true)
  })

  it('should return true for a single node tree', () => {
    // Tree: [1]
    const root = buildTree([1])
    expect(isCompleteTree(root)).toBe(true)
  })

  it('should return true for a tree with only left children in the last level', () => {
    // Tree: [1, 2, 3, 4]
    //      1
    //    /   \
    //   2     3
    //  /
    // 4
    const root = buildTree([1, 2, 3, 4])
    expect(isCompleteTree(root)).toBe(true)
  })

  it('should return false if a node is null before the last node', () => {
    // Tree: [1, 2, 3, null, 5]
    //      1
    //    /   \
    //   2     3
    //    \      (Node 4 is missing)
    //     5
    const root = buildTree([1, 2, 3, null, 5])
    expect(isCompleteTree(root)).toBe(false)
  })

  it('should return false for a tree with a gap', () => {
    // Tree: [1, 2, 3, 4, null, 6]
    //      1
    //    /   \
    //   2     3
    //  /     /
    // 4     6  (Node 5 is missing)
    const root = buildTree([1, 2, 3, 4, null, 6])
    expect(isCompleteTree(root)).toBe(false)
  })
})
