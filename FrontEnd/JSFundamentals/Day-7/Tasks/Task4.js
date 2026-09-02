//Tagged Template Function (15 min)
//Write a tagged template function `highlight` that wraps interpolated values in `**double asterisks**` while leaving the surrounding text unchanged.

//```js
function highlight(strings, ...values) {
  let result = '';
  strings.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += `**${values[i]}**`;
    }
  });
  return result;
}

const name = 'Priya';
highlight`Hello, ${name}, welcome!`;
console.log(highlight`Hello, ${name}, welcome!`); // Output: Hello, **Priya**, welcome!
// "Hello, **Priya**, welcome!"
//```