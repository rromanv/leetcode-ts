/**
 *  827. Making A Large Island
 *  https://leetcode.com/problems/making-a-large-island/
 *  Hard
 *
 * You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
 *
 * Return the size of the largest island in grid after applying this operation.
 *
 * An island is a 4-directionally connected group of 1s.
 *
 * Algorithm: Uses a two-pass approach to find the largest possible island.
 * - First pass: Label each island with a unique ID (>1), calculate its size, and store in a map.
 * - Second pass: For each water cell (0), calculate the potential size by summing adjacent islands.
 * - Return the maximum of: largest existing island or largest potential island after transformation.
 * Time Complexity: O(n²) where n is the grid length. Each cell is visited at most twice.
 * Space Complexity: O(n²) for storing the visited array and water cell positions.
 *
 * @param {number[][]} grid - The binary matrix
 * @return {number} - Size of the largest island after changing at most one 0
 */
function largestIsland(grid: number[][]): number {
  if (!grid.length) return 0

  const ROWS = grid.length
  const COLS = grid[0].length

  const visited = new Array(ROWS).fill(0).map((row) => new Array(COLS).fill(false))
  const waterCells = new Array<number[]>()

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  const validPos = (r: number, c: number, shouldBeVisited = false) => {
    return r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c] > 0 && visited[r][c] === shouldBeVisited
  }

  let index = 2
  const islandSizes = new Map<number, number>()

  const bfs = ([r, c]: number[]) => {
    const queue: number[][] = []
    visited[r][c] = true
    queue.push([r, c])
    let size = 1
    grid[r][c] = index
    while (queue.length > 0) {
      const [cr, cc] = queue.shift()!
      for (const [dr, dc] of directions) {
        const nr = cr + dr
        const nc = cc + dc
        if (validPos(nr, nc)) {
          queue.push([nr, nc])
          visited[nr][nc] = true
          size++
          grid[nr][nc] = index
        }
      }
    }
    islandSizes.set(index, size)
    index++
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 1 && !visited[row][col]) {
        bfs([row, col])
      }
      if (grid[row][col] === 0) waterCells.push([row, col])
    }
  }

  let max = Math.max(...islandSizes.values(), 0)

  for (const [r, c] of waterCells) {
    let size = 1
    const islandVisited = new Set<number>()
    for (const [dr, dc] of directions) {
      const nr = r + dr
      const nc = c + dc
      if (validPos(nr, nc, true)) {
        const island = grid[nr][nc]
        if (!islandVisited.has(island)) {
          islandVisited.add(island)
          size += islandSizes.get(island)!
        }
      }
    }
    max = Math.max(max, size)
  }

  return max
}

export { largestIsland }
