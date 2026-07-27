class Solution:

    def encode(self, strs: List[str]) -> str:
        if strs == []:
            return 'whee'
        return "||".join(strs)

    def decode(self, s: str) -> List[str]:
        if s == 'whee':
            return []
        return s.split("||")
