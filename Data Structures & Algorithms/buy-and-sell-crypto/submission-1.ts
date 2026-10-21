class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length < 1) return 0
        
        let leftPointer = 0
        let maxProfit = 0
        let profit = 0

        for (let r = 1; r < prices.length; r++) {
            profit = prices[r] - prices[leftPointer]

            if (profit >= 0) {
                maxProfit = Math.max(maxProfit, profit)    
            } else {
                leftPointer = r
            }
        }

        return maxProfit
    }
}
