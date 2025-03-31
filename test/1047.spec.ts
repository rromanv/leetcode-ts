import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../src/1047'

describe('1047. Remove All Adjacent Duplicates In String', () => {
  it('should remove adjacent duplicates until none remain', () => {
    expect(removeDuplicates('abbaca')).toBe('ca')
  })

  it('should handle string with no duplicates', () => {
    expect(removeDuplicates('abc')).toBe('abc')
  })

  it('should handle string with all duplicates', () => {
    expect(removeDuplicates('aaa')).toBe('a')
  })

  it('should handle empty string', () => {
    expect(removeDuplicates('')).toBe('')
  })

  it('should handle string with multiple layers of duplicates', () => {
    expect(removeDuplicates('abbbaca')).toBe('abaca')
  })
})
