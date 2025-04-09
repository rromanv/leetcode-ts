import { describe, it, expect } from 'vitest'
import { moveZeroes } from '@/283'

describe('moveZeroes', () => {
  it('should move all zeros to the end while maintaining the order of non-zero elements', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })

  it('should handle an array with no zeros', () => {
    const nums = [1, 2, 3, 4]
    moveZeroes(nums)
    expect(nums).toEqual([1, 2, 3, 4])
  })

  it('should handle an array with all zeros', () => {
    const nums = [0, 0, 0, 0]
    moveZeroes(nums)
    expect(nums).toEqual([0, 0, 0, 0])
  })

  it('should handle an empty array', () => {
    const nums: number[] = []
    moveZeroes(nums)
    expect(nums).toEqual([])
  })

  it('should handle an array with one element', () => {
    const nums = [0]
    moveZeroes(nums)
    expect(nums).toEqual([0])

    const nums2 = [1]
    moveZeroes(nums2)
    expect(nums2).toEqual([1])
  })
})
