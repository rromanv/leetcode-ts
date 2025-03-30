// filepath: /Users/rromanv/projects/leetcode-ts/src/133.ts
/**
 *  133. Clone Graph
 *  https://leetcode.com/problems/clone-graph/
 *  Medium
 *
 * Creates a deep copy of a connected undirected graph
 *
 * Algorithm: Use DFS with a hash map to track visited nodes and their clones.
 * For each node, create a clone if it doesn't exist yet, then recursively clone all neighbors.
 * Time Complexity: O(N + E) where N is the number of nodes and E is the number of edges
 * Space Complexity: O(N) for the visited map and recursion stack
 *
 * @param {Node | null} node - The reference of a node in the graph to be cloned
 * @return {Node | null} - A deep copy (clone) of the input graph
 */

// Definition for Node
class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

function cloneGraph(node: Node | null): Node | null {
  const cloned = new Map<Node, Node>()

  function dfs(currentNode: Node | null): Node | null {
    if (!currentNode) return null
    if (cloned.has(currentNode)) return cloned.get(currentNode)!

    const newNode = new Node(currentNode.val)
    cloned.set(currentNode, newNode)

    newNode.neighbors = currentNode.neighbors.map((neighbor) => dfs(neighbor)!)

    return newNode
  }

  return dfs(node)
}

export { cloneGraph, Node }
