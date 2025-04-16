/**
 * 863. All Nodes Distance K in Binary Tree
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 * Medium
 *
 * Given the root of a binary tree, a target node, and an integer K, return a list of the values of all nodes that have a distance K from the target node.
 *
 * Algorithm: DFS to build a parentMap and BFS with queue to save and calculate the distance.
 * Time Complexity: O(n) where n is the number of nodes in the tree
 * Space Complexity: O(n) where n is the number of nodes in the tree
 *
 * @param {TreeNode | null} root - The root node of the binary tree.
 * @param {TreeNode | null} target - The target node in the binary tree.
 * @param {number} k - The distance from the target node.
 * @returns {number[]} - The values of all nodes at distance K from the target node.
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

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  if (!root || !target) return []

  const parentMap = new Map<TreeNode, TreeNode | null>()

  const buildParentMap = (node: TreeNode | null, parent: TreeNode | null) => {
    if (!node) return
    parentMap.set(node, parent)
    buildParentMap(node.left, node)
    buildParentMap(node.right, node)
  }

  buildParentMap(root, null)

  const result: number[] = []
  const visited = new Set<TreeNode>()
  const queue: Array<[TreeNode, number]> = [[target, 0]]
  visited.add(target)

  while (queue.length > 0) {
    const [node, dist] = queue.shift()!
    if (dist === k) {
      result.push(node.val)
    } else if (dist < k) {
      for (const neighbor of [node.left, node.right, parentMap.get(node)]) {
        if (neighbor && !visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push([neighbor, dist + 1])
        }
      }
    }
  }

  return result
}

export { distanceK, TreeNode }
