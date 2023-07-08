//Love Calculator
function valRandom(name1, name2){
    var n = Math.random();
    n = n*100;
    return Math.floor(n)+1; //for 1 to 100
}

console.log(valRandom("abc", "fd")+"%");
