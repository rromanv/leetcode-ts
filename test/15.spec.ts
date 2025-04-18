// filepath: /Users/rromanv/projects/leetcode-ts/test/15.spec.ts
import { describe, expect, it } from 'vitest'
import { threeSum } from '@/15'

describe('15. 3Sum', () => {
  it('Example 1: nums = [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })

  it('No triplets: nums = [1,2,3] => []', () => {
    expect(threeSum([1, 2, 3])).toEqual([])
  })

  it('All zeros: nums = [0,0,0,0] => [[0,0,0]]', () => {
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]])
  })

  it('Less than three elements: nums = [1,2] => []', () => {
    expect(threeSum([1, 2])).toEqual([])
  })

  it('Mixed positives and negatives with no valid triplet', () => {
    expect(threeSum([3, -2, 1, 0])).toEqual([])
  })
})
