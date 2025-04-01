/**
 * 1762. Buildings With an Ocean View
 * Problem: https://leetcode.com/problems/buildings-with-an-ocean-view/
 * Medium
 */

function findBuildings(heights: number[]): number[] {
  if (!Array.isArray(heights) || heights.length === 0) throw new Error('Array of buildings heights should be provided')

  let maxHeight = -Infinity
  const buildingsWithView = new Array<number>()

  for (let index = heights.length - 1; index >= 0; index--) {
    const currentBuilding = heights[index]
    if (currentBuilding > maxHeight) {
      maxHeight = currentBuilding
      buildingsWithView.unshift(index)
    }
  }

  return buildingsWithView
}

export { findBuildings }
