/**
 * 129. Sum Root to Leaf Numbers
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 * Medium
 *
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 * For example, the root-to-leaf path 1->2->3 represents the number 123.
 * Return the total sum of all root-to-leaf numbers.
 * A leaf node is a node with no children.
 *
 * Algorithm: Depth-First Search (DFS)
 * Time Complexity: O(n) where n is the number of nodes in the tree
 * Space Complexity: O(n^2)
 *
 * @param {TreeNode | null} root - The root of the binary tree
 * @return {number} - The sum of all root-to-leaf numbers
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

function sumNumbers(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, currentPath: number[], allPaths: number[][]) => {
    if (!node) return
    currentPath.push(node.val)

    if (!node.left && !node.right) {
      allPaths.push([...currentPath])
    } else {
      dfs(node.left, currentPath, allPaths)
      dfs(node.right, currentPath, allPaths)
    }

    currentPath.pop()
  }

  const result: number[][] = []

  dfs(root, [], result)

  return result.reduce((sum, curr) => sum + Number(curr.join('')), 0)
}

export { TreeNode, sumNumbers }
