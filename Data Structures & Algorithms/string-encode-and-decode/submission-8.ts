class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let returnString: string = ""

        for (let str of strs) {
            
            returnString += `${str}1#2`
        }

        return returnString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let returnList: string [] = str.split("1#2")
        returnList.pop()

        return returnList
    }
}

