class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []

        outputArr = []

        nums.sort()
        print(nums)

        leftP = 0

        for leftP in range(len(nums) - 2):
            if nums[leftP] > 0:
                return outputArr

            if leftP > 0 and nums[leftP] == nums[leftP - 1]:
                continue

            rightP = len(nums) - 1
            middleP = leftP + 1

            while (middleP < rightP):
                sum = nums[leftP] + nums[middleP] + nums[rightP]
                
                if sum > 0:
                    rightP -= 1
                elif sum < 0:
                    middleP += 1
                else:
                    outputArr.append([nums[leftP], nums[middleP], nums[rightP]])
                    middleP += 1
                    while nums[middleP] == nums[middleP - 1] and middleP < rightP:
                        middleP += 1

        return outputArr