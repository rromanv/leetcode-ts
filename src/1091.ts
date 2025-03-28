/**
 *  1091. Shortest Path in Binary Matrix
 *  https://leetcode.com/problems/shortest-path-in-binary-matrix/
 *  Medium
 *
 * Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix.
 * If there is no clear path, return -1.
 *
 * A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the
 * bottom-right cell (i.e., (n - 1, n - 1)) such that:
 * - All the visited cells of the path are 0.
 * - All the adjacent cells of the path are 8-directionally connected (i.e., they are
 *   different and they share an edge or a corner).
 *
 * The length of a clear path is the number of visited cells of this path.
 *
 * Algorithm: Breadth-First Search
 * Time Complexity: O(n²) where n is the size of the matrix
 * Space Complexity: O(n²) for the queue and visited set
 *
 * @param {number[][]} grid - Binary matrix where 0 represents a clear path and 1 represents a wall
 * @return {number} - Length of shortest path or -1 if no path exists
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
  if (!grid.length) return -1

  const ROWS = grid.length
  const COLS = grid[0].length

  if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) return -1

  type Coordinate = [number, number]

  const directions: Coordinate[] = [
    [0, 1], // Right
    [1, 1], // Down Right
    [1, 0], // Down
    [1, -1], // Down Left
    [0, -1], // Left
    [-1, -1], // Up Left
    [-1, 0], // Up
    [-1, 1], //Up Right
  ] as const

  type PathLength = number
  const queue: [Coordinate, PathLength][] = [[[0, 0], 1]]

  const visited = Array(ROWS)
    .fill(0)
    .map(() => Array(COLS).fill(false))

  visited[0][0] = true

  while (queue.length > 0) {
    const [[row, col], pathLength] = queue.shift()!

    if (row === ROWS - 1 && col === COLS - 1) return pathLength

    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc

      if (
        newRow >= 0 &&
        newRow < ROWS &&
        newCol >= 0 &&
        newCol < COLS &&
        !visited[newRow][newCol] &&
        grid[newRow][newCol] === 0
      ) {
        visited[newRow][newCol] = true
        queue.push([[newRow, newCol], pathLength + 1])
      }
    }
  }
  return -1
}

export { shortestPathBinaryMatrix }
