/**
 *  695. Max Area of Island
 *  https://leetcode.com/problems/max-area-of-island/
 *  Medium
 *
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid
 * are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 * Algorithm: Uses Breadth-First Search (BFS) to explore each unvisited land cell (1).
 *  -For each unconnected land cell, we perform a BFS to calculate the area of the island
 *   it belongs to and keep track of the maximum area encountered. Each island's size is
 *   determined by counting all connected land cells in the four cardinal directions.
 * Time Complexity: O(m × n) where m is the number of rows and n is the number of columns.
 * Space Complexity: O(m × n) for the visited array and queue.
 *
 * @param {number[][]} grid - Binary matrix where 1 represents land and 0 represents water
 * @return {number} - Maximum area of an island in the grid
 */
function maxAreaOfIsland(grid: number[][]): number {
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

  const validPos = (r: number, c: number) => {
    return r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c] === 1 && !visited[r][c]
  }

  let max = 0

  const bfs = ([r, c]: number[]): number => {
    const queue: number[][] = []
    visited[r][c] = true
    queue.push([r, c])
    let size = 1
    while (queue.length > 0) {
      const [cr, cc] = queue.shift()!
      for (const [dr, dc] of directions) {
        const nr = cr + dr
        const nc = cc + dc
        if (validPos(nr, nc)) {
          queue.push([nr, nc])
          visited[nr][nc] = true
          size++
        }
      }
    }
    return size
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 1 && !visited[row][col]) {
        const currentSize = bfs([row, col])
        max = Math.max(max, currentSize)
      }
    }
  }

  return max
}

export { maxAreaOfIsland }
