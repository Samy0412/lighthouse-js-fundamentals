const isOdd = function (num) {
  let odd = false;
  num % 2 === 0 ? (odd = false) : (odd = true);
  return odd;
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
