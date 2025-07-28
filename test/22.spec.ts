import { describe, expect, it } from 'vitest'
import { generateParenthesis } from '../src/22'

describe('22. Generate Parentheses', () => {
  it('should return all combinations for n = 1', () => {
    expect(generateParenthesis(1)).toEqual(['()'])
  })

  it('should return all combinations for n = 2', () => {
    expect(generateParenthesis(2).sort()).toEqual(['(())', '()()'].sort())
  })

  it('should return all combinations for n = 3', () => {
    expect(generateParenthesis(3).sort()).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'].sort())
  })

  it('should handle n = 0 edge case', () => {
    expect(generateParenthesis(0)).toEqual([])
  })

  it('should handle larger n (e.g., n = 4) with correct count', () => {
    const result = generateParenthesis(4)
    expect(result.length).toBe(14)
    // spot check a few known combinations
    expect(result).toContain('(((())))')
    expect(result).toContain('()()()()')
  })
})
