class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        numCount = Counter(nums)

        numsBucket = [[] for _ in range(len(nums) + 1)]
        for num, count in numCount.items():
            numsBucket[count].append(num)

        returnList = []
        
        for i in range(len(numsBucket) - 1, 0, -1):
            for num in numsBucket[i]:
                returnList.append(num)

                if len(returnList) == k:
                    return returnList
        