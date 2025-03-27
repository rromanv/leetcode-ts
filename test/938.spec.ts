import { expect, test, describe } from 'vitest'
import { TreeNode, rangeSumBST } from '@/938'

describe('938. Range Sum of BST', () => {
  test('Example 1: root = [10,5,15,3,7,null,18], low = 7, high = 15 => 32', () => {
    // Construct the tree:
    //       10
    //      /  \
    //     5   15
    //    / \    \
    //   3   7   18
    // Expected sum of [7, 10, 15] = 32
    const node3 = new TreeNode(3)
    const node7 = new TreeNode(7)
    const node5 = new TreeNode(5, node3, node7)
    const node18 = new TreeNode(18)
    const node15 = new TreeNode(15, null, node18)
    const root = new TreeNode(10, node5, node15)

    expect(rangeSumBST(root, 7, 15)).toBe(32)
  })

  test('Example 2: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10 => 23', () => {
    // Construct the tree:
    //        10
    //       /  \
    //      5    15
    //     / \   / \
    //    3   7 13 18
    //   /   /
    //  1   6
    // Expected sum of [6, 7, 10] = 23
    const node1 = new TreeNode(1)
    const node6 = new TreeNode(6)
    const node3 = new TreeNode(3, node1, null)
    const node7 = new TreeNode(7, node6, null)
    const node13 = new TreeNode(13)
    const node18 = new TreeNode(18)
    const node5 = new TreeNode(5, node3, node7)
    const node15 = new TreeNode(15, node13, node18)
    const root = new TreeNode(10, node5, node15)

    expect(rangeSumBST(root, 6, 10)).toBe(23)
  })

  test('Empty tree: root = null, low = 5, high = 10 => 0', () => {
    expect(rangeSumBST(null, 5, 10)).toBe(0)
  })

  test('Single node within range: root = [10], low = 5, high = 15 => 10', () => {
    const root = new TreeNode(10)
    expect(rangeSumBST(root, 5, 15)).toBe(10)
  })

  test('Single node outside range: root = [10], low = 15, high = 20 => 0', () => {
    const root = new TreeNode(10)
    expect(rangeSumBST(root, 15, 20)).toBe(0)
  })

  test('All nodes within range: root = [10,5,15], low = 5, high = 15 => 30', () => {
    // Construct the tree:
    //       10
    //      /  \
    //     5   15
    const node5 = new TreeNode(5)
    const node15 = new TreeNode(15)
    const root = new TreeNode(10, node5, node15)

    expect(rangeSumBST(root, 5, 15)).toBe(30)
  })

  test('No nodes within range: root = [10,5,15], low = 20, high = 30 => 0', () => {
    // Construct the tree:
    //       10
    //      /  \
    //     5   15
    const node5 = new TreeNode(5)
    const node15 = new TreeNode(15)
    const root = new TreeNode(10, node5, node15)

    expect(rangeSumBST(root, 20, 30)).toBe(0)
  })

  test('Range bounds are node values: root = [10,5,15,3,7,null,18], low = 5, high = 15 => 30', () => {
    // Construct the tree:
    //       10
    //      /  \
    //     5   15
    //    / \    \
    //   3   7   18
    // Expected sum of [5, 10, 15] = 30
    const node3 = new TreeNode(3)
    const node7 = new TreeNode(7)
    const node5 = new TreeNode(5, node3, node7)
    const node18 = new TreeNode(18)
    const node15 = new TreeNode(15, null, node18)
    const root = new TreeNode(10, node5, node15)

    expect(rangeSumBST(root, 5, 15)).toBe(37)
  })
})
