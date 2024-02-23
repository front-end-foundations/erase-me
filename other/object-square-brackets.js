var testing = {
  name: "daniel",
  age: 50,
  clothing: {
    shoes: 4,
    shirts: 8,
  },
  "likes javascript": true,
  // propertyToCheck: "WEIRD",
};

var propertyToCheck = prompt("what do you want to check?");

console.log(propertyToCheck);
console.log(testing.propertyToCheck);
console.log(testing[propertyToCheck]);
