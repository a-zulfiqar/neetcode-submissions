class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        
        numsSet = set(nums)

        maxSeq = 1
        for num in numsSet:
            if (num - 1) in numsSet:
                continue
            
            currentSeq = 1
            numIncremented = num
            
            while (numIncremented + 1) in numsSet:
                currentSeq += 1
                numIncremented += 1

            maxSeq = max(maxSeq, currentSeq)

        return maxSeq