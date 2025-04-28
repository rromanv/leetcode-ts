/**
 * 1762. Buildings With an Ocean View
 * Problem: https://leetcode.com/problems/buildings-with-an-ocean-view/
 * Medium
 *
 * Algorithm: Iterative approach from right to left
 * Time complexity: O(N), where N is the number of buildings
 * Space complexity: O(K) where K are the number of buildings with Ocean view, K <= N
 *
 */

function findBuildings(heights: number[]): number[] {
  let maxHeight = -Infinity
  const buildingWithView: number[] = []

  for (let index = heights.length - 1; index >= 0; index--) {
    const currentHeight = heights[index]
    if (currentHeight > maxHeight) {
      maxHeight = currentHeight
      buildingWithView.push(index)
    }
  }

  return buildingWithView.reverse()
}

export { findBuildings }
