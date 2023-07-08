
//Arrays
var output = []
output.push(1) // pushes 1 in end of array
output.pop //pops last item from array
// Checking in array
function EntryBot(){
    var guestList = ["Anmol", "Anshul", "Arjun", "Sanya"];
    if(guestList.includes(prompt("What is your name?"))){
        console.log("Welcome!");
    }
    else{
        console.log("You are not on the guest list.");
    }
}

EntryBot();
EntryBot();


// Q. fizzbuzz: if number is div by 3->say "Fizz", else if div by 5 ->"Buzz" else if both -> "FizzBuzz" else say the no. 

var output = [];
var count = 1;

function fizBuzz(){
    if(count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
count++;
    console.log(output);
}