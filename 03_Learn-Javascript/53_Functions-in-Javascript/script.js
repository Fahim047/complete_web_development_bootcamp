console.log("We are learning functions");

// function with single parameter
function greet(name){
    console.log(name + " is a brilliant student");
}

// function with two or more parameters
function message(name, greetText){
    console.log(greetText + " " + name + ".");
}

// we can set a default value of parameter
// it will show up when we'll not passing that parameter
function mDefault(name, greetText="oh! it's deafault text,"){
    console.log(greetText + " " + name + ".");
}

// function with return value
function sum(a, b, c){
    let s = a + b + c;
    return s;

    // this line will not be executed
    // because function ended with a return value
    // console.log(s);
}

let name1 = "Abu Bokor";
let name2 = "Rian";
let gText = "Good Morning,"

// calling functions
greet(name1);
greet(name2);

message(name1, gText);
message(name2, gText);

mDefault(name1,gText);
mDefault(name2);

// printing return value of sum
let rVal = sum(5, 6, 7);
console.log("Return Value of sum is: ", rVal);

