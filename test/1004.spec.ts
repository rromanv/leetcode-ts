import { describe, expect, it } from 'vitest'
import { longestOnes } from '../src/1004'

describe('1004. Max Consecutive Ones III', () => {
  it('should return the max number of consecutive 1s with at most k flips', () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6)
    expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10)
  })

  it('should handle the case where k = 0 (no flips allowed)', () => {
    expect(longestOnes([1, 1, 1, 0, 1, 1, 0, 0, 1, 1], 0)).toBe(3)
    expect(longestOnes([0, 0, 0], 0)).toBe(0)
  })

  it('should handle the case where all elements can be flipped', () => {
    expect(longestOnes([0, 0, 0, 0], 4)).toBe(4)
  })

  it('should handle the case where all elements are already 1s', () => {
    expect(longestOnes([1, 1, 1, 1], 2)).toBe(4)
  })

  it('should handle the case where k is larger than the number of 0s', () => {
    expect(longestOnes([0, 1, 1, 0, 0, 1, 1], 10)).toBe(7)
  })

  it('should handle empty array', () => {
    expect(longestOnes([], 5)).toBe(0)
  })

  it('should handle edge cases', () => {
    expect(longestOnes([0], 1)).toBe(1)
    expect(longestOnes([1], 0)).toBe(1)
  })
})
