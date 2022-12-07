class HitCounter:
    def __init__(self):
        self.requests = []

    def record(self, timestamp):
        self.requests.append(timestamp)

    def total(self):
        return len(self.requests)

    def range(self, lower, upper):
        result = 0
        for hit in self.requests:
            if lower <= hit <= upper:
                result += 1
        return result



