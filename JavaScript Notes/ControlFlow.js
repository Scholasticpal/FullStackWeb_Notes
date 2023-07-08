
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
