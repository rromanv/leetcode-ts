import { describe, it, expect } from 'vitest'
import { connect, Node } from '../src/116'

// Helper function to build a perfect binary tree from an array representation
// (Level order, null indicates absence of node - though not needed for perfect tree)
function buildTree(arr: (number | null)[]): Node | null {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null
  }

  const root = new Node(arr[0])
  const queue: Node[] = [root]
  let i = 1

  while (i < arr.length) {
    const current = queue.shift()
    if (current) {
      // Left child
      if (i < arr.length && arr[i] !== null) {
        current.left = new Node(arr[i]!)
        queue.push(current.left)
      }
      i++
      // Right child
      if (i < arr.length && arr[i] !== null) {
        current.right = new Node(arr[i]!)
        queue.push(current.right)
      }
      i++
    }
  }
  return root
}

// Helper function to verify next pointers by level order traversal
// Returns an array where each element is a level, and '#' represents null next pointer
function verifyNextPointers(root: Node | null): (number | string)[][] {
  if (!root) {
    return []
  }

  const result: (number | string)[][] = []
  let queue: Node[] = [root]

  while (queue.length > 0) {
    const levelSize = queue.length
    const currentLevel: (number | string)[] = []
    let prevNode: Node | null = null // To link nodes within the level during traversal for verification

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!
      currentLevel.push(node.val)

      // Check if the actual next pointer matches the expected next node in the level
      if (i < levelSize - 1) {
        expect(node.next).toBe(queue[0] || null) // Check against the next node in the queue for this level
      } else {
        expect(node.next).toBeNull() // Last node in the level should have null next
        currentLevel.push('#') // Add '#' marker for end of level
      }

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(currentLevel)
  }
  return result // Return the structure for potential high-level checks if needed, though expects handle verification
}

describe('116. Populating Next Right Pointers in Each Node', () => {
  it('should return null for an empty tree', () => {
    const root = null
    const connectedRoot = connect(root)
    expect(connectedRoot).toBeNull()
  })

  it('should connect a single node tree (next should be null)', () => {
    const root = new Node(1)
    const connectedRoot = connect(root)
    expect(connectedRoot).toEqual(root) // Root itself doesn't change
    expect(connectedRoot?.next).toBeNull()
    verifyNextPointers(connectedRoot) // Use helper for consistency
  })

  it('should connect a perfect binary tree with 3 levels', () => {
    //       1 -> null
    //     /  \
    //    2 -> 3 -> null
    //   / \ / \
    //  4->5->6->7 -> null
    const root = buildTree([1, 2, 3, 4, 5, 6, 7])
    const connectedRoot = connect(root)

    // Verification using the helper function
    verifyNextPointers(connectedRoot)

    // Manual checks (optional, as helper does this)
    expect(connectedRoot?.val).toBe(1)
    expect(connectedRoot?.next).toBeNull()

    expect(connectedRoot?.left?.val).toBe(2)
    expect(connectedRoot?.left?.next?.val).toBe(3)
    expect(connectedRoot?.right?.val).toBe(3)
    expect(connectedRoot?.right?.next).toBeNull()

    expect(connectedRoot?.left?.left?.val).toBe(4)
    expect(connectedRoot?.left?.left?.next?.val).toBe(5)
    expect(connectedRoot?.left?.right?.val).toBe(5)
    expect(connectedRoot?.left?.right?.next?.val).toBe(6)
    expect(connectedRoot?.right?.left?.val).toBe(6)
    expect(connectedRoot?.right?.left?.next?.val).toBe(7)
    expect(connectedRoot?.right?.right?.val).toBe(7)
    expect(connectedRoot?.right?.right?.next).toBeNull()
  })

  it('should connect a perfect binary tree with 2 levels', () => {
    //       1 -> null
    //     /  \
    //    2 -> 3 -> null
    const root = buildTree([1, 2, 3])
    const connectedRoot = connect(root)

    verifyNextPointers(connectedRoot)

    expect(connectedRoot?.val).toBe(1)
    expect(connectedRoot?.next).toBeNull()
    expect(connectedRoot?.left?.val).toBe(2)
    expect(connectedRoot?.left?.next?.val).toBe(3)
    expect(connectedRoot?.right?.val).toBe(3)
    expect(connectedRoot?.right?.next).toBeNull()
  })
})
