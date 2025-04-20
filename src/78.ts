/**
 * 78. Subsets
 * {@link https://leetcode.com/problems/subsets/}
 * Difficulty: Medium
 *
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Algorithm: Backtracking. Recursively explore adding or not adding each element to the current subset. At each step, add the current subset configuration to the results.
 * Time Complexity: O(N * 2^N) - We generate 2^N subsets, and copying each subset takes O(N) time.
 * Space Complexity: O(N) - Primarily due to the recursion stack depth and the temporary subset storage (excluding output space).
 *
 * @param nums An array of unique integers.
 * @returns An array containing all possible subsets (the power set).
 */
function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  const currentSubset: number[] = []

  function backtrack(startIndex: number): void {
    result.push([...currentSubset])

    for (let i = startIndex; i < nums.length; i++) {
      currentSubset.push(nums[i])

      backtrack(i + 1)

      currentSubset.pop()
    }
  }

  backtrack(0)

  return result
}

export { subsets }
