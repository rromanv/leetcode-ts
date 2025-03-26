/**
 * 199. Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * Medium
 *
 * Given the root of a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * Algorithm: DFS
 * Time Complexity: To be determined
 * Space Complexity: To be determined
 *
 * @param {TreeNode | null} root - Root of the binary tree
 * @returns {number[]} - Values of nodes visible from the right side
 */

// Definition for a binary tree node
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const result = new Array<number>()

  const dfs = (node: TreeNode | null, level: number) => {
    if (!node) return
    if (level === result.length) result.push(node.val)
    dfs(node.right, level + 1)
    dfs(node.left, level + 1)
  }
  dfs(root, 0)
  return result
}

export { TreeNode, rightSideView }
