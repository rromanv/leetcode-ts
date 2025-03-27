/**
 *  56. Merge Intervals
 *  https://leetcode.com/problems/merge-intervals/
 *  Medium
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Algorithm: Single pass
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[][]} intervals - Array of intervals where each interval is represented as [start, end]
 * @return {number[][]} - Array of merged non-overlapping intervals
 */
function merge(intervals: number[][]): number[][] {
  if (!Array.isArray(intervals)) throw new Error('Please provide an array of intervals')

  const result = new Array<number[]>()
  let current = new Array<number>()

  const START = 0
  const END = 1

  intervals.sort((a, b) => a[START] - b[START])

  for (const interval of intervals) {
    if (current.length === 0) {
      current = [...interval]
      continue
    }
    if (interval[START] <= current[END]) {
      current[END] = Math.max(current[END], interval[END])
      continue
    }
    result.push(current)

    current = [...interval]
  }

  if (current.length !== 0) result.push(current)

  return result
}

export { merge }
