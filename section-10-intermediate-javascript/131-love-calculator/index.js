// ================ roll dice

// use Math.random function to create random number from 0 to .99 ----- it will never reach 1
let n = Math.random();

// here we multiply random number by 6
// this will never give us the number 6 because random number never reach number 1
n = n * 6

// rounding the number to a whole number
// adding 1 so we can get the number 6 in our random generator
n = Math.floor(n) + 1;

console.log(n);


// ================ love calcualtor

prompt("what is your name?");
prompt("what is your name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

alert(`Your love score is ${loveScore}%`);