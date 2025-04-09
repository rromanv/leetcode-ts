import { describe, it, expect } from 'vitest'
import { isSubsequence } from '@/392'

describe('isSubsequence', () => {
  it('should return true for valid subsequence', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
  })

  it('should return false for invalid subsequence', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
  })

  it('should return true for empty s', () => {
    expect(isSubsequence('', 'ahbgdc')).toBe(true)
  })

  it('should return true for empty s and t', () => {
    expect(isSubsequence('', '')).toBe(true)
  })

  it('should return false for empty t and non-empty s', () => {
    expect(isSubsequence('a', '')).toBe(false)
  })

  it('should return true when s equals t', () => {
    expect(isSubsequence('abc', 'abc')).toBe(true)
  })

  it('should return false when s is longer than t', () => {
    expect(isSubsequence('abcdef', 'abc')).toBe(false)
  })
})
