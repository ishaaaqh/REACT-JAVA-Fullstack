console.log(varDefinedVariable);
varDefinedVariable = "Something"
console.log(varDefinedVariable);
var varDefinedVariable;

try {
    console.log(letDefinedVariable);
    letDefinedVariable = "another name"
    console.log(letDefinedVariable);
    let letDefinedVariable;
} catch (error) {
    console.error("Failed let initialisation")
}


console.log(myFunction);
 myFunction = function(){
    console.log("var initialised finction getting called before assignment")
}
console.log(myFunction);

var myFunction;

console.log(myFunction2);
 myFunction2 = function(){
    console.log("var initialised finction getting called before assignment")
}
console.log(myFunction2);

let myFunction2;