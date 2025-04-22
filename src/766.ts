/**
 * 766. Toeplitz Matrix
 * {@link https://leetcode.com/problems/toeplitz-matrix/ | Link}
 * Difficulty: Easy
 * Checks if every diagonal from top-left to bottom-right has the same elements.
 *
 * Algorithm: Iterate through the rows and columns.
 * Time Complexity: O(N*M) where N are the rows, and M the columns.
 * Space Complexity: O(1)
 *
 * @param {number[][]} matrix The input matrix.
 * @returns {boolean} True if the matrix is Toeplitz, false otherwise.
 */
const isToeplitzMatrix = (matrix: number[][]): boolean => {
  const rows = matrix.length
  if (rows === 0) {
    return true
  }
  const cols = matrix[0].length
  if (cols === 0) {
    return true
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] !== matrix[row - 1][col - 1]) {
        return false
      }
    }
  }

  return true
}

export { isToeplitzMatrix }
