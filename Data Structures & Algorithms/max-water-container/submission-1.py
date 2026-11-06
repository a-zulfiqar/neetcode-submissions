class Solution:
    def maxArea(self, heights: List[int]) -> int:
        leftPointer = 0
        rightPointer = len(heights) - 1

        maxContainer = 0

        while leftPointer < rightPointer:
            currentContainer = (rightPointer - leftPointer) * min(heights[leftPointer], heights[rightPointer])

            maxContainer = max(maxContainer, currentContainer)

            if heights[leftPointer] < heights[rightPointer]:
                leftPointer += 1
            else:
                rightPointer -= 1

        return maxContainer