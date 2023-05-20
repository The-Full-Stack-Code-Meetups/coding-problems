import sys

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        min_price = sys.maxsize

        for el in range(len(prices)):
            if prices[el] < min_price:
                min_price = prices[el]
            elif prices[el] - min_price > max_profit:
                max_profit = prices[el] - min_price

                    
        return max_profit
