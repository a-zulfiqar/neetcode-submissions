class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for num in nums:
            num2 = target - num
            if (target - num) not in nums or (num2 == num and nums.count(num) < 2):
                continue
            
            if num2 == num and nums.count(num) > 1:
                return [nums.index(num),nums.index(num, nums.index(num)+1)]
            
            if num2 in nums:
                return [nums.index(num),nums.index(num2)]