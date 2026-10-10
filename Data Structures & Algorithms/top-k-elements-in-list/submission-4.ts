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

        const returnArr = []
        
        while (k > 0) {
            let maxKey = null
            let maxVal = null

            for (const [key, value] of numDict.entries()) {
                if (value > maxVal) {
                    maxKey = key
                    maxVal = value 
                }
            }

            numDict.delete(maxKey)
            returnArr.push(maxKey)
            k -= 1
        }

        return returnArr
    }
}
