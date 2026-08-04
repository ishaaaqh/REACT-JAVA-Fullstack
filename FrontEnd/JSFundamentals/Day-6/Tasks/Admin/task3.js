// Implement `createCounter()` that returns an object with `increment()`, `decrement()`, and `getValue()` methods, where the count is fully private (not accessible from outside).

var createCounter = function(){
    let count = 0;
    return {
        increment: function(){
            console.info("Count Increment");
            count++;
        },
        decrement: function(){
            console.info("Count Decrement");
            count--;
        },
        getValue: function(){
            console.log(count);
        }
    }
}


var myCounter = createCounter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.getValue();
