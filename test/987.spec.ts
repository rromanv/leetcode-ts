import { describe, expect, it } from 'vitest'
import { TreeNode, verticalTraversal } from '../src/987'

describe('987. Vertical Order Traversal of a Binary Tree', () => {
  it('should return vertical order traversal for a standard binary tree', () => {
    // Create tree [3,9,20,null,null,15,7]
    /*
         3
        / \
       9  20
         /  \
        15   7
    */
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const expected = [[9], [3, 15], [20], [7]]
    expect(verticalTraversal(root)).toEqual(expected)
  })

  it('should handle a more complex tree with same column and row nodes', () => {
    // Create tree [1,2,3,4,5,6,7]
    /*
         1
        / \
       2   3
      / \ / \
     4  5 6  7
    */
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    root.right.left = new TreeNode(6)
    root.right.right = new TreeNode(7)

    const expected = [[4], [2], [1, 5, 6], [3], [7]]
    expect(verticalTraversal(root)).toEqual(expected)
  })

  it('should sort nodes with the same position by their values', () => {
    // Create tree [3,1,4,0,2,2]
    /*
         3
        / \
       1   4
      / \   \
     0   2   2
    */
    const root = new TreeNode(3)
    root.left = new TreeNode(1)
    root.right = new TreeNode(4)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(2)

    const expected = [[0], [1], [3, 2, 2], [4]]
    expect(verticalTraversal(root)).toEqual(expected)
  })

  it('should sort nodes with the same position by their values', () => {
    // Create tree [1,2,3,4,6,5,7]
    /*
         1
        / \
       2   3
      / \  / \
     4   6 5 7
    */
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(6)
    root.right.left = new TreeNode(5)
    root.right.right = new TreeNode(7)

    const expected = [[4], [2], [1, 5, 6], [3], [7]]
    expect(verticalTraversal(root)).toEqual(expected)
  })

  it('should return empty array for null input', () => {
    expect(verticalTraversal(null)).toEqual([])
  })

  it('should handle a single node tree', () => {
    const root = new TreeNode(1)
    expect(verticalTraversal(root)).toEqual([[1]])
  })

  it('should sort nodes with the same position by their values in complex tree', () => {
    // Create tree [0,8,1,null,null,3,2,null,4,5,null,null,7,6]
    /*
        0
       /  \
      8    1
         /   \
        3     2
         \   /
          4 5
          \ /
          7 6
    */
    const root = new TreeNode(0)
    root.left = new TreeNode(8)
    root.right = new TreeNode(1)
    root.right.left = new TreeNode(3)
    root.right.right = new TreeNode(2)
    root.right.left.right = new TreeNode(4)
    root.right.right.left = new TreeNode(5)
    root.right.left.right.right = new TreeNode(7)
    root.right.right.left.left = new TreeNode(6)

    const expected = [[8], [0, 3, 6], [1, 4, 5], [2, 7]]
    expect(verticalTraversal(root)).toEqual(expected)
  })
})
