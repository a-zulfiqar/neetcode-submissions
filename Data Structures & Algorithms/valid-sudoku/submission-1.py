class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowSet = [set() for _ in range(9)]
        columnSet = [set() for _ in range(9)]
        boxSet = [set() for _ in range(9)]

        for r in range(9):
            for c in range(9):
                num = board[r][c]

                if num == ".":
                    continue

                check1 = num in rowSet[r]
                check2 = num in columnSet[c]
                check3 = num in boxSet[(r//3) * 3 + (c//3)]

                if check1 or check2 or check3:
                    return False
                else:
                    rowSet[r].add(num)
                    columnSet[c].add(num)
                    boxSet[(r//3) * 3 + (c//3)].add(num)

        return True