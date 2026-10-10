/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0;  // unmatched '('
  let moves = 0; // parentheses we need to insert

  for (const ch of s) {
    if (ch === "(") {
      open++;
    } else {
      if (open > 0) {
        open--; // this ')' matches an earlier '('
      } else {
        moves++; // no '(' exists, so insert one before this ')'
      }
    }
  }

  // Every remaining '(' needs one ')' appended.
  return moves + open;
};