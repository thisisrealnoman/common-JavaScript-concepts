/**
 * Truthy:
 * 1. True
 * 2. any number(+ve or -ve) will be truthy except 0
 * 3. any string other than empty string
 * 4. '0', 'false'
 * 5. {} (empty object)
 * 6. [] (empty array)
 * 
 * Falsy:
 * 1. False
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */

const x = "";

if(x){
    console.log("value of x is truthy");
}
else{
    console.log("value of x is falsy");
}


// optional
// check falsy 
const y = '';
if(!y){
    console.log("value is falsy")
}


// check truthy
const z = 50;
if(!!z){
    console.log("value is truthy");
}