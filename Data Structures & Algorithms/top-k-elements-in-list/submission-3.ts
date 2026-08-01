class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let numFrequency: Record<number, number> = {}
        let returnList: number[] = []

        for (let num of nums) {
            numFrequency[num] ??= 0
            numFrequency[num] += 1
        }
        let tracker: number = 0
        while (tracker < k) {
            const maxGroup: [string, number] = 
            Object.entries(numFrequency).reduce((max, current) => {
                if (current[1] > max[1]) {
                    return current
                }
                return max
            })

            let maxValue: number = Number(maxGroup[0])

            returnList.push(maxValue)
            delete numFrequency[String(maxValue)]
            tracker++
        }

        return returnList
    }
}
