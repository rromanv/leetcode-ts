/**
 *  973. K Closest Points to Origin
 *  https://leetcode.com/problems/k-closest-points-to-origin/
 *  Medium
 *
 * Finds the k closest points to the origin (0, 0) in a 2D plane
 *
 * Algorithm: Map-based grouping of points by squared distance, then collecting in sorted order
 * Time Complexity: O(n log n) where n is the number of points
 * Space Complexity: O(n) for storing all points in the map
 *
 * @param {number[][]} points - Array of points on a 2D plane [x, y]
 * @param {number} k - Number of closest points to return
 * @return {number[][]} - k closest points to the origin
 */
function kClosest(points: number[][], k: number): number[][] {
  if (!points.length || k === 0) return []
  if (k >= points.length) return points

  const distanceMap = new Map<number, number[][]>()

  const safeGet = (key: number, map: Map<number, number[][]>) => map.get(key) ?? []

  for (const point of points) {
    const distance = Math.pow(point[0], 2) + Math.pow(point[1], 2)
    distanceMap.set(distance, [...safeGet(distance, distanceMap), point])
  }

  const sortedDistances = Array.from(distanceMap.keys()).sort((a, b) => a - b)

  const result: number[][] = []

  for (const distance of sortedDistances) {
    const pointsAtDistance = distanceMap.get(distance) || []

    for (const point of pointsAtDistance) {
      result.push(point)
      if (result.length === k) return result
    }
  }

  return result
}

export { kClosest }
