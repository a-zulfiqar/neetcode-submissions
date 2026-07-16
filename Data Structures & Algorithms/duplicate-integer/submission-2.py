class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # print(list(set(nums)))
        if len(list(set(nums))) == len(nums):
            return False
        else:
            return True