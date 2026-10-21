class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length < 1) return 0
        
        let leftPointer = 0
        let rightPointer = 1
        let maxProfit = 0
        let profit = 0

        while (rightPointer < prices.length) {
            profit = prices[rightPointer] - prices[leftPointer]

            if (profit >= 0) {
                maxProfit = Math.max(maxProfit, profit)    
            } else {
                leftPointer = rightPointer
            }

            rightPointer++
        }

        return maxProfit
    }
}
