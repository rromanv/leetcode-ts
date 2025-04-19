/**
 * 348. Design Tic-Tac-Toe
 * {@link https://leetcode.com/problems/design-tic-tac-toe/ | Link}
 * Difficulty: Medium
 * Design a Tic-tac-toe game that is played between two players on an n x n grid.
 *
 * Algorithm: Move Check
 * Time Complexity: O(1) for move, O(n) for constructor initialization.
 * Space Complexity: O(n) to store row and column counts.
 *
 * @param {number} n
 */
class TicTacToe {
  private n: number
  private rows: number[]
  private cols: number[]
  private diagonal: number
  private antiDiagonal: number

  constructor(n: number) {
    this.n = n
    this.rows = new Array(n).fill(0)
    this.cols = new Array(n).fill(0)
    this.diagonal = 0
    this.antiDiagonal = 0
  }

  /**
   * Player {player} makes a move at ({row}, {col}).
   * @param {number} row The row of the board.
   * @param {number} col The column of the board.
   * @param {number} player The player, can be either 1 or 2.
   * @return {number} The current winning condition, can be either:
   *                  0: No one wins.
   *                  1: Player 1 wins.
   *                  2: Player 2 wins.
   */
  move(row: number, col: number, player: 1 | 2): number {
    const valueToAdd = player === 1 ? 1 : -1
    const target = player === 1 ? this.n : -this.n

    this.rows[row] += valueToAdd
    this.cols[col] += valueToAdd

    if (row === col) {
      this.diagonal += valueToAdd
    }

    if (row + col === this.n - 1) {
      this.antiDiagonal += valueToAdd
    }

    if (
      this.rows[row] === target ||
      this.cols[col] === target ||
      this.diagonal === target ||
      this.antiDiagonal === target
    ) {
      return player
    }

    return 0 // No winner yet
  }
}

export { TicTacToe }
