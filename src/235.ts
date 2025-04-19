/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * {@link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ | Link}
 * Difficulty: Easy
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q
 * as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Algorithm: Iterative traversal starting from the root node.
 *   - If both p and q values are less than the current node's value, move to the left child.
 *   - If both p and q values are greater than the current node's value, move to the right child.
 *   - Otherwise, the current node is the LCA because the paths diverge here, or one node is an ancestor of the other.
 * Time Complexity: O(H), where H is the height of the BST. O(N) in the worst case (skewed tree), O(log N) for a balanced tree.
 * Space Complexity: O(1) for the iterative approach.
 *
 * @param root The root of the binary search tree.
 * @param p A node in the BST.
 * @param q Another node in the BST.
 * @returns The lowest common ancestor node of p and q.
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || !p || !q) return null

  let currentNode: TreeNode | null = root

  while (currentNode) {
    if (p.val > currentNode.val && q.val > currentNode.val) currentNode = currentNode.right
    else if (p.val < currentNode.val && q.val < currentNode.val) currentNode = currentNode?.left
    else return currentNode
  }

  return null
}

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

export { lowestCommonAncestor, TreeNode }
