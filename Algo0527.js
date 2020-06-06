// Write a function that, given an array, returns the sum of the elements. USE RECURSION

// EXAMPLE: sumArr([2,5,6,7]) returns 20
function sumArr(array){

}


// Write a function that returns the sum of a number RECURSIVELY

// EXAMPLE: sigma(3) returns 6, because 3 + 2 + 1 = 6
function sigma(num, index=1) {
    if (num === index) {
        return index;
    }
    return index + sigma(num,index+1)
}

console.log(sigma(1));
console.log(sigma(2));
console.log(sigma(4));
