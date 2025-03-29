/**
 *  987. Vertical Order Traversal of a Binary Tree
 *  https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 *  Hard
 *
 * Returns the vertical order traversal of the nodes in a binary tree
 *
 * Algorithm:
 * - Perform a DFS traversal to collect nodes by column and depth.
 * - Sort nodes in each column by depth, and then by value if depths are equal.
 * - Construct the result array from the sorted nodes.
 *
 * Time Complexity: O(n log n), where n is the number of nodes in the tree.
 * Space Complexity: O(n), for the nodeStore map and recursion stack.
 *
 * @param {TreeNode | null} root - The root node of the binary tree
 * @return {number[][]} - The vertical order traversal of the nodes' values
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

function verticalTraversal(root: TreeNode | null): number[][] {
  if (!root) return []

  const nodeStore = new Map<number, NodeStore[]>()
  let minCol = 0
  let maxCol = 0

  type NodeStore = {
    depth: number
    val: number
  }

  const dfs = (node: TreeNode | null, depth: number, column: number, store: Map<number, NodeStore[]>) => {
    if (!node) return

    store.set(column, [...(store.get(column) ?? []), { depth, val: node.val }])

    dfs(node.left, depth + 1, column - 1, store)
    dfs(node.right, depth + 1, column + 1, store)

    minCol = Math.min(column, minCol)
    maxCol = Math.max(column, maxCol)
  }

  dfs(root, 0, 0, nodeStore)

  const result = new Array<number[]>()

  for (let col = minCol; col <= maxCol; col++) {
    result.push(
      nodeStore
        .get(col)!
        .sort((a, b) => {
          if (a.depth === b.depth) return a.val - b.val
          return a.depth - b.depth
        })
        .map((elem) => elem.val),
    )
  }

  return result
}

export { TreeNode, verticalTraversal }
