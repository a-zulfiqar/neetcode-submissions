class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        returnList = []
        
        for i in range(len(nums)):
            counter = 0

            for j in range(len(nums)):
                if j == i:
                    continue
                sum = nums[j] if counter == 0 else sum * nums[j]
                counter += 1
            
            returnList.append(sum)

        return returnList