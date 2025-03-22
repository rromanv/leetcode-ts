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
