/**
 *  200. Number of Islands
 *  https://leetcode.com/problems/number-of-islands/
 *  Medium
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or
 * vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Algorithm: Uses Breadth-First Search (BFS) to explore each unvisited land cell ('1').
 *  -When a land cell is found, BFS explores all connected land cells in all four directions
 *  -(up, right, down, left) and marks them as visited. Each complete BFS exploration
 *  -represents one island, and we increment our counter after each exploration.
 * Time Complexity: O(m × n) where m is the number of rows and n is the number of columns.
 * Space Complexity: O(m × n) for the visited array and queue.
 *
 * @param {string[][]} grid - 2D grid representing a map of '1's (land) and '0's (water)
 * @return {number} - Number of islands in the grid
 */
function numIslands(grid: string[][]): number {
  if (!grid.length) return 0

  const ROWS = grid.length
  const COLS = grid[0].length

  const visited = new Array(ROWS).fill(0).map((row) => new Array(COLS).fill(false))

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  let islands = 0

  const validPos = (r: number, c: number) => {
    return r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c] === '1' && !visited[r][c]
  }

  const bfs = ([r, c]: number[]) => {
    const queue: number[][] = []
    visited[r][c] = true
    queue.push([r, c])
    while (queue.length > 0) {
      const [cr, cc] = queue.shift()!
      for (const [dr, dc] of directions) {
        const nr = cr + dr
        const nc = cc + dc
        if (validPos(nr, nc)) {
          queue.push([nr, nc])
          visited[nr][nc] = true
        }
      }
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === '1' && !visited[row][col]) {
        bfs([row, col])
        islands++
      }
    }
  }

  return islands
}

export { numIslands }
