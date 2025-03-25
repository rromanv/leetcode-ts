/**
 * 1650. Lowest Common Ancestor of a Binary Search Tree III
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree-iii
 * Medium
 */

class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  parent: _Node | null

  constructor(val?: number) {
    this.val = val ?? 0
    this.left = null
    this.right = null
    this.parent = null
  }
}

function lowestCommonAncestor(p: _Node | null, q: _Node | null): _Node | null {
  if (!p || !q) throw new Error('Two Nodes need to be provided as p and q respectively')

  if (p.val === q.val) return p

  if (!p.parent) return p
  if (!q.parent) return q

  let pNode = p
  let qNode = q

  while (pNode !== qNode) {
    pNode = pNode.parent ?? q
    qNode = qNode.parent ?? p
  }

  return pNode
}

export { lowestCommonAncestor, _Node }
