"""This problem was asked by Facebook.
Given an array of numbers representing the stock prices of a company in chronological order,
write a function that calculates the maximum profit you could have made from buying and selling that stock once.
You must buy before you can sell it.
For example, given [9, 11, 8, 5, 7, 10], you should return 5,
since you could buy the stock at 5 dollars and sell it at 10 dollars."""


def max_profit(stocks):
    result = 0
    min_stock = 0
    max_stock = 0
    for stock in range(len(stocks)):
        if min(stocks) == stocks[stock]:
            min_stock = stocks[stock]
            remainder_stocks = stocks[stock::]
            max_stock = max(remainder_stocks)
    result = max_stock - min_stock
    print(result)
    return result


max_profit([9, 11, 8, 5, 7, 10])
