import { expect, test, describe } from 'vitest'
import { TreeNode, lowestCommonAncestor } from '@/236'

describe('236. Lowest Common Ancestor of a Binary Tree', () => {
  test('Example 1: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 => 3', () => {
    // Construct the tree
    //        3
    //      /   \
    //     5     1
    //    / \   / \
    //   6   2 0   8
    //      / \
    //     7   4

    const node4 = new TreeNode(4)
    const node7 = new TreeNode(7)
    const node2 = new TreeNode(2, node7, node4)
    const node6 = new TreeNode(6)
    const node5 = new TreeNode(5, node6, node2)
    const node0 = new TreeNode(0)
    const node8 = new TreeNode(8)
    const node1 = new TreeNode(1, node0, node8)
    const root = new TreeNode(3, node5, node1)

    expect(lowestCommonAncestor(root, node5, node1)).toBe(root)
  })

  test('Example 2: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 => 5', () => {
    // Construct the tree
    //        3
    //      /   \
    //     5     1
    //    / \   / \
    //   6   2 0   8
    //      / \
    //     7   4

    const node4 = new TreeNode(4)
    const node7 = new TreeNode(7)
    const node2 = new TreeNode(2, node7, node4)
    const node6 = new TreeNode(6)
    const node5 = new TreeNode(5, node6, node2)
    const node0 = new TreeNode(0)
    const node8 = new TreeNode(8)
    const node1 = new TreeNode(1, node0, node8)
    const root = new TreeNode(3, node5, node1)

    expect(lowestCommonAncestor(root, node5, node4)).toBe(node5)
  })

  test('Example 3: root = [1,2], p = 1, q = 2 => 1', () => {
    // Construct the tree
    //   1
    //  /
    // 2

    const node2 = new TreeNode(2)
    const root = new TreeNode(1, node2, null)

    expect(lowestCommonAncestor(root, root, node2)).toBe(root)
  })

  test('Complex case: p and q in different subtrees, deep in the tree', () => {
    // Construct the tree
    //        3
    //      /   \
    //     5     1
    //    / \   / \
    //   6   2 0   8
    //  /   / \   /
    // 9   7   4 10
    //    /       \
    //   11       12

    const node11 = new TreeNode(11)
    const node12 = new TreeNode(12)
    const node7 = new TreeNode(7, node11, null)
    const node4 = new TreeNode(4)
    const node10 = new TreeNode(10, null, node12)
    const node9 = new TreeNode(9)
    const node2 = new TreeNode(2, node7, node4)
    const node6 = new TreeNode(6, node9, null)
    const node5 = new TreeNode(5, node6, node2)
    const node0 = new TreeNode(0)
    const node8 = new TreeNode(8, node10, null)
    const node1 = new TreeNode(1, node0, node8)
    const root = new TreeNode(3, node5, node1)

    expect(lowestCommonAncestor(root, node11, node12)).toBe(root)
    expect(lowestCommonAncestor(root, node9, node11)).toBe(node5)
  })

  test('Edge case: p is the LCA of itself and q', () => {
    // Construct the tree
    //   1
    //  / \
    // 2   3

    const node2 = new TreeNode(2)
    const node3 = new TreeNode(3)
    const root = new TreeNode(1, node2, node3)

    expect(lowestCommonAncestor(root, root, node3)).toBe(root)
  })

  test('Special case: p and q are the same node', () => {
    // Construct the tree
    //   1
    //  / \
    // 2   3

    const node2 = new TreeNode(2)
    const node3 = new TreeNode(3)
    const root = new TreeNode(1, node2, node3)

    expect(lowestCommonAncestor(root, node3, node3)).toBe(node3)
  })
})
