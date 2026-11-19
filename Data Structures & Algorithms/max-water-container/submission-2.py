class Solution:
    def maxArea(self, heights: List[int]) -> int:
        leftPointer = 0
        rightPointer = len(heights) - 1

        maxContainer = 0

        while leftPointer < rightPointer:
            leftHeight = heights[leftPointer]
            rightHeight = heights[rightPointer]


            currentContainer = (rightPointer - leftPointer) * min(leftHeight, rightHeight)

            maxContainer = max(maxContainer, currentContainer)

            if rightHeight < leftHeight:
                rightPointer -= 1
            else:
                leftPointer += 1

        return maxContainer