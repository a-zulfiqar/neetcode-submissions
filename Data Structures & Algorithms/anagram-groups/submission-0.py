class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        wordAndIndex = {}
        for i in range(len(strs)):
            sortedString = "".join(sorted(strs[i]))
            if sortedString in wordAndIndex:
                wordAndIndex[sortedString].append(i)
            else:
                wordAndIndex[sortedString] = [i]
        
        returnList = []
        for indexes in wordAndIndex.values():
            group = []
            
            for index in indexes:
                group.append(strs[index])
            
            returnList.append(group)

        return returnList



        