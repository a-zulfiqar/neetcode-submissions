class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        if (nums.length < 3) return []

        nums.sort((a, b) => a - b)
        let returnArr = []

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] === nums[i - 1]) continue
            if (nums[i] > 0) break

            let middlePointer = i + 1
            let finalPointer = nums.length - 1

            while (middlePointer < finalPointer) {
                let sum = nums[i] + nums[middlePointer] + nums[finalPointer]

                if (sum === 0) {
                    returnArr.push([nums[i], nums[middlePointer], nums[finalPointer]])

                    while (nums[middlePointer] === nums[middlePointer + 1] && middlePointer < finalPointer) middlePointer++

                    while (nums[finalPointer] === nums[finalPointer - 1] && middlePointer < finalPointer) finalPointer--

                    middlePointer++
                    finalPointer--
                    
                } else if (sum < 0) {
                    middlePointer++
                } else {
                    finalPointer--
                }
            }
        }

        return returnArr
    }
}
