/**
 * 339. Nested List Weight Sum
 * https://leetcode.com/problems/nested-list-weight-sum
 * Medium (Premium)
 *
 * Given a nested list of integers, return the sum of all integers in the list weighted by their depth.
 * Each element is either an integer, or a list -- whose elements may also be integers or other lists.
 *
 * Algorithm: Depth-First Search (DFS)
 * Time Complexity: O(n) where n is the total number of elements (including nested ones)
 * Space Complexity: O(d) where d is the maximum depth of the nested lists
 *
 * @param {NestedInteger[]} nestedList - List of nested integers
 * @returns {number} - The weighted sum
 */

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
class NestedInteger {
  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  constructor(value?: number) {}

  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  isInteger(): boolean {
    // Implementation would be provided by LeetCode
    return false
  }

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  getInteger(): number | null {
    // Implementation would be provided by LeetCode
    return 0
  }

  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {
    // Implementation would be provided by LeetCode
  }

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger) {
    // Implementation would be provided by LeetCode
  }

  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[] {
    // Implementation would be provided by LeetCode
    return []
  }
}

function depthSum(nestedList: NestedInteger[]): number {
  const dfs = (list: NestedInteger[], depth = 1) => {
    let sum = 0
    for (const item of list) {
      if (item.isInteger()) {
        sum += (item.getInteger() ?? 0) * depth
        continue
      }
      sum += dfs(item.getList(), depth + 1)
    }
    return sum
  }
  return dfs(nestedList)
}

export { depthSum, NestedInteger }
