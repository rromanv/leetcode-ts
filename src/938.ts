/**
 * 938. Range Sum of BST
 * https://leetcode.com/problems/range-sum-of-bst/
 * Easy
 *
 * Given the root node of a binary search tree (BST) and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range [low, high].
 *
 * Algorithm: Depth-First Search (DFS)
 * Time Complexity: O(h+k) where h is the height of the tree and k is the number of nodes with values in the range [low, high]
 * Space Complexity: O(h)
 *
 * @param {TreeNode | null} root - Root of the binary search tree
 * @param {number} low - Lower bound of the range (inclusive)
 * @param {number} high - Upper bound of the range (inclusive)
 * @returns {number} - Sum of all node values in the given range
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0

  if (root.val < low) return rangeSumBST(root.right, low, high)

  if (root.val > high) return rangeSumBST(root.left, low, high)

  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
}

export { TreeNode, rangeSumBST }
