class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_map = defaultdict(list)

        for word in strs:
            letterCount = [0] * 26

            for character in word:
                letterCount[ord(character) - ord("a")] += 1

            anagram_map[tuple(letterCount)].append(word)


        return list(anagram_map.values())

