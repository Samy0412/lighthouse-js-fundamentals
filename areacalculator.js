const calculateRectangleArea = function (length, width) {
  let area = 0;
  length * width <= 0 ? (area = undefined) : (area = length * width);
  return area;
};

const calculateTriangleArea = function (base, height) {
  let area = 0;
  base * height <= 0 ? (area = undefined) : (area = (base * height) / 2);
  return area;
};

const calculateCircleArea = function (radius) {
  let area = 0;
  radius <= 0 ? (area = undefined) : (area = Math.PI * radius * radius);
  return area;
};

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
