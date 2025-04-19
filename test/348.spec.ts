import { describe, it, expect } from 'vitest'
import { TicTacToe } from '@/348'

describe('348. Design Tic-Tac-Toe', () => {
  it('should detect player 1 win on row', () => {
    const ticTacToe = new TicTacToe(3)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(1, 2, 2)
    ticTacToe.move(1, 1, 1)
    ticTacToe.move(1, 0, 2)
    expect(ticTacToe.move(0, 1, 1)).toBe(0) // No win yet
    ticTacToe.move(2, 0, 2)
    expect(ticTacToe.move(0, 2, 1)).toBe(1) // Player 1 wins row 0
  })

  it('should detect player 2 win on column', () => {
    const ticTacToe = new TicTacToe(3)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(0, 2, 2)
    ticTacToe.move(1, 0, 1)
    ticTacToe.move(1, 2, 2)
    expect(ticTacToe.move(2, 1, 1)).toBe(0) // No win yet
    expect(ticTacToe.move(2, 2, 2)).toBe(2) // Player 2 wins col 2
  })

  it('should detect player 1 win on diagonal', () => {
    const ticTacToe = new TicTacToe(3)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(0, 1, 2)
    ticTacToe.move(1, 1, 1)
    ticTacToe.move(0, 2, 2)
    expect(ticTacToe.move(2, 2, 1)).toBe(1) // Player 1 wins main diagonal
  })

  it('should detect player 2 win on anti-diagonal', () => {
    const ticTacToe = new TicTacToe(3)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(0, 2, 2)
    ticTacToe.move(1, 0, 1)
    ticTacToe.move(1, 1, 2)
    ticTacToe.move(2, 2, 1)
    expect(ticTacToe.move(2, 0, 2)).toBe(2) // Player 2 wins anti-diagonal
  })

  it('should return 0 if no one wins after several moves', () => {
    const ticTacToe = new TicTacToe(3)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(1, 1, 2)
    ticTacToe.move(0, 1, 1)
    ticTacToe.move(0, 2, 2)
    expect(ticTacToe.move(2, 0, 1)).toBe(0)
  })

  it('should handle a 2x2 board', () => {
    const ticTacToe = new TicTacToe(2)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(1, 0, 2)
    expect(ticTacToe.move(0, 1, 1)).toBe(1) // Player 1 wins row 0
  })

  it('should handle a larger board (4x4)', () => {
    const ticTacToe = new TicTacToe(4)
    ticTacToe.move(0, 0, 1)
    ticTacToe.move(1, 1, 2)
    ticTacToe.move(1, 0, 1)
    ticTacToe.move(2, 2, 2)
    ticTacToe.move(2, 0, 1)
    ticTacToe.move(3, 3, 2)
    expect(ticTacToe.move(3, 0, 1)).toBe(1) // Player 1 wins col 0
  })
})
