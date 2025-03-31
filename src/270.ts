/**
 * 270. Closest Binary Search Tree Value
 * https://leetcode.com/problems/closest-binary-search-tree-value
 * Easy
 *
 * Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.
 *
 * Algorithm: Binary Search Tree traversal with distance comparison
 * Time Complexity: O(H) where H is the height of the tree
 * Space Complexity: O(1) constant extra space
 *
 * @param {TreeNode | null} root - The root node of the binary search tree
 * @param {number} target - The target value to find the closest number to
 * @return {number} - The value in the BST that is closest to the target
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

function closestValue(root: TreeNode | null, target: number): number {
  if (!root) throw new Error('Tree is empty')

  let closestDistance = Infinity
  let result = 0
  let current: TreeNode | null = root

  while (current) {
    const distance = Math.abs(current.val - target)
    if (distance < closestDistance || (distance === closestDistance && current.val < result)) {
      closestDistance = distance
      result = current.val
    }
    if (current.val < target) current = current.right
    else current = current.left
  }

  return result
}

export { TreeNode, closestValue }
