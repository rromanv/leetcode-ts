/**
 * 116. Populating Next Right Pointers in Each Node
 * {@link https://leetcode.com/problems/populating-next-right-pointers-in-each-node/ | Link}
 * Difficulty: Medium
 *
 * You are given a perfect binary tree where all leaves are on the same level,
 * and every parent has two children. The binary tree has the following definition:
 *
 * ```typescript
 * class Node {
 *   val: number
 *   left: Node | null
 *   right: Node | null
 *   next: Node | null
 *   constructor(val?: number, left?: Node | null, right?: Node | null, next?: Node | null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *     this.next = (next===undefined ? null : next)
 *   }
 * }
 * ```
 *
 * Populate each next pointer to point to its next right node. If there is no next right node,
 * the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 * You may only use constant extra space.
 *
 * Algorithm: Level-order traversal using existing `next` pointers.
 * Time Complexity:  O(N), where N is the number of nodes.
 * Space Complexity:  O(1)
 *
 * @param root The root of the perfect binary tree.
 * @returns The root of the tree with next pointers populated.
 */
function connect(root: Node | null): Node | null {
  if (!root) {
    return null
  }

  let leftmost: Node | null = root

  while (leftmost && leftmost.left) {
    let head: Node | null = leftmost
    while (head) {
      if (head.left) {
        head.left.next = head.right
      }

      if (head.right && head.next) {
        head.right.next = head.next.left
      }

      head = head.next
    }

    leftmost = leftmost.left
  }
  return root
}

// Definition for a Node.
class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null, next?: Node | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

export { connect, Node }
