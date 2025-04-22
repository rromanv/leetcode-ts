import { describe, it, expect } from 'vitest'
import { maxSubArray } from '@/53'

describe('53. Maximum Subarray', () => {
  it('should return the maximum subarray sum for a mix of positive and negative numbers', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expect(maxSubArray(nums)).toBe(6) // [4, -1, 2, 1] has the largest sum 6.
  })

  it('should return the number itself if the array contains only one element', () => {
    const nums = [1]
    expect(maxSubArray(nums)).toBe(1)
  })

  it('should return the sum of all numbers if all are positive', () => {
    const nums = [5, 4, -1, 7, 8]
    expect(maxSubArray(nums)).toBe(23) // The whole array is the maximum subarray.
  })

  it('should return the largest single number if all numbers are negative', () => {
    const nums = [-5, -1, -3]
    expect(maxSubArray(nums)).toBe(-1)
  })

  it('should handle an array with a single negative number', () => {
    const nums = [-1]
    expect(maxSubArray(nums)).toBe(-1)
  })

  it('should handle an array with multiple negative numbers', () => {
    const nums = [-2, -1]
    expect(maxSubArray(nums)).toBe(-1)
  })

  it('should handle zeros correctly', () => {
    const nums = [0, -1, 0, 1]
    expect(maxSubArray(nums)).toBe(1)
  })

  it('should handle zeros at the beginning and end', () => {
    const nums = [0, 0, -2, 1, -1, 0]
    expect(maxSubArray(nums)).toBe(1)
  })
})
