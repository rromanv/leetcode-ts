/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Medium
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q
 * as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."
 *
 * Algorithm: Recursive DFS
 * Time Complexity: O(n) where n is the number of nodes in the tree
 * Space Complexity: O(h) where h is the height of the tree
 *
 * @param {TreeNode} root - Root node of the binary tree
 * @param {TreeNode} p - First node to find LCA for
 * @param {TreeNode} q - Second node to find LCA for
 * @returns {TreeNode | null} - The lowest common ancestor node
 */

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || !p || !q) throw new Error('Missing Parameters')

  const dfs = (node: TreeNode | null, looking: TreeNode, path: TreeNode[]): boolean => {
    if (!node) return false
    path.push(node)
    if (node === looking) return true
    if (dfs(node.left, looking, path) || dfs(node.right, looking, path)) return true
    path.pop()
    return false
  }

  const pathP = new Array<TreeNode>()
  const pathQ = new Array<TreeNode>()
  dfs(root, p, pathP)
  dfs(root, q, pathQ)

  let lca = null

  while (pathP[0] && pathQ[0] && pathP[0] === pathQ[0]) {
    lca = pathP[0]
    pathP.shift()
    pathQ.shift()
  }

  return lca
}

export { TreeNode, lowestCommonAncestor }
