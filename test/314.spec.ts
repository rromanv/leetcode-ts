import { expect, test } from 'vitest'
import { TreeNode, verticalOrder } from '@/314'

test('root = [3,9,20,null,null,15,7] => [[9],[3,15],[20],[7]]', () => {
  const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

  expect(verticalOrder(root)).toStrictEqual([[9], [3, 15], [20], [7]])
})

test('root = [3,9,8,4,0,1,7] => [[4],[9],[3,0,1],[8],[7]]', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9, new TreeNode(4), new TreeNode(0)),
    new TreeNode(8, new TreeNode(1), new TreeNode(7)),
  )

  expect(verticalOrder(root)).toStrictEqual([[4], [9], [3, 0, 1], [8], [7]])
})

test('root = [1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6] => [[4],[2,5],[1,10,9,6],[3],[11]]', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))), new TreeNode(10)),
    new TreeNode(3, new TreeNode(9), new TreeNode(11)),
  )

  expect(verticalOrder(root)).toStrictEqual([[4], [2, 5], [1, 10, 9, 6], [3], [11]])
})
