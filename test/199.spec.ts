import { expect, test, describe } from 'vitest'
import { TreeNode, rightSideView } from '@/199'

describe('199. Binary Tree Right Side View', () => {
  test('Example 1: root = [1,2,3,null,5,null,4] => [1,3,4]', () => {
    // Construct the tree:
    //      1
    //     / \
    //    2   3
    //     \   \
    //      5   4
    const node5 = new TreeNode(5)
    const node4 = new TreeNode(4)
    const node2 = new TreeNode(2, null, node5)
    const node3 = new TreeNode(3, null, node4)
    const root = new TreeNode(1, node2, node3)

    expect(rightSideView(root)).toStrictEqual([1, 3, 4])
  })

  test('Example 2: root = [1,null,3] => [1,3]', () => {
    // Construct the tree:
    //    1
    //     \
    //      3
    const node3 = new TreeNode(3)
    const root = new TreeNode(1, null, node3)

    expect(rightSideView(root)).toStrictEqual([1, 3])
  })

  test('Example 3: root = [] => []', () => {
    expect(rightSideView(null)).toStrictEqual([])
  })

  test('Complex case: root = [1,2,3,4,5,6,7,null,8] => [1,3,7,8]', () => {
    // Construct the tree:
    //        1
    //       / \
    //      2   3
    //     / \ / \
    //    4  5 6  7
    //      /
    //     8
    const node8 = new TreeNode(8)
    const node4 = new TreeNode(4)
    const node5 = new TreeNode(5, node8, null)
    const node6 = new TreeNode(6)
    const node7 = new TreeNode(7)
    const node2 = new TreeNode(2, node4, node5)
    const node3 = new TreeNode(3, node6, node7)
    const root = new TreeNode(1, node2, node3)

    expect(rightSideView(root)).toStrictEqual([1, 3, 7, 8])
  })

  test('Left-heavy tree: root = [1,2,null,3,null,4] => [1,2,3,4]', () => {
    // Construct the tree:
    //    1
    //   /
    //  2
    // /
    //3
    //\
    // 4
    const node4 = new TreeNode(4)
    const node3 = new TreeNode(3, null, node4)
    const node2 = new TreeNode(2, node3, null)
    const root = new TreeNode(1, node2, null)

    expect(rightSideView(root)).toStrictEqual([1, 2, 3, 4])
  })

  test('Single node: root = [1] => [1]', () => {
    const root = new TreeNode(1)
    expect(rightSideView(root)).toStrictEqual([1])
  })

  test('Balanced with empty spots: root = [1,2,3,null,null,null,4] => [1,3,4]', () => {
    // Construct the tree:
    //      1
    //     / \
    //    2   3
    //         \
    //          4
    const node4 = new TreeNode(4)
    const node2 = new TreeNode(2)
    const node3 = new TreeNode(3, null, node4)
    const root = new TreeNode(1, node2, node3)

    expect(rightSideView(root)).toStrictEqual([1, 3, 4])
  })
})
