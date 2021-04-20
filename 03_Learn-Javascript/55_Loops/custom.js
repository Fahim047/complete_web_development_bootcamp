console.log("We are learning loops");

// simple for loop
let i = 0;
for (i = 0; i < 5; i++) {
    console.log(i);
}

// array iteration using for loop
let friends = ['Rian', 'Rabbe', 'Hira', 'Biswajit', 'Abu Bokor', 'Mahedy'];

// for (let index = 0; index < friends.length; index++) {
//     console.log('Hello bondhu, ' + friends[index]);
// }

// foreach loop
// friends.forEach(function f(element) {
//     console.log('Hello bondhu, ' + element + ' to modern javascript');
// });

// for of
for (element of friends) {
    console.log('Hello bondhu, ' + element + ' to modern javascript again');
}

let employee = {
    name: 'Fahimul',
    salary: '2000$'
}

// use this for in loop to iterate object in javascript
for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);
}

// while loop
// let x = 1;
// while (x < 5) {
//     console.log(`${x} is less than 5`);
//     x++;
// }

// do while loop
let j = 47;
do {
    console.log(`${j} is less than 5 and we are inside do while loop.`)
}
while (j < 5)