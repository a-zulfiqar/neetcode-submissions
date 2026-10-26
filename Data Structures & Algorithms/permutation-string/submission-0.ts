class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false

        s1 = s1.split("").sort().join("")
        let comparisonArray = []

        for (let rightPointer = 0; rightPointer < s2.length; rightPointer++) {
            comparisonArray.push(s2[rightPointer])

            if (comparisonArray.length < s1.length) continue

            let comparisonString = [...comparisonArray].sort().join("")

            if (s1 === comparisonString) {
                return true
            }

            comparisonArray.shift()
        }

        return false
    }
}
