console.log('hello');

// let menu = document.getElementById('menu');
// console.log(menu);

// let nav = document.getElementById('nav');
// console.log(nav);

let containers = document.getElementsByClassName('container');
console.log(containers);

// first containers
console.log(containers[0]);

// query first item only
let sel = document.querySelector('#nav>li');
console.log(sel);

// query all items
let sel2 = document.querySelectorAll('#nav>li');
console.log(sel2);

// changing list item from javascript
// sel2[0].innerHTML = 'Changed';
