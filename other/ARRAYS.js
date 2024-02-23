// make an array
let newArr = [];
// newArr

// remove dupes
const a = [1, 1, 1, 2, 3, 3, 3, 4, 5, 1, 3, 0];
const uniq = new Set(a);
console.log(uniq);
console.log(Array.from(uniq));

// Set to Array
let uniqArr = Array.from(uniq);
console.log(typeof uniqArr);
console.log(Array.isArray(uniqArr));

// Sort Array
uniqArr.sort((a, b) => a - b);
console.log(uniqArr);

// Remove from the beginning
uniqArr.shift();
console.log(uniqArr);
console.log(uniqArr.indexOf(4));

// Add to beginning
uniqArr.unshift('k');
console.log(uniqArr);

// Add to the middle
uniqArr.splice(2, 1, 'boo');
console.log(uniqArr);

// remove from end
uniqArr.pop();
console.log(uniqArr);

// Add to end
uniqArr.push('l');
console.log(uniqArr);

let temp = uniqArr.map(el => (el += 2));
console.log(temp);

let temp2 = uniqArr.reduce((acc, val) => uniqArr[1] + uniqArr[3]);
console.log(temp2);

// SANDWICHES
// indexOf()
var sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];
console.log(sandwiches.indexOf('pb&j'));
console.log(sandwiches.indexOf('grilled cheese'));

if (sandwiches.indexOf('turkey') > -1) {
  console.log('Make a turkey sandwich, please');
}
// find
var found = sandwiches.find(function(sandwich) {
  return sandwich === 'turkey';
});
console.log(found);

var threeLetters = sandwiches.find(function(sandwich) {
  return sandwich.length === 3;
});
console.log(threeLetters);

// for loops
for (var i = 0; i < sandwiches.length; i++) {
  console.log(i); // index
  console.log(sandwiches[i]); // value
}

// forEach
sandwiches.forEach(function(sandwich, index) {
  console.log(index); // index
  console.log(sandwich); // value
});
