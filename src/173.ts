/**
 * 173. Binary Search Tree Iterator
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * Medium
 *
 * Design an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 * Calling next() will return the next smallest number in the BST.
 *
 * Algorithm: Controlled In-order Traversal using a Stack
 * Time Complexity:
 *   - constructor: O(h) where h is the height of the tree (worst case O(N) for skewed tree)
 *   - next(): Amortized O(1), worst case O(h)
 *   - hasNext(): O(1)
 * Space Complexity: O(h) for the stack
 *
 * @param {TreeNode | null} root - The root node of the BST.
 * @returns {void}
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

class BSTIterator {
  private stack: TreeNode[] = []

  private pushLeftPath(node: TreeNode | null) {
    while (node) {
      this.stack.push(node)
      node = node.left
    }
  }

  constructor(root: TreeNode | null) {
    this.pushLeftPath(root)
  }

  next(): number {
    const nodeToReturn = this.stack.pop()!

    if (nodeToReturn.right) {
      this.pushLeftPath(nodeToReturn.right)
    }

    return nodeToReturn.val
  }
  hasNext(): boolean {
    return this.stack.length > 0
  }
}

export { BSTIterator, TreeNode }
