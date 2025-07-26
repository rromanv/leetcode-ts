/**
 * 2858. Minimum Edge Reversals So Every Node Is Reachable
 * https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/
 * Hard
 *
 * Given a tree with directed edges, find the minimum number of edge reversals
 * needed so that every node is reachable from every other node.
 *
 * Algorithm: Tree rerooting with two-pass DFS
 * Time Complexity: O(n) - two DFS traversals
 * Space Complexity: O(n) - adjacency list and result array
 *
 * @param {number} n - The number of nodes in the tree
 * @param {number[][]} edges - Array of directed edges [from, to]
 * @returns {number[]} Array where result[i] is the minimum reversals needed when node i is the root
 */

type Node = number

enum EdgeType {
  Direct = 0,
  Reverse = 1,
}

function minEdgeReversals(n: number, edges: number[][]): number[] {
  const edgeList: [Node, EdgeType][][] = Array.from({ length: n }, () => [])

  for (const [from, to] of edges) {
    edgeList[from].push([to, EdgeType.Direct])
    edgeList[to].push([from, EdgeType.Reverse])
  }

  const minEdges: number[] = Array(n).fill(0)

  const dfs = (node: Node, parent: Node) => {
    for (const [neighbor, edgeType] of edgeList[node]) {
      if (neighbor === parent) continue

      minEdges[0] += edgeType
      dfs(neighbor, node)
    }
  }

  const dfs2 = (node: Node, parent: Node) => {
    for (const [neighbor, edgeType] of edgeList[node]) {
      if (neighbor === parent) continue
      minEdges[neighbor] = minEdges[node] + (edgeType === EdgeType.Direct ? 1 : -1)
      dfs2(neighbor, node)
    }
  }

  dfs(0, -1)
  dfs2(0, -1)
  return minEdges
}

export { minEdgeReversals }
