import { describe, expect, it } from 'vitest'
import { subarraySum } from '../src/560'

describe('560. Subarray Sum Equals K', () => {
  it('should return the total number of continuous subarrays whose sum equals to k', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2)
    expect(subarraySum([1, 2, 3], 3)).toBe(2)
  })

  it('should handle arrays with negative numbers', () => {
    expect(subarraySum([1, -1, 1], 0)).toBe(2)
    expect(subarraySum([-2, -1, 2, 1], 1)).toBe(2)
    expect(subarraySum([3, -3, 3, -3], 0)).toBe(4)
  })

  it('should handle edge cases', () => {
    expect(subarraySum([], 5)).toBe(0)
    expect(subarraySum([5], 5)).toBe(1)
    expect(subarraySum([1], 0)).toBe(0)
  })

  it('should handle larger arrays', () => {
    expect(subarraySum([1, 2, 1, 2, 1], 3)).toBe(4)
    expect(subarraySum([0, 0, 0, 0], 0)).toBe(10)
    expect(subarraySum([4, 2, -1, -2, 3, 5], 6)).toBe(3)
  })

  it('should handle arrays with duplicate sums', () => {
    expect(subarraySum([1, 2, 3, -3, 1, 2], 3)).toBe(6)
    expect(subarraySum([1, 1, 1, 1, 1], 3)).toBe(3)
  })
})
