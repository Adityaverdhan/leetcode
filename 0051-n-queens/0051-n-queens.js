/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];

    let board= Array.from(
        {length:n},
        ()=>Array(n).fill(".")
    );

    function isSafe(row, col) {
       // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") {
                return false;
            }
        }

        // Check upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {

            if (board[i][j] === "Q") {
                return false;
            }
        }

        // Check upper-right diagonal
        for (let i = row - 1, j = col + 1;
             i >= 0 && j < n;
             i--, j++) {

            if (board[i][j] === "Q") {
                return false;
            }
        }

        return true;
    }

    function backtrack(row) {

        // All queens have been placed
        if (row === n) {

            let solution = board.map(row => row.join(""));

            result.push(solution);

            return;
        }

        // Try every column in this row
        for (let col = 0; col < n; col++) {

            // Check whether this position is safe
            if (!isSafe(row, col)) {
                continue;
            }

            // Place queen
            board[row][col] = "Q";

            // Move to next row
            backtrack(row + 1);

            // Remove queen
            board[row][col] = ".";
        }
    }

    backtrack(0);
    return result;
};