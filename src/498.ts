/**
 *  498. Diagonal Traverse
 *  https://leetcode.com/problems/diagonal-traverse/
 *  Medium
 *
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 *
 * Algorithm: Directional Traversal
 * - Alternate between upward diagonal (↗) and downward diagonal (↙) traversals
 * - For upward diagonals: decrease row, increase column
 * - For downward diagonals: increase row, decrease column
 * - When hitting boundaries, calculate the next cell based on current direction
 * - Continue until all cells are visited
 * Time Complexity: O(r * c) where are the number of rows and c the number of columns
 * Space Complexity: O(r * c) where are the number of rows and c the number of columns
 *
 * @param {number[][]} mat - The m x n matrix
 * @return {number[]} - All elements of the matrix in diagonal order
 */
function findDiagonalOrder(mat: number[][]): number[] {
  if (mat.length < 2) return mat.flat()
  const ROWS = mat.length
  const COLS = mat[0].length

  const result = new Array<number>()

  let cRow = 0
  let cCol = 0

  let upDir = true

  while (result.length !== ROWS * COLS) {
    if (upDir) {
      while (cRow >= 0 && cCol < COLS) {
        result.push(mat[cRow][cCol])
        cRow--
        cCol++
      }
      if (cCol === COLS) {
        cCol--
        cRow += 2
      } else cRow++

      upDir = false
    } else {
      while (cRow < ROWS && cCol >= 0) {
        result.push(mat[cRow][cCol])
        cRow++
        cCol--
      }
      if (cRow === ROWS) {
        cRow--
        cCol += 2
      } else cCol++
      upDir = true
    }
  }
  return result
}

export { findDiagonalOrder }
