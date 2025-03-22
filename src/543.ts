/*
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree
 * Easy
 */

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0

  type Depth = number
  type Diameter = number

  const depthAndDiameter = (node: TreeNode | null): [Depth, Diameter] => {
    if (!node) return [0, 0]

    const [leftDepth, leftDiameter] = depthAndDiameter(node.left)
    const [rightDepth, rightDiameter] = depthAndDiameter(node.right)

    const currentDepth = Math.max(leftDepth, rightDepth) + 1
    const currentDiameter = Math.max(leftDepth + rightDepth, leftDiameter, rightDiameter)

    return [currentDepth, currentDiameter]
  }

  const [, maxDiameter] = depthAndDiameter(root)

  return maxDiameter
}

export { TreeNode, diameterOfBinaryTree }
