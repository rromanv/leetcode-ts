import { describe, it, expect } from 'vitest'
import { calculate } from '@/227' // corrected import path

describe('227. Basic Calculator II', () => {
  it('should handle addition and subtraction', () => {
    expect(calculate('3+2-1')).toBe(4)
  })

  it('should handle multiplication and division', () => {
    expect(calculate('3*2/3')).toBe(2)
  })

  it('should handle complex expressions with spaces', () => {
    expect(calculate('3+5 / 2')).toBe(5)
  })

  it('should respect order of operations', () => {
    expect(calculate('3+2*2')).toBe(7)
    expect(calculate(' 3/2 ')).toBe(1)
    expect(calculate(' 3+5 / 2 ')).toBe(5)
  })

  it('should handle more complex expressions', () => {
    expect(calculate('14-3/2')).toBe(13)
    expect(calculate('2*3+4')).toBe(10)
  })
})
