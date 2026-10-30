class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsDict = {}
        
        for i in range(0, len(nums)):
            num2 = nums[i]
            num1 = target - num2

            if num1 in numsDict:
                return [numsDict[num1], i] 
            
            else:
                numsDict[num2] = i