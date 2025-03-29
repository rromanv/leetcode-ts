/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Easy
 *
 * Find the maximum profit from buying and selling a stock once
 *
 * Algorithm: One-pass approach tracking minimum price and maximum profit
 * Time Complexity: O(n) where n is the length of prices array
 * Space Complexity: O(1) using constant extra space
 *
 * @param {number[]} prices - Array of stock prices where each index represents a day
 * @return {number} - Maximum profit that can be achieved
 */
function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0

  let minPrice = prices[0]
  let maxProfit = 0

  for (let index = 1; index < prices.length; index++) {
    if (prices[index] < minPrice) {
      minPrice = prices[index]
    } else {
      const currentProfit = prices[index] - minPrice
      maxProfit = Math.max(maxProfit, currentProfit)
    }
  }

  return maxProfit
}

export { maxProfit }
