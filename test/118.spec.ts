import { describe, it, expect } from 'vitest'
import { generate } from '@/118'

describe('generate', () => {
  it("generates Pascal's Triangle with 1 row", () => {
    expect(generate(1)).toEqual([[1]])
  })

  it("generates Pascal's Triangle with 5 rows", () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  })

  it('returns an empty array when numRows is 0', () => {
    expect(generate(0)).toEqual([])
  })

  it('handles large input like 10 rows', () => {
    expect(generate(10).length).toBe(10)
  })

  it('handles invalid negative input gracefully', () => {
    expect(generate(-3)).toEqual([])
  })
})
