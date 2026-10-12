class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const length = nums.length
        const returnArr = new Array(length)

        let prefix = 1
        for (let i = 0; i < length; i++) {
            returnArr[i] = prefix
            prefix *= nums[i]
        }

        let suffix = 1
        for (let i = length - 1; i >= 0; i--) {
            returnArr[i] *= suffix
            suffix *= nums[i]
        }

        return returnArr 
    }
}
