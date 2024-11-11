// array like object

function sum (a, b, c){
    // console.log(arguments);
    // console.log(arguments[4]);
    // console.log(typeof arguments);
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum (10, 20, 30, 44, 55, 66);
// console.log(total);
// console.log(typeof sum);
console.log(sum.length);