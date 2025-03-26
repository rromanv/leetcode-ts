import { expect, test, describe } from 'vitest'
import { TreeNode, sumNumbers } from '@/129'

describe('129. Sum Root to Leaf Numbers', () => {
  test('Example 1: root = [1,2,3] => 25', () => {
    // Construct the tree:
    //      1
    //     / \
    //    2   3
    // Paths: 1->2 = 12, 1->3 = 13, Sum = 25
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))

    expect(sumNumbers(root)).toBe(25)
  })

  test('Example 2: root = [4,9,0,5,1] => 1026', () => {
    // Construct the tree:
    //      4
    //     / \
    //    9   0
    //   / \
    //  5   1
    // Paths: 4->9->5 = 495, 4->9->1 = 491, 4->0 = 40, Sum = 1026
    const node5 = new TreeNode(5)
    const node1 = new TreeNode(1)
    const node9 = new TreeNode(9, node5, node1)
    const node0 = new TreeNode(0)
    const root = new TreeNode(4, node9, node0)

    expect(sumNumbers(root)).toBe(1026)
  })

  test('Example 3: root = [0,1,2] => 12', () => {
    // Construct the tree:
    //      0
    //     / \
    //    1   2
    // Paths: 0->1 = 1, 0->2 = 2, Sum = 3
    const root = new TreeNode(0, new TreeNode(1), new TreeNode(2))

    expect(sumNumbers(root)).toBe(3)
  })

  test('Single node: root = [7] => 7', () => {
    const root = new TreeNode(7)

    expect(sumNumbers(root)).toBe(7)
  })

  test('Empty tree: root = null => 0', () => {
    expect(sumNumbers(null)).toBe(0)
  })

  test('Deep tree: root = [1,2,3,4,5,6,7] => 522', () => {
    // Construct the tree:
    //        1
    //       / \
    //      2   3
    //     / \ / \
    //    4  5 6  7
    // Paths: 1->2->4 = 124, 1->2->5 = 125, 1->3->6 = 136, 1->3->7 = 137, Sum = 522
    const node4 = new TreeNode(4)
    const node5 = new TreeNode(5)
    const node6 = new TreeNode(6)
    const node7 = new TreeNode(7)
    const node2 = new TreeNode(2, node4, node5)
    const node3 = new TreeNode(3, node6, node7)
    const root = new TreeNode(1, node2, node3)

    expect(sumNumbers(root)).toBe(522)
  })
})
