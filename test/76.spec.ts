import { describe, expect, it } from 'vitest'
import { minWindow } from '../src/76'

describe('76. Minimum Window Substring', () => {
  it('should return the minimum window substring that contains all characters in t', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC')
    expect(minWindow('a', 'a')).toBe('a')
  })

  it('should return empty string when no valid window exists', () => {
    expect(minWindow('a', 'b')).toBe('')
    expect(minWindow('abc', 'def')).toBe('')
  })

  it('should handle cases with repeated characters in t', () => {
    expect(minWindow('ADOBECODEBANC', 'AAC')).toBe('ADOBECODEBA')
    expect(minWindow('aaabbbc', 'abc')).toBe('abbbc')
  })

  it('should handle edge cases', () => {
    expect(minWindow('', 'a')).toBe('')
    expect(minWindow('a', '')).toBe('')
    expect(minWindow('', '')).toBe('')
  })

  it('should correctly handle windows with exact matches', () => {
    expect(minWindow('abc', 'abc')).toBe('abc')
    expect(minWindow('abcdef', 'def')).toBe('def')
  })

  it('should find the minimum window when multiple valid windows exist', () => {
    expect(minWindow('acbbaca', 'aba')).toBe('baca')
    expect(minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd')).toBe('abbbbbcdd')
  })
})
