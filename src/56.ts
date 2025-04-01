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
  if (!intervals.length) return []
  if (intervals.length === 1) return [intervals[0]]

  const mergedIntervals = new Array<number[]>()
  let activeInterval = intervals[0]

  const START = 0
  const END = 1

  for (let index = 1; index < intervals.length; index++) {
    const interval = intervals[index]

    if (interval[START] <= activeInterval[END]) {
      activeInterval[START] = Math.min(activeInterval[START], interval[START])
      activeInterval[END] = Math.max(activeInterval[END], interval[END])

      continue
    }

    mergedIntervals.push(activeInterval)

    activeInterval = interval
  }

  if (activeInterval.length > 0) mergedIntervals.push(activeInterval)

  return mergedIntervals
}

export { merge }
