class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (height.length < 3) return 0
        
        let totalWater = 0
        let addedWater = 0

        let leftPointer = 0
        let leftMax = height[leftPointer]

        let rightPointer = height.length - 1
        let rightMax = height[rightPointer]

        while (leftPointer < rightPointer) {
            if (leftMax < rightMax) {
                leftPointer++
                addedWater = leftMax - height[leftPointer]
            } else {
                rightPointer--
                addedWater = rightMax - height[rightPointer]
            }

            if (addedWater > 0) {
                totalWater += addedWater
            } else {
                leftMax = height[leftPointer]
                rightMax = height[rightPointer]
            }

        }

        return totalWater
    }
}
