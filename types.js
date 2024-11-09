// JavaScript is a dynamic typed language

// Primitive
const myNumber = 9;
const myString = "hello";
const isOkay = true;

// non-primitive
const ages = [10, 12, 14, 19, 20];
const person = {id: 23, class:9};

// console.log(typeof myNumber, typeof myString, typeof isOkay, typeof ages, typeof person);


// primitive type
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


// non primitive type
let p = {job: "web developer"};
let q = p;
console.log(p, q);
// q = {job: "fronted developer"};
// console.log(p, q);
q.job = "backend developer";
console.log(p, ...q);