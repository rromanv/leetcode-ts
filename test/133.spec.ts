// filepath: /Users/rromanv/projects/leetcode-ts/test/133.spec.ts
import { expect, test } from 'vitest'
import { cloneGraph, Node } from '@/133'

// Helper function to create graphs for testing
function createTestGraph(adjList: number[][]): Node | null {
  if (adjList.length === 0) return null

  // Create all nodes first
  const nodes: Node[] = Array.from({ length: adjList.length }, (_, i) => new Node(i + 1))

  // Connect neighbors according to adjacency list
  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map((val) => nodes[val - 1])
  })

  return nodes[0]
}

// Helper function to convert graph to adjacency list for comparison
function graphToAdjList(node: Node | null): number[][] {
  if (!node) return []

  const visited = new Set<number>()
  const adjList: number[][] = []

  function dfs(current: Node): void {
    if (visited.has(current.val)) return

    visited.add(current.val)

    // Make sure the adjacency list has enough space
    while (adjList.length < current.val) {
      adjList.push([])
    }

    // Add neighbors
    adjList[current.val - 1] = current.neighbors.map((n) => n.val).sort((a, b) => a - b)

    // Traverse neighbors
    for (const neighbor of current.neighbors) {
      dfs(neighbor)
    }
  }

  dfs(node)
  return adjList
}

test('Empty graph (null) => null', () => {
  expect(cloneGraph(null)).toBeNull()
})

test('Single node graph [[]] => single node clone', () => {
  const original = new Node(1)
  const clone = cloneGraph(original)

  expect(clone).not.toBe(original) // Should be a different object
  expect(clone?.val).toBe(1)
  expect(clone?.neighbors).toHaveLength(0)
})

test('Simple graph with 2 nodes [[2], [1]] => deep clone', () => {
  const adjList = [[2], [1]]
  const original = createTestGraph(adjList)
  const clone = cloneGraph(original)

  // Verify structure through adjacency list
  expect(graphToAdjList(clone)).toEqual(adjList)

  // Verify it's a deep clone (different object references)
  expect(clone).not.toBe(original)
  if (clone && original) {
    expect(clone.neighbors[0]).not.toBe(original.neighbors[0])
  }
})

test('Standard graph with 4 nodes [[2,4], [1,3], [2,4], [1,3]] => deep clone', () => {
  const adjList = [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ]
  const original = createTestGraph(adjList)
  const clone = cloneGraph(original)

  // Verify structure
  expect(graphToAdjList(clone)).toEqual(adjList)
})

test('Cyclic graph with 3 nodes [[2,3], [1,3], [1,2]] => deep clone', () => {
  const adjList = [
    [2, 3],
    [1, 3],
    [1, 2],
  ]
  const original = createTestGraph(adjList)
  const clone = cloneGraph(original)

  // Verify structure
  expect(graphToAdjList(clone)).toEqual(adjList)

  // Verify cycles are preserved
  if (clone) {
    const firstNode = clone
    const secondNode = firstNode.neighbors[0]
    const thirdNode = firstNode.neighbors[1]

    // Check that second node has first and third as neighbors
    expect(secondNode.neighbors).toContainEqual(expect.objectContaining({ val: firstNode.val }))
    expect(secondNode.neighbors).toContainEqual(expect.objectContaining({ val: thirdNode.val }))

    // Check that third node has first and second as neighbors
    expect(thirdNode.neighbors).toContainEqual(expect.objectContaining({ val: firstNode.val }))
    expect(thirdNode.neighbors).toContainEqual(expect.objectContaining({ val: secondNode.val }))
  }
})
