// Write a function that returns whether the given array has a balance point
// BETWEEN two indices, where one side's sum is equal to the other.

// EXAMPLE: balancePoint([1,2,3,4,10]) --> true because 1+2+3+4 = 10, 
// so the balance point is between tha 3 and 4 indices
function balancePoint(array){

}

// For the Balance Index, the balance point resides ON an index, rather than
// BETWEEN two indices. So for this one, write a function that returns the balance 
// index where sums are equal on either side, and exclude its own value. Return -1
// if no such idex exists.

// EXAMPLE: balanceIndex([-2,5,7,0,3]) --> 2, because -2 + 5 = 0 + 3
// EXAMPLE 2: balanceIndex([1,4,2,2,4,1]) --> -1, because there's no index with an equal
// sum on both sides of it.
function balanceIndex(array){
    
}

function balancePoint(array){
    var left = array[0];
    var right = 0;
    for(var k = array.length-1; k>0; k--){
        right += array[k];
    }
    console.log("left: " + left);
    console.log("right: " + right);
    for(var i = 1; i < array.length; i++){
        if(left === right){
        console.log("Balance point is between " + (i-1) + " and " + i);
        return true;
        }
        left += array[i];
        right -= array[i];
        console.log("left: " + left);
        console.log("right: " + right);
    }
    return false;
} 


 function balanceIndex(array){
    var left = array[0];
    var right = 0;
    for(var k = array.length-1; k>1; k--){
        right += array[k];
    }
    console.log(left);
    console.log(right);
    for(var i = 1; i < array.length; i++){
        left += array[i-1];
        right -= array[i];
        if(left === right){
            console.log("Balance point is between " + i);
            return i;
        }
    }
    return -1;
} 

function balancePoint(array){
    // Fast Fail Check: If the array has less than 2 characters,
    // there can't be a mathematical sum for left and right
    if(array.length < 2){
        return false;
    }

    // Start sumLeft at the first number
    let sumLeft = array[0]; 
    // Start sumRight as the sum of all other numbers
    let sumRight = 0;
    for(let i = 1; i < array.length; i++) {
        sumRight += array[i];
    }

    // Loop through the array
    for(let i = 1; i < array.length; i++) {
        // If the sum of the left is equal to the sum of the right, return true
        if(sumLeft == sumRight) {
            return true;
        }
        // Otherwise, increment sumLeft by the current number and decrement 
        // sumRight by the same number
        sumLeft += array[i];
        sumRight -= array[i];
    }

    // If we've gotten out here, there's no balance point, so return false.
    return false;
}


// For the Balance Index, the balance point resides ON an index, rather than
// BETWEEN two indices. So for this one, write a function that returns the balance 
// index where sums are equal on either side, and exclude its own value. Return -1
// if no such index exists.

// EXAMPLE: balanceIndex([-2,5,7,0,3]) --> 2, because -2 + 5 = 0 + 3
// EXAMPLE 2: balanceIndex([1,4,2,2,4,1]) --> -1, because there's no index with an equal
// sum on both sides of it.
function balanceIndex(array){
    // Fast Fail Check: If the array has less than 3 numbers, we can't have a sum on 
    // the right and left
    if(array.length < 3) {
        return -1;
    }

    // Set sumLeft to the first number
    let sumLeft = array[0];
    // Set sumRight to the sum of all numbers on the right side of the 1 index
    let sumRight = 0;
    for(let i = 2; i < array.length; i++) {
        sumRight += array[i];
    }

    // Loop through the array
    for(let i = 1; i < array.length-1; i++){
        // If the sum of the left equals the sum of the right, return the index
        if(sumLeft == sumRight){
            return i;
        }
        // Otherwise, increment sumLeft by the number at the current index we're checking,
        // and decrement sumRight by the next index's number.
        sumLeft += array[i];
        sumRight -= array[i+1];
    }
    
    // If we've gotten out here, there's no balance index, so return -1
    return -1;
}