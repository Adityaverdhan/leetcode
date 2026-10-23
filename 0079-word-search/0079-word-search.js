/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function dfs(row, col, index) {       
        if (index === word.length) { // We found the complete word
            return true;
        }     
        if (                         // Check boundaries
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols
        ){
            return false;
        }    

        if (board[row][col] !== word[index]) {     // Current cell doesn't match current character
            return false;
        }      
        let temp = board[row][col];     // Mark current cell as visited
        board[row][col] = "#";
        
        let found =                            // Explore all 4 directions
            dfs(row + 1, col, index + 1) || // down
            dfs(row - 1, col, index + 1) || // up
            dfs(row, col + 1, index + 1) || // right
            dfs(row, col - 1, index + 1);   // left       
        board[row][col] = temp;      // Undo / backtrack
        return found;
    }

    // Start DFS from every cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};