class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups: Record<string, string[]> = {}

        for (let str of strs) {
            const sortedStr: string = str.split("").sort().join("")

            anagramGroups[sortedStr] ??= []
            anagramGroups[sortedStr].push(str)
        }

        return Object.values(anagramGroups)
    }
}
