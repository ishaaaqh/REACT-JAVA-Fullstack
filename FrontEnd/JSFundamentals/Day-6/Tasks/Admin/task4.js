for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}


for (var i = 0; i < 5; i++) {
    (function(i){
        setTimeout(() => console.log(i), 100);
    })(i);
  
}



// currently logs: 5 5 5 5 5
// fix so it logs: 0 1 2 3 4