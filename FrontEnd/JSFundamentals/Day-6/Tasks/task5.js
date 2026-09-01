Bind :
// Task 5: Using bind to preserve context
const user = {
  name: 'Asha',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const greetFn = user.greet.bind(user);
greetFn(); // Hi, I'm Asha

Call :
// Task 5: Using call to preserve context

const user = {
  name: 'Asha',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const greetFn = user.greet();
greetFn.call(user); // Hi, I'm Asha

Apply :
// Task 5: Using apply to preserve context

const user = {
  name: 'Asha',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const greetFn = user.greet();
greetFn.apply(user); // Hi, I'm Asha