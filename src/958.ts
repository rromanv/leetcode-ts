/**
 * Definition for a binary tree node.
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

/**
 * 958. Check Completeness of a Binary Tree
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, determine if it is a complete binary tree.
 * In a complete binary tree, every level, except possibly the last, is completely filled,
 * and all nodes in the last level are as far left as possible. It can have between 1 and 2h
 * nodes inclusive at the last level h.
 *
 * Algorithm: BFS and keeping track of nulls
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {TreeNode | null} root The root of the binary tree.
 * @returns {boolean} True if the tree is complete, false otherwise.
 */
function isCompleteTree(root: TreeNode | null): boolean {
  if (!root) return true

  const queue: (TreeNode | null)[] = [root]
  let foundNull = false

  while (queue.length) {
    const current = queue.shift()

    if (!current) foundNull = true
    else {
      if (foundNull) return false
      queue.push(current.left, current.right)
    }
  }
  return true
}

export { isCompleteTree, TreeNode }
