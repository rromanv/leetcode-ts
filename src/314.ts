/*
 * 314. Binary Tree Vertical Order Traversal (Premium)
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal
 * Medium
 *
 * Algorithm: BFS with column tracking
 * Time Complexity: O(N + C) (usually O(N))
 * Space Complexity: O(N)
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

function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const storage = new Map<number, number[]>()
  const queue: [TreeNode, number][] = [[root, 0]]

  let minColumn = 0
  let maxColumn = 0

  while (queue.length) {
    const [node, column] = queue.shift()!

    minColumn = Math.min(minColumn, column)
    maxColumn = Math.max(maxColumn, column)

    if (!storage.has(column)) storage.set(column, [])
    storage.get(column)!.push(node.val)

    if (node.left) queue.push([node.left, column - 1])
    if (node.right) queue.push([node.right, column + 1])
  }
  const result = new Array<number[]>()

  for (let column = minColumn; column <= maxColumn; column++) {
    result.push(storage.get(column)!)
  }
  return result
}

export { TreeNode, verticalOrder }
