class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:        
        returnList = [1] * len(nums)
        counter = 1
        for i in range(1, len(nums)):
            returnList[i] = counter * nums[i - 1]
            counter = returnList[i]

        counter = 1
        for i in range(len(nums) - 2, -1, -1):
            counter = counter * nums[i + 1]
            returnList[i] = counter * returnList[i]

        return returnList