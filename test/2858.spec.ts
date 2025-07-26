import { describe, it, expect } from 'vitest'
import { minEdgeReversals } from '@/2858'

describe('2858. Minimum Edge Reversals So Every Node Is Reachable', () => {
  it('should handle a simple tree with 3 nodes', () => {
    const n = 3
    const edges = [
      [0, 1],
      [1, 2],
    ]
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([0, 1, 2])
    // Each position should contain the minimum reversals needed when that node is root
  })

  it('should handle a tree with 4 nodes and mixed edge directions', () => {
    const n = 4
    const edges = [
      [0, 1],
      [1, 2],
      [3, 1],
    ]
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([1, 2, 3, 1])
  })

  it('should handle a single node', () => {
    const n = 1
    const edges: number[][] = []
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([0])
  })

  it('should handle a tree with 5 nodes in star formation', () => {
    const n = 5
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([0, 1, 1, 1, 1])
    // Node 0 as root should need 0 reversals
    // Other nodes as root should need more reversals
  })

  it('should handle a linear tree with alternating directions', () => {
    const n = 4
    const edges = [
      [0, 1],
      [2, 1],
      [2, 3],
    ]
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([1, 2, 1, 2])
  })

  it('should handle a tree where all edges point towards center', () => {
    const n = 5
    const edges = [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ]
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([4, 3, 3, 3, 3])
  })

  it('should handle edge case with minimum tree size', () => {
    const n = 2
    const edges = [[0, 1]]
    const result = minEdgeReversals(n, edges)
    expect(result).toEqual([0, 1])
  })
})
