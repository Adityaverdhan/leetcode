var reverse = function(x) {
  let copy_x = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }
  if (rev > 2**31 - 1) return 0;
  return copy_x>0 ? rev : -rev;
};