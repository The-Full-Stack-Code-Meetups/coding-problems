"""This problem was asked by Facebook.
Given an array of numbers representing the stock prices of a company in chronological order,
write a function that calculates the maximum profit you could have made from buying and selling that stock once.
You must buy before you can sell it.
For example, given [9, 11, 8, 5, 7, 10], you should return 5,
since you could buy the stock at 5 dollars and sell it at 10 dollars."""


def max_profit(stocks):
    maximum_profit = 0
    for stock in range(len(stocks)):
        profit = max(stocks[stock::]) - stocks[stock]
        if profit > maximum_profit:
            maximum_profit = profit

    return maximum_profit


print(max_profit([9, 11, 8, 5, 7, 10]))
