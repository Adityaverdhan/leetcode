
var isPalindrome = function(x) {
  if (x < 0) return false;
  let copy_x = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return rev === copy_x;
};

console.log(isPalindrome(121));