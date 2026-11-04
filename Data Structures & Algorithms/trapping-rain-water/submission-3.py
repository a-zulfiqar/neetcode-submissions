class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) < 3:
            return 0
        
        leftPointer = 0
        rightPointer = len(height) - 1

        leftMax = height[leftPointer]
        rightMax = height[rightPointer]

        totalWater = 0

        while (leftPointer < rightPointer):
            water = 0

            if height[leftPointer] < height[rightPointer]:
                leftPointer += 1
                leftMax = max(height[leftPointer], leftMax)
                water = leftMax - height[leftPointer]
            else:
                rightPointer -= 1
                rightMax = max(height[rightPointer], rightMax)
                water = rightMax - height[rightPointer]

            if water > 0:
                totalWater += water
            
        return totalWater