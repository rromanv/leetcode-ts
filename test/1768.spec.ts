import { describe, expect, it } from 'vitest'
import { mergeAlternately } from '../src/1768'

describe('1768. Merge Strings Alternately', () => {
  it('should merge two strings of equal length', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr')
  })

  it('should merge when first string is longer', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd')
  })

  it('should merge when second string is longer', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs')
  })

  it('should handle empty first string', () => {
    expect(mergeAlternately('', 'xyz')).toBe('xyz')
  })

  it('should handle empty second string', () => {
    expect(mergeAlternately('abc', '')).toBe('abc')
  })

  it('should handle both empty strings', () => {
    expect(mergeAlternately('', '')).toBe('')
  })

  it('should handle single character strings', () => {
    expect(mergeAlternately('a', 'b')).toBe('ab')
  })
})
