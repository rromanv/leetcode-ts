import { describe, it, expect } from 'vitest'
import { lowestCommonAncestor, TreeNode } from '@/235'

/**
 * Helper function to create a binary tree from an array (level-order).
 * null values represent missing nodes.
 */
function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null
  }

  const root = new TreeNode(arr[0])
  const queue: (TreeNode | null)[] = [root]
  let i = 1

  while (i < arr.length) {
    const currentNode = queue.shift()

    if (currentNode) {
      // Process left child
      if (i < arr.length && arr[i] !== null) {
        currentNode.left = new TreeNode(arr[i]!)
        queue.push(currentNode.left)
      }
      i++

      // Process right child
      if (i < arr.length && arr[i] !== null) {
        currentNode.right = new TreeNode(arr[i]!)
        queue.push(currentNode.right)
      }
      i++
    } else {
      // If the current node in the queue is null, we still need to advance the array index
      // for its potential (null) children.
      i += 2
    }
  }

  return root
}

describe('235. Lowest Common Ancestor of a Binary Search Tree', () => {
  it('should find LCA when nodes are on different sides', () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const p = root?.left // Node 2
    const q = root?.right // Node 8
    const expectedLCA = root // Node 6
    expect(lowestCommonAncestor(root, p as TreeNode, q as TreeNode)).toBe(expectedLCA)
  })

  it('should find LCA when one node is an ancestor of the other', () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const p = root?.left // Node 2
    const q = root?.left?.right // Node 4
    const expectedLCA = root?.left // Node 2
    expect(lowestCommonAncestor(root, p as TreeNode, q as TreeNode)).toBe(expectedLCA)
  })

  it('should handle case where p and q are the same node', () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const p = root?.left?.right?.left // Node 3
    const q = root?.left?.right?.left // Node 3
    const expectedLCA = root?.left?.right?.left // Node 3
    expect(lowestCommonAncestor(root, p as TreeNode, q as TreeNode)).toBe(expectedLCA)
  })

  it('should handle small tree', () => {
    const root = arrayToTree([2, 1])
    const p = root // Node 2
    const q = root?.left // Node 1
    const expectedLCA = root // Node 2
    expect(lowestCommonAncestor(root, p, q as TreeNode)).toBe(expectedLCA)
  })

  it('should return null for null root', () => {
    expect(lowestCommonAncestor(null, null, null)).toBeNull()
  })

  it('should handle case where nodes are root and another node', () => {
    const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const p = root // Node 6
    const q = root?.right?.left // Node 7
    const expectedLCA = root // Node 6
    expect(lowestCommonAncestor(root, p, q as TreeNode)).toBe(expectedLCA)
  })
})
