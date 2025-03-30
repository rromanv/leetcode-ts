import { describe, expect, it } from 'vitest'
import { minAddToMakeValid } from '../src/921'

describe('921. Minimum Add to Make Parentheses Valid', () => {
  it('should return 1 when input is "())"', () => {
    expect(minAddToMakeValid('())')).toBe(1)
  })

  it('should return 3 when input is "((("', () => {
    expect(minAddToMakeValid('(((')).toBe(3)
  })

  it('should return 0 when input is "()"', () => {
    expect(minAddToMakeValid('()')).toBe(0)
  })

  it('should return 4 when input is "()))(("', () => {
    expect(minAddToMakeValid('()))((')).toBe(4)
  })

  it('should return 0 when input is ""', () => {
    expect(minAddToMakeValid('')).toBe(0)
  })

  it('should return 2 when input is ")("', () => {
    expect(minAddToMakeValid(')(')).toBe(2)
  })

  it('should return 0 when input is "(())()"', () => {
    expect(minAddToMakeValid('(())()')).toBe(0)
  })

  it('should return 2 when input is "((()"', () => {
    expect(minAddToMakeValid('((()')).toBe(2)
  })
})
