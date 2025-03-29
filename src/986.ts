/**
 *  986. Interval List Intersections
 *  https://leetcode.com/problems/interval-list-intersections/
 *  Medium
 *
 * Finds the intersections between two lists of closed intervals
 *
 * Algorithm: Two-pointer approach
 * Time Complexity: O(M + N) where M and N are the lengths of the input arrays
 * Space Complexity: O(M + N) for storing the intersections in the worst case
 *
 * @param {number[][]} firstList - First list of intervals where each interval is [start, end]
 * @param {number[][]} secondList - Second list of intervals where each interval is [start, end]
 * @return {number[][]} - List of intersection intervals
 */
function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  if (!firstList.length || !secondList.length) return []

  let pointerOne = 0
  let pointerTwo = 0

  const result: number[][] = []

  while (pointerOne < firstList.length && pointerTwo < secondList.length) {
    const [startOne, endOne] = firstList[pointerOne]
    const [startTwo, endTwo] = secondList[pointerTwo]

    if (startOne > endTwo) pointerTwo++
    else if (startTwo > endOne) pointerOne++
    else {
      result.push([Math.max(startOne, startTwo), Math.min(endOne, endTwo)])
      endOne > endTwo ? pointerTwo++ : pointerOne++
    }
  }

  return result
}

export { intervalIntersection }
