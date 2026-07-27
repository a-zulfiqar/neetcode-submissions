class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        fqDict = {}

        for num in nums:
            fqDict[num] = fqDict.get(num, 0) + 1

        returnList = []
        
        while len(returnList) < k:
            maxNum = max(fqDict, key = fqDict.get)
            fqDict.pop(maxNum)

            returnList.append(maxNum)
        
        return returnList
        