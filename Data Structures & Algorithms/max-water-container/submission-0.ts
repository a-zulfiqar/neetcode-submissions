class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0
        let leftPointer = 0
        let rightPointer = heights.length - 1

        while (leftPointer < rightPointer) {
            let area = Math.min(heights[leftPointer], heights[rightPointer]) * (rightPointer - leftPointer)
            maxArea = Math.max(maxArea, area)

            if (heights[leftPointer] < heights[rightPointer]) leftPointer++
            else rightPointer--
        }

        return maxArea
    }
}
