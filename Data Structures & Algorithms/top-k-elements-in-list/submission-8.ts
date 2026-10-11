class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numDict = new Map()

        for (const number of nums) {
            numDict.set(number, (numDict.get(number) || 0) + 1)
        }

        const bucket = Array.from({length: nums.length + 1}, () => [])
        
        for (const [key, value] of numDict.entries()) {
            bucket[value].push(key)
        }

        const returnArr = []

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length > 0) {
                for (const key of bucket[i]) {
                    returnArr.push(key)

                    if (returnArr.length === k) return returnArr
                }
            }
        }
    }
}
