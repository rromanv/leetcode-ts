import { expect, describe, it } from 'vitest'
import { str2tree, TreeNode } from '@/536'

describe('str2tree', () => {
  it('should construct a tree from a simple string', () => {
    const s = '4(2(3)(1))(6(5))'
    // Tree:    4
    //         / \
    //        2   6
    //       / \  /
    //      3  1 5
    const expected = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(3), new TreeNode(1)),
      new TreeNode(6, new TreeNode(5)),
    )
    expect(str2tree(s)).toEqual(expected)
  })

  it('should handle single node', () => {
    const s = '1'
    const expected = new TreeNode(1)
    expect(str2tree(s)).toEqual(expected)
  })

  it('should handle negative numbers', () => {
    const s = '-4(2)(-6)'
    const expected = new TreeNode(-4, new TreeNode(2), new TreeNode(-6))
    expect(str2tree(s)).toEqual(expected)
  })

  it('should handle empty string as null', () => {
    expect(str2tree('')).toBeNull()
  })

  it('should handle left child only', () => {
    const s = '4(2(3))'
    const expected = new TreeNode(4, new TreeNode(2, new TreeNode(3)))
    expect(str2tree(s)).toEqual(expected)
  })

  it('should handle nested children', () => {
    const s = '1(2(3(4)))'
    const expected = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))))
    expect(str2tree(s)).toEqual(expected)
  })
})
