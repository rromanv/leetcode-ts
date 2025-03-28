// filepath: /Users/rromanv/projects/leetcode-ts/test/138.spec.ts
import { expect, test } from 'vitest'
import { copyRandomList, _Node as Node } from '@/138'

// Helper function to create test linked lists with random pointers
function createLinkedList(values: number[], randomIndices: (number | null)[]): Node | null {
  if (values.length === 0) return null

  // First create all nodes without connections
  const nodes: Node[] = values.map((val) => new Node(val))

  // Connect next pointers
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  // Connect random pointers
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].random = randomIndices[i] !== null ? nodes[randomIndices[i]!] : null
  }

  return nodes[0]
}

// Helper function to compare if two linked lists are structurally identical
function areLinkedListsEqual(list1: Node | null, list2: Node | null): boolean {
  if (!list1 && !list2) return true
  if (!list1 || !list2) return false

  // Create maps to track node positions
  const list1Positions = new Map<Node, number>()
  const list2Positions = new Map<Node, number>()

  let curr1: Node | null = list1
  let curr2: Node | null = list2
  let pos = 0

  // Map positions in both lists
  while (curr1 && curr2) {
    if (curr1.val !== curr2.val) return false

    list1Positions.set(curr1, pos)
    list2Positions.set(curr2, pos)

    curr1 = curr1.next
    curr2 = curr2.next
    pos++
  }

  // If one list is longer than the other
  if (curr1 || curr2) return false

  // Verify random pointers point to equivalent positions
  curr1 = list1
  curr2 = list2

  while (curr1 && curr2) {
    const random1 = curr1.random
    const random2 = curr2.random

    if (!random1 && !random2) {
      // Both random pointers are null, which is fine
    } else if (!random1 || !random2) {
      // One is null but the other isn't
      return false
    } else {
      // Compare positions that random pointers point to
      const pos1 = list1Positions.get(random1)
      const pos2 = list2Positions.get(random2)
      if (pos1 !== pos2) return false
    }

    curr1 = curr1.next
    curr2 = curr2.next
  }

  return true
}

test('[[7,null],[13,0],[11,4],[10,2],[1,0]] -> Deep copy with identical structure', () => {
  // Create input: [[7,null],[13,0],[11,4],[10,2],[1,0]]
  const head = createLinkedList([7, 13, 11, 10, 1], [null, 0, 4, 2, 0])

  // Get the deep copy
  const result = copyRandomList(head)

  // Verify it's a deep copy (not the same object)
  expect(result).not.toBe(head)

  // Verify structure is identical
  expect(areLinkedListsEqual(head, result)).toBe(true)
})

test('[[1,1],[2,1]] -> Deep copy with identical structure', () => {
  // Create input: [[1,1],[2,1]]
  const head = createLinkedList([1, 2], [1, 1])

  // Get the deep copy
  const result = copyRandomList(head)

  // Verify it's a deep copy (not the same object)
  expect(result).not.toBe(head)

  // Verify structure is identical
  expect(areLinkedListsEqual(head, result)).toBe(true)
})

test('[[3,null],[3,0],[3,null]] -> Deep copy with identical structure', () => {
  // Create input: [[3,null],[3,0],[3,null]]
  const head = createLinkedList([3, 3, 3], [null, 0, null])

  // Get the deep copy
  const result = copyRandomList(head)

  // Verify it's a deep copy (not the same object)
  expect(result).not.toBe(head)

  // Verify structure is identical
  expect(areLinkedListsEqual(head, result)).toBe(true)
})

test('Empty list -> null', () => {
  expect(copyRandomList(null)).toBeNull()
})

test('Single node with self-reference -> Deep copy with identical structure', () => {
  // Create a single node that points to itself
  const single = new Node(1)
  single.random = single

  const result = copyRandomList(single)

  // Verify it's a deep copy (not the same object)
  expect(result).not.toBe(single)

  // Check its value
  expect(result?.val).toBe(1)

  // Check that random points to itself (not to the original node)
  expect(result?.random).toBe(result)
})
