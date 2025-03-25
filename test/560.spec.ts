import { describe, expect, it } from 'vitest'
import { subarraySum } from '../src/560'

describe('560. Subarray Sum Equals K', () => {
  it('should return the total number of continuous subarrays whose sum equals to k', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2)
    expect(subarraySum([1, 2, 3], 3)).toBe(2)
  })
})
