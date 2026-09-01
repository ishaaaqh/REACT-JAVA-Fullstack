const user = {
  name: 'Asha',

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const greetFn = user.greet;

greetFn(); // `this` is lost

//task -5 fixing using bind method

const greetFn = user.greet.bind(user);

greetFn(); // output: Hi, I'm Asha

// fixing using arrow function

const greetFn = () => user.greet();

greetFn(); // output: Hi, I'm Asha

// fixing using call method

const greetFn = function() {
  user.greet.call(user);
};
greetFn(); // output: Hi, I'm Asha

// fixing using apply method

const greetFn = function() {
  user.greet.apply(user);
};  
greetFn(); // output: Hi, I'm Asha
