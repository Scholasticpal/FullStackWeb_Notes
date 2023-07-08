/*Syntax:
for(var i = 0; i < 6; i++){
    console.log(i);
}
*/

//Fibonacci Series
// var fib = [];

var output = [];
function fibonacciGenerator (n) {    
    if(n === 1){
        output.push(n1);
    }
    if(n === 2){
        output.push(n2);
    }
    if(n>1){
        for(var i = 3; i<=n; i++){
            var temp = n1+n2;
            n1 = n2;
            n2 = temp;
            output.push(n2);
        }
    }
    
    console.log(output);
}


