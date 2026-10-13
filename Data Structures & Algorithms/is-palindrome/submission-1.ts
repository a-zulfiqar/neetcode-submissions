class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const formattedS = []
        for (let i = 0; i < s.length; i++) {
            if (/^[a-zA-Z0-9]$/.test(s[i])) {
                formattedS.push(s[i].toLocaleLowerCase())
            }
        }

        let j = formattedS.length - 1
        for (let i = 0; i < formattedS.length / 2; i++) {
            if (formattedS[i] == formattedS[j]) {
                j--
                continue
            } else {
                return false
            }
        }

        return true
    }
}
