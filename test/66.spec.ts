import { describe, it, expect } from 'vitest'
import { plusOne } from '@/66'

describe('66. Plus One', () => {
  it('should increment a simple number', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
  })

  it('should handle carry-over within the array', () => {
    expect(plusOne([4, 3, 2, 9])).toEqual([4, 3, 3, 0])
  })

  it('should handle carry-over resulting in a larger array', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0])
  })

  it('should handle single digit 9', () => {
    expect(plusOne([9])).toEqual([1, 0])
  })

  it('should handle zero', () => {
    // Although the problem states no leading zeros, a single [0] could be an edge case interpretation
    // or result from intermediate steps if the problem context were different.
    // Let's assume [0] means the integer 0.
    expect(plusOne([0])).toEqual([1])
  })

  it('should handle large numbers', () => {
    expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4,
    ])
  })
})
