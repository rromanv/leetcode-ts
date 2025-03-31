import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '@/26'

describe('26. Remove Duplicates from Sorted Array', () => {
  it('should handle array with duplicates', () => {
    const nums = [1, 1, 2]
    expect(removeDuplicates(nums)).toBe(2)
    expect(nums.slice(0, 2)).toEqual([1, 2])
  })

  it('should handle array with multiple duplicates', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDuplicates(nums)).toBe(5)
    expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4])
  })

  it('should handle array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5]
    expect(removeDuplicates(nums)).toBe(5)
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle array with single element', () => {
    const nums = [1]
    expect(removeDuplicates(nums)).toBe(1)
    expect(nums.slice(0, 1)).toEqual([1])
  })

  it('should handle empty array', () => {
    const nums: number[] = []
    expect(removeDuplicates(nums)).toBe(0)
    expect(nums).toEqual([])
  })

  it('should handle array with all same elements', () => {
    const nums = [1, 1, 1, 1, 1]
    expect(removeDuplicates(nums)).toBe(1)
    expect(nums.slice(0, 1)).toEqual([1])
  })
})
