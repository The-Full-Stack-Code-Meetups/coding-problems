class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Initialize a variable profit to track the total profit, initially set to "0".
        profit = 0
        # Loop through the list of prices starting from the second element.
        for index in range(1, len(prices)):
            # Check if the current day's price is higher than the previous day's price.
            if prices[index] >prices[index - 1]:
                # If there's a price increase, calculate the difference between these prices and add it to the profit.
                profit+= prices[index] - prices[index - 1]
        return profit