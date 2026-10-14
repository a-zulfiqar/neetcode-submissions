class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftIndex = 0
        let rightIndex = numbers.length - 1

        while (leftIndex < rightIndex) {
            const sum = numbers[leftIndex] + numbers[rightIndex]

            if (sum === target) {
                return [leftIndex + 1, rightIndex + 1]
            } else if (sum > target) {
                rightIndex--
            } else {
                leftIndex++
            }
        }
        
    }
}
