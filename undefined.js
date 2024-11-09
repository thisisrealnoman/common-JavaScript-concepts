/**
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give undefined
 * 6. accessing array elements outside of the index range will give undefined
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 */



// 1.
let first;
// console.log(first);



// 2.
function second(a, b){
    const total = a + b;
}
const result = second();
// console.log(result);



// 3.
function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(1, 2);



// 4.
function noNegative(num1, numb2){
    if(num1 < 0 || numb2 < 0){
        return;
    }
    return num1 + numb2;
}

const result4 = noNegative(2, -6);
// const result4 = noNegative(2, 6);
// console.log(result4);




// 5.
const fifth = {id: 10, name:"SRK", age: 50};
// console.log(fifth.name, fifth.salary);



// 6.
const sixth = [1, 23, 45, 67, 876];
// console.log(sixth[2], sixth[6], sixth[200]);



// 7.
const seventh = [10, 13, 45, 67, 66];
// you shouldn't do it, instead splice
delete seventh[2];
// console.log(seventh[2], seventh[3], seventh[4]);
// console.log(seventh);


// 8.

const eighth = undefined;

const ninth = null;

const data = {results: [], updated: null};

// console.log(typeof undefined);
console.log(typeof null);