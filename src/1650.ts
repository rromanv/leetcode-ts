/**
 * 1650. Lowest Common Ancestor of a Binary Search Tree III
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree-iii
 * Medium
 *
 * Algorithm: Parent Transversal with Two Pointers
 * Time Complexity: O(h) where h is the height of the tree
 * Space Complexity: O(1)
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
  let pNode = p
  let qNode = q

  while (pNode !== qNode) {
    pNode = pNode?.parent ?? q
    qNode = qNode?.parent ?? p
  }

  return pNode
}

export { lowestCommonAncestor, _Node }
