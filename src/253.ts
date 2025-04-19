/**
 * 253. Meeting Rooms II
 * {@link https://leetcode.com/problems/meeting-rooms-ii/ | Link}
 * Difficulty: Medium
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 *
 * Algorithm: Sorted Start and End Times iterative approach
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[][]} intervals
 * @returns {number}
 */
function minMeetingRooms(intervals: number[][]): number {
  if (!intervals.length) return 0

  let usedRooms = 0

  const [startTimes, endTimes] = intervals.reduce<[number[], number[]]>(
    ([pStart, pEnd], [start, end]) => {
      pStart.push(start)
      pEnd.push(end)
      return [pStart, pEnd]
    },
    [[], []],
  )

  startTimes.sort((a, b) => a - b)
  endTimes.sort((a, b) => a - b)

  let startPointer = 0
  let endPointer = 0

  while (startPointer < intervals.length) {
    if (startTimes[startPointer] >= endTimes[endPointer]) {
      usedRooms--
      endPointer++
    }

    usedRooms++
    startPointer++
  }

  return usedRooms
}

export { minMeetingRooms }
