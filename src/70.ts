/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * Easy
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Algorithm: Dynamic Programming / Fibonacci sequence
 * Time Complexity: O(n) — single pass from 3 to n
 * Space Complexity: O(1) — constant space for two variables
 *
 * @param {number} n - Total number of steps
 * @return {number} - Number of distinct ways to reach the top
 */
function climbStairs(n: number): number {
  if (n <= 2) return n || 1

  let firstStep = 1
  let secondStep = 2

  for (let step = 3; step <= n; step++) {
    const currentSteps = firstStep + secondStep
    firstStep = secondStep
    secondStep = currentSteps
  }
  return secondStep
}

export { climbStairs }
