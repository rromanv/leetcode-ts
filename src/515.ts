/**
 * 515. Find Largest Value in Each Tree Row
 * {@link https://leetcode.com/problems/find-largest-value-in-each-tree-row/ | Link}
 * Difficulty: Medium
 * Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
 *
 * Algorithm: BFS with track of Current Max per level
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * @param root The root of the binary tree.
 * @returns An array of the largest value in each row.
 */
function largestValues(root: TreeNode | null): number[] {
  if (!root) return []

  type Level = number
  type NodeQueue = [TreeNode, Level]

  const nodeQueue: NodeQueue[] = [[root, 0]]

  const maxPerLevel = new Map<Level, number>()

  while (nodeQueue.length > 0) {
    const [node, level] = nodeQueue.shift()!

    if (!maxPerLevel.has(level) || maxPerLevel.get(level)! < node.val) maxPerLevel.set(level, node.val)

    if (node.left) nodeQueue.push([node.left, level + 1])
    if (node.right) nodeQueue.push([node.right, level + 1])
  }

  return [...maxPerLevel.values()]
}

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

export { largestValues, TreeNode }
