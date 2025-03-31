import { expect, test, describe } from 'vitest'
import { TreeNode, closestValue } from '@/270'

describe('270. Closest Binary Search Tree Value', () => {
  test('Example 1: root = [4,2,5,1,3], target = 3.714286 => 4', () => {
    // Construct the tree:
    //      4
    //     / \
    //    2   5
    //   / \
    //  1   3
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5))

    expect(closestValue(root, 3.714286)).toBe(4)
  })

  test('Example 2: root = [1], target = 4.428571 => 1', () => {
    const root = new TreeNode(1)
    expect(closestValue(root, 4.428571)).toBe(1)
  })

  test('Target exactly matches a node value: root = [4,2,5,1,3], target = 3 => 3', () => {
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(5))
    expect(closestValue(root, 3)).toBe(3)
  })

  test('Target between two nodes, closer to smaller: root = [3,1,4], target = 3.2 => 3', () => {
    const root = new TreeNode(3, new TreeNode(1), new TreeNode(4))
    expect(closestValue(root, 3.2)).toBe(3)
  })

  test('Target between two nodes, closer to larger: root = [3,1,4], target = 3.8 => 4', () => {
    const root = new TreeNode(3, new TreeNode(1), new TreeNode(4))
    expect(closestValue(root, 3.8)).toBe(4)
  })

  test('Target smaller than all nodes: root = [5,3,6], target = 1 => 3', () => {
    const root = new TreeNode(5, new TreeNode(3), new TreeNode(6))
    expect(closestValue(root, 1)).toBe(3)
  })

  test('Target larger than all nodes: root = [5,3,6], target = 8 => 6', () => {
    const root = new TreeNode(5, new TreeNode(3), new TreeNode(6))
    expect(closestValue(root, 8)).toBe(6)
  })
})
