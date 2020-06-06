

/* *********************************************************
            THESE ALGOS ARE TO BE DONE RECURSIVELY
********************************************************* */

// Write a function that, given a number, returns its factorial

// Factorial: 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
// The ! does not mean the number is really excited!!

// EXAMPLE: factorial(3) returns 6 because 3 * 2 * 1 = 6
function factorial(num, index=1){
    if (num === index) {
        return index;
    }
    return index * factorial(num,index+1)
}


//Write a function that, given a number, will return that element in the Fibonacci sequence

// Fibonacci Sequence: Each number in the sequence is the sum of the previous two numbers.

// 1 1 2 3 5 8 13 21 34 ...

// EXAMPLE: rFib(4) would return 3, because 3 is the 4th number in the fibonacci sequence!

// NOTE! You may need to have an additional parameter!!
function rFib(num, array=[0,1],index=2) {
    if (num<=array.length-1) {
        array[index]=array[array.length-1]+array[array.length-2];
        return array;
    }
    return rFib(num,array, index+1);
     
}

console.log(rFib(1));
console.log(rFib(3));
console.log(rFib(5));


function factorial(num){
    // Base case! If num is 1, we've reached the smallest part of the factorial
    if (num == 1) {
        return num;
    }

    // Recursive Case: Multiply the current number by whatever the function call returns.

    // The logic behind this is that, for example, 
    return num * factorial(num-1);
}


//Write a function that, given a number, will return that element in the Fibonacci sequence

// Fibonacci Sequence: Each number in the sequence is the sum of the previous two numbers.

// 1 1 2 3 5 8 13 21 34 ...

// EXAMPLE: rFib(4) would return 3, because 3 is the 4th number in the fibonacci sequence!

// NOTE! You may need to have an additional parameter!!
function rFib(num) {
    if(num <= 1) {
        return num;
    }
    return rFib(num-1) + rFib(num-2);
}