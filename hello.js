let returnSayHello = function (name) {
  console.log("Hello, " + name);
};

returnSayHello("samantha");

let returnSayHello2 = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello2("John");

console.log(greeting);
