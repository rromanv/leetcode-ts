import { describe, it, expect } from 'vitest'
import { BSTIterator, TreeNode } from '@/173'

describe('BSTIterator', () => {
  it('should return false for hasNext on empty tree', () => {
    const it = new BSTIterator(null)
    expect(it.hasNext()).toBe(false)
  })

  it('should iterate a single-node tree', () => {
    const root = new TreeNode(42)
    const it = new BSTIterator(root)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(42)
    expect(it.hasNext()).toBe(false)
  })

  it('should iterate a left-skewed tree', () => {
    //    3
    //   /
    //  2
    // /
    //1
    const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)))
    const it = new BSTIterator(root)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(1)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(2)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(3)
    expect(it.hasNext()).toBe(false)
  })

  it('should iterate a right-skewed tree', () => {
    // 1
    //  \
    //   2
    //    \
    //     3
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
    const it = new BSTIterator(root)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(1)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(2)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(3)
    expect(it.hasNext()).toBe(false)
  })

  it('should iterate a balanced BST', () => {
    //     2
    //    / \
    //   1   3
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    const it = new BSTIterator(root)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(1)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(2)
    expect(it.hasNext()).toBe(true)
    expect(it.next()).toBe(3)
    expect(it.hasNext()).toBe(false)
  })
})
