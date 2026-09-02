//Task 1 — Refactor to ES6 (20 min)
//Take this ES5 code and rewrite it using arrow functions, template literals, and const/let:

//```js

var user = { name: 'Ravi', age: 28 };
function describe(u) {
  return 'Name: ' + u.name + ', Age: ' + u.age;
}
var greetAll = function(users) {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    result.push(describe(users[i]));
  }
  return result;
};

//answer:

const user = { name: 'Ravi', age: 28 };

const describe = (u) => {
  return `Name: ${u.name}, Age: ${u.age}`;
};

const greetAll = (users) => {
  const result = [];

  for (let i = 0; i < users.length; i++) {
    result.push(describe(users[i]));
  }

  return result;
}; // output: ["Name: Ravi, Age: 28"]