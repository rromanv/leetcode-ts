/*
 * 636. Exclusive Time of Functions
 * https://leetcode.com/problems/exclusive-time-of-functions
 * Medium
 *
 * On a single-threaded CPU, we execute a program containing n functions. Each function has a unique ID between 0 and n-1.
 *
 * Function calls are stored in a call stack: when a function starts, its ID is pushed onto the stack, and when a function
 * finishes, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed.
 * Each time a function starts or finishes, we write a log with the ID, whether it started or finished, and the timestamp.
 */

/**
 * Calculates the exclusive time of each function execution.
 * Exclusive time of a function is the time spent within this function alone, not including time spent in any other functions it called.
 *
 * @param {number} n - The number of functions
 * @param {string[]} logs - Array of logs in format "function_id:{"start" | "end"}:timestamp"
 * @returns {number[]} - Array of exclusive times for each function
 */
function exclusiveTime(n: number, logs: string[]): number[] {
  const executionTimes = new Array<number>(n).fill(0)
  const callStack = new Array<number>()
  let prevStart = 0

  for (const log of logs) {
    const [idStr, cType, timeStr] = log.split(':')
    const fId = Number(idStr)
    const timestamp = Number(timeStr)

    if (cType === 'start') {
      if (callStack.length > 0) executionTimes[callStack[callStack.length - 1]] += timestamp - prevStart

      callStack.push(fId)
      prevStart = timestamp
      continue
    }

    executionTimes[callStack.pop()!] += timestamp - prevStart + 1
    prevStart = timestamp + 1
  }

  return executionTimes
}

export { exclusiveTime }
