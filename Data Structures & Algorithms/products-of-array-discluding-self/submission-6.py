class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:        
        numsLength = len(nums)
        returnList = [1] * numsLength

        counter = 1
        for i in range(numsLength):
            returnList[i] = counter
            counter *= nums[i]

        counter = 1
        for i in range(numsLength - 1, -1, -1):
            returnList[i] *= counter
            counter *= nums[i]

        return returnList