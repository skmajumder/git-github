const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 25,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica);

jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Jessica: ", jessica);
console.log("Jessica Copy: ", jessicaCopy);
