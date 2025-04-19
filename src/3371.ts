/**
 * 3371. Identify the Largest Outlier in an Array
 * {@link https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/}
 * Difficulty: Medium
 *
 * You are given an integer array nums. This array contains n elements, where exactly n - 2 elements are special numbers. One of the remaining two elements is the sum of these special numbers, and the other is an outlier.
 * An outlier is defined as a number that is neither one of the original special numbers nor the element representing the sum of those numbers.
 * Note that special numbers, the sum element, and the outlier must have distinct indices, but may share the same value.
 * Return the largest potential outlier in nums.
 *
 * Algorithm: For each number, remove it and check if the remaining numbers contain a value equal to half the sum of the rest. If so, consider the removed number as a potential outlier.
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * @param nums An array of integers containing exactly one outlier based on parity.
 * @returns The outlier integer.
 */
function getLargestOutlier(nums: number[]): number {
  let totalSum = nums.reduce((p, c) => p + c, 0)

  const counter: Map<number, number> = new Map()

  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1)
  }

  let outlier = -Infinity

  for (const num of nums) {
    const restSum = totalSum - num
    if (restSum % 2 !== 0) continue

    const half = restSum / 2

    const needed = half === num ? 2 : 1

    if ((counter.get(half) || 0) >= needed) {
      outlier = Math.max(outlier, num)
    }
  }

  return outlier
}

export { getLargestOutlier }
