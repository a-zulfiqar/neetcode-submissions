class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0
        
        leftPointer = 0
        rightPointer = 1

        maxProfit = 0

        while rightPointer < len(prices):
            profit = prices[rightPointer] - prices[leftPointer]

            if profit < 0:
                leftPointer += 1
            else:
                maxProfit = max(maxProfit, profit)
                rightPointer += 1

        return maxProfit