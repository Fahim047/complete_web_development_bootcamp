// alert pop-up in browser
// alert does not return anything
// alert('This is a alert!');

// prompt return a string value
// let name = prompt('What is your username?', 'Guest')
// console.log(name);

// confirm is used to give warning
// confirm returns a boolean value- true or false
// let deletePost = confirm('Do you really want to delete this post?')
// console.log(deletePost);

// if (deletePost) {
//     console.log('Your post has benn deleted successfully!')
// } else {
//     console.log("Your post has not been deleted!")
// }

let age = prompt('Enter your age', '');

if (age >= 18) {
    alert('Welcome to club!!!');
} else {
    alert("sorry you aren't allowed to the club!!!");
}
