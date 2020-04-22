function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("samantha");

function returnSayHello(name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");

console.log(greeting);
