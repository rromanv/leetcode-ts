import { describe, it, expect } from 'vitest'
import { countSubstrings } from '@/647'

describe('647. Palindromic Substrings', () => {
  it('returns 3 for "abc" (no repeated characters)', () => {
    expect(countSubstrings('abc')).toBe(3)
  })

  it('returns 6 for "aaa" (all substrings are palindromes)', () => {
    expect(countSubstrings('aaa')).toBe(6)
  })

  it('returns 10 for "ababa" (multiple overlapping palindromes)', () => {
    expect(countSubstrings('ababa')).toBe(9)
  })

  it('returns 1 for a single character', () => {
    expect(countSubstrings('a')).toBe(1)
  })

  it('returns 0 for an empty string', () => {
    expect(countSubstrings('')).toBe(0)
  })

  it('handles long strings with no palindromes except single characters', () => {
    expect(countSubstrings('abcdefg')).toBe(7)
  })

  it('handles palindromes at the ends', () => {
    expect(countSubstrings('racecar')).toBe(10)
  })

  it('handles string with all same characters', () => {
    expect(countSubstrings('aaaa')).toBe(10)
  })
})
