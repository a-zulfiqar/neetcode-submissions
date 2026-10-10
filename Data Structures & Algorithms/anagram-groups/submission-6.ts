class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = new Map()

        for (const word of strs) {
            const anagram = [...word].sort().join('')
            const currentValue = anagramMap.get(anagram) || []
            currentValue.push(word)
            anagramMap.set(anagram, currentValue)
        }

        return [...anagramMap.values()]
    }
}
