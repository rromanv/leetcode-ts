import { describe, it, expect } from 'vitest'
import { subsets } from '@/78'

// Helper function to sort inner arrays and the outer array for comparison
// This ensures that the order of subsets or elements within subsets doesn't affect the test result.
const sortSubsets = (arr: number[][]): string => {
  const sortedInner = arr.map((sub) => [...sub].sort((a, b) => a - b))
  // Sort the outer array based on the string representation of sorted inner arrays
  return JSON.stringify(
    sortedInner.sort((a, b) => {
      const strA = JSON.stringify(a)
      const strB = JSON.stringify(b)
      return strA.localeCompare(strB)
    }),
  )
}

describe('78. Subsets', () => {
  it('should return all subsets for a typical case with multiple elements', () => {
    const nums = [1, 2, 3]
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
    const result = subsets(nums)
    expect(sortSubsets(result)).toEqual(sortSubsets(expected))
  })

  it('should return subsets for an array with a single element', () => {
    const nums = [0]
    const expected = [[], [0]]
    const result = subsets(nums)
    expect(sortSubsets(result)).toEqual(sortSubsets(expected))
  })

  it('should return only the empty set for an empty input array', () => {
    const nums: number[] = []
    const expected = [[]]
    const result = subsets(nums)
    expect(sortSubsets(result)).toEqual(sortSubsets(expected))
  })

  it('should handle an array with two elements', () => {
    const nums = [4, 5]
    const expected = [[], [4], [5], [4, 5]]
    const result = subsets(nums)
    expect(sortSubsets(result)).toEqual(sortSubsets(expected))
  })

  it('should handle an array with negative numbers', () => {
    const nums = [-1, -2]
    const expected = [[], [-1], [-2], [-1, -2]]
    const result = subsets(nums)
    expect(sortSubsets(result)).toEqual(sortSubsets(expected))
  })
})
