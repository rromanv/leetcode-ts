import { expect, test } from 'vitest'
import { _Node, lowestCommonAncestor } from '@/1650'

test('p = [3,5,1,6,2,0,8,null,null,7,4], q = 5, p = 1 => 3', () => {
  const root = new _Node(3)
  const node5 = new _Node(5)
  const node1 = new _Node(1)
  const node6 = new _Node(6)
  const node2 = new _Node(2)
  const node0 = new _Node(0)
  const node8 = new _Node(8)
  const node7 = new _Node(7)
  const node4 = new _Node(4)

  root.left = node5
  root.right = node1
  node5.parent = root
  node1.parent = root

  node5.left = node6
  node5.right = node2
  node6.parent = node5
  node2.parent = node5

  node1.left = node0
  node1.right = node8
  node0.parent = node1
  node8.parent = node1

  node2.left = node7
  node2.right = node4
  node7.parent = node2
  node4.parent = node2

  expect(lowestCommonAncestor(node5, node1)).toBe(root)
})

test('p = [3,5,1,6,2,0,8,null,null,7,4], q = 5, p = 4 => 5', () => {
  const root = new _Node(3)
  const node5 = new _Node(5)
  const node1 = new _Node(1)
  const node6 = new _Node(6)
  const node2 = new _Node(2)
  const node0 = new _Node(0)
  const node8 = new _Node(8)
  const node7 = new _Node(7)
  const node4 = new _Node(4)

  root.left = node5
  root.right = node1
  node5.parent = root
  node1.parent = root

  node5.left = node6
  node5.right = node2
  node6.parent = node5
  node2.parent = node5

  node1.left = node0
  node1.right = node8
  node0.parent = node1
  node8.parent = node1

  node2.left = node7
  node2.right = node4
  node7.parent = node2
  node4.parent = node2

  expect(lowestCommonAncestor(node5, node4)).toBe(node5)
})

test('p = [1,2], q = 2, p = 1 => 1', () => {
  const node1 = new _Node(1)
  const node2 = new _Node(2)

  node1.left = node2
  node2.parent = node1

  expect(lowestCommonAncestor(node2, node1)).toBe(node1)
})
