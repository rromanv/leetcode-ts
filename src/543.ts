/**
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree
 * Easy
 *
 * Algorithm: DFS recursive
 * Time complexity: O(N)
 * Space complexity: O(H), where H is the height of the tree (due to recursion stack)
 *
 * @param {TreeNode | null} root - The root of the tree to evaluate.
 * @returns {number} The diameter of the tree.
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0

  const depth = (node: TreeNode | null): number => {
    if (!node) return 0

    const leftDepth = depth(node.left)
    const rightDepth = depth(node.right)

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)

    return Math.max(leftDepth, rightDepth) + 1
  }

  depth(root)

  return maxDiameter
}

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
export { TreeNode, diameterOfBinaryTree }
