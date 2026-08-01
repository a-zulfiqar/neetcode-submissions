class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramIndexes: Record<string, [number]> = {}
        let returnList: string[][] = []

        for (let i: number = 0; i < strs.length; i++) {
            const sortedString: string = strs[i].split("").sort().join("")

            if (sortedString in anagramIndexes) {
                anagramIndexes[sortedString].push(i)
            } else {
                anagramIndexes[sortedString] = [i]
            }
        }

        let values: [number][] = Object.values(anagramIndexes)

        for (const group of values) {
            let appendGroup: string[] = []

            for (const i of group) {
                appendGroup.push(strs[i])
            }

            returnList.push(appendGroup)
        }

        console.log(returnList)
        return returnList

    }
}
