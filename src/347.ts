/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Medium
 *
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Algorithm: Use a hash map to count frequencies, then sort by frequency and take top k elements.
 * Time Complexity: O(n + m log m) where n is array length and m is number of unique elements
 * Space Complexity: O(m) where m is the number of unique elements
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The number of most frequent elements to return
 * @return {number[]} - Array of the k most frequent elements
 */
function topKFrequent(nums: number[], k: number): number[] {
  type Num = number
  type Count = number

  const counter = new Map<Num, Count>()

  const safeGet = (key: Num, store: Map<Num, Count>) => store.get(key) ?? 0

  for (const num of nums) {
    counter.set(num, safeGet(num, counter) + 1)
  }

  return [...counter.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num, _count]) => num)
}

export { topKFrequent }
