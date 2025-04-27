import { expect, test } from 'vitest'
import { TreeNode, diameterOfBinaryTree } from '@/543'

test('root = [1,2,3,4,5] => 3', () => {
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))

  expect(diameterOfBinaryTree(root)).toBe(3)
})

test('root = [1,2] => 1', () => {
  const root = new TreeNode(1, new TreeNode(2))

  expect(diameterOfBinaryTree(root)).toBe(1)
})

test('root = [1] => 0 (single node)', () => {
  const root = new TreeNode(1)
  expect(diameterOfBinaryTree(root)).toBe(0)
})

test('root = [] => 0 (empty tree)', () => {
  expect(diameterOfBinaryTree(null)).toBe(0)
})

test('root = [1,2,3,4,5,6,7] => 4 (full binary tree)', () => {
  //        1
  //       / \
  //      2   3
  //     / \ / \
  //    4  5 6  7
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  )
  expect(diameterOfBinaryTree(root)).toBe(4)
})

test('root = [1,2,null,3,null,4,null,5] => 4 (skewed left)', () => {
  // 1
  // |
  // 2
  // |
  // 3
  // |
  // 4
  // |
  // 5
  const root = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5)))))
  expect(diameterOfBinaryTree(root)).toBe(4)
})

test('root = [1,null,2,null,3,null,4,null,5] => 4 (skewed right)', () => {
  // 1
  //  \
  //   2
  //    \
  //     3
  //      \
  //       4
  //        \
  //         5
  const root = new TreeNode(
    1,
    null,
    new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))),
  )
  expect(diameterOfBinaryTree(root)).toBe(4)
})
