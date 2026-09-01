// Write three nested functions `a()`, `b()`, `c()` where `a` calls `b`, and `b` calls `c`. Add a deliberate error inside `c()` and read the stack trace in your console/DevTools. Identify each frame and what it tells you.


a();

function a(){
    console.log("Inside function A that calls Function B");
    b();
}

function b(){
    console.log("Inside function B that calls Function C");
    c();
}

function c(){
    console.log("Inside function C which throws an error");

    try {
        something = " ";
        let something;
    } catch (error) {
        console.error("function C failed to initialise");
    }
}