import { distanceK, TreeNode } from '@/863'
import { describe, it, expect } from 'vitest'

function buildTree(arr: (number | null)[]): TreeNode | null {
  if (!arr.length || arr[0] == null) return null
  const nodes = arr.map((v) => (v == null ? null : new TreeNode(v)))
  for (let i = 0, j = 1; j < arr.length; ++i) {
    if (nodes[i]) {
      if (j < arr.length) nodes[i]!.left = nodes[j++]
      if (j < arr.length) nodes[i]!.right = nodes[j++]
    }
  }
  return nodes[0]
}

describe('distanceK', () => {
  it('returns nodes at distance K from target (typical case)', () => {
    // Tree:    3
    //        /   \
    //       5     1
    //      / \   / \
    //     6   2 0   8
    //        / \
    //       7   4
    const root = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const target = root!.left // node 5
    expect(distanceK(root, target, 2).sort()).toEqual([7, 4, 1].sort())
  })

  it('returns empty array if no nodes at distance K', () => {
    const root = buildTree([1])
    const target = root
    expect(distanceK(root, target, 1)).toEqual([])
  })

  it('returns root if K=0 and target is root', () => {
    const root = buildTree([1, 2, 3])
    const target = root
    expect(distanceK(root, target, 0)).toEqual([1])
  })

  it('handles single node tree, K=0', () => {
    const root = buildTree([42])
    expect(distanceK(root, root, 0)).toEqual([42])
  })

  it('handles K greater than tree height', () => {
    const root = buildTree([1, 2, null, 3])
    expect(distanceK(root, root, 5)).toEqual([])
  })

  it('handles null root', () => {
    expect(distanceK(null, null, 2)).toEqual([])
  })
})
