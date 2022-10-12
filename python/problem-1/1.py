"""This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log.
Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible."""


class LogDataStructure:
    def __int__(self):
        self.log = []

    def record(self, order_id):
        self.log.append(order_id)

    def get_last(self, index):
        return self.log[len(self.log) - 1 - index]


if __name__ == "__main__":
    eCommerceOrders = LogDataStructure()
    # add order ids

    for i in range(1, 101):  # add log from 1 to 100
        eCommerceOrders.record(i)

    print(eCommerceOrders.get_last(10))  # return 90
    print(eCommerceOrders.get_last(50))  # return 50
