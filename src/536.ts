/**
 * 536. Construct Binary Tree from String
 * https://leetcode.com/problems/construct-binary-tree-from-string
 * Difficulty: Medium
 *
 * Given a string s representing a binary tree, construct the binary tree and return the root node.
 * The string consists of an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis represents a child subtree.
 *
 * Algorithm: Iterative Approach with a Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s - The string representation of the binary tree.
 * @returns {TreeNode | null} The root node of the constructed binary tree.
 */
function str2tree(s: string): TreeNode | null {
  if (!s.length) return null
  const stack: TreeNode[] = []
  let i = 0

  while (i < s.length) {
    if (s[i] === ')') {
      stack.pop()
      i++
    } else if (s[i] === '(') {
      i++
    } else {
      let start = i
      if (s[i] === '-') i++
      while (i < s.length && /\d/.test(s[i])) i++
      const num = parseInt(s.slice(start, i))
      const node = new TreeNode(num)

      if (stack.length) {
        const parent = stack[stack.length - 1]
        if (!parent.left) parent.left = node
        else parent.right = node
      }
      stack.push(node)
    }
  }
  return stack.length ? stack[0] : null
}

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

export { str2tree, TreeNode }
