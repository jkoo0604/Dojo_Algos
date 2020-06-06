// Write a binary search function that, given a sorted array and a number, will 
// return whether the number exists in the array. 

// The idea of binary search is you start at the middle, check to see if the number
// given is equal to, greater than, or less than the element in the middle, and do
// one of the following:
// 1. If the element we're looking at is EQUAL to the number requested, return true
// 2. If the element we're looking at is GREATER than the number requested, find 
//    the element in the middle of the LEFT side of the current element and do the
//    same check again. 
// 3. If the element we're looking at is LESS than the number requested, find 
//    the element in the middle of the RIGHT side of the current element and do the
//    same check again. 

// EXAMPLE: binarySearch([1,3,4,5,6], 2) --> false, because 2 is not in the array
function binarySearch(array, num){
    var range = [0,array.length-1];
    var currentindex = Math.floor((range[1]-range[0])/2);

    while (range[1]-range[0] > 0) {
        if (array[currentindex] === num) {
            // console.log(range);
            return true;
        } else if (array[currentindex] < num) {
            // console.log(range);
            range[0] = currentindex+1;
            currentindex = Math.floor((range[1]+range[0])/2);
        } else if (array[currentindex] > num) {
            // console.log(range);
            range[1] = currentindex-1;
            currentindex = Math.floor((range[1]+range[0])/2);
        }
    }
    if (array[range[0]]===num) {
        return true;
    }
    return false;
}

console.log(binarySearch([1,3,4,5,6], 2));
console.log(binarySearch([1,3,4,5,6], 5));
console.log(binarySearch([1,3,4,5,6,7], 5));
console.log(binarySearch([1,3], 3));
console.log(binarySearch([1,3], 2));
console.log(binarySearch([4,5], 4));


function binarySearch(array, num){
    let start = 0;
    let mid = Math.floor((array.length-1)/2);
    let end = array.length-1;

    while(end-start > 0){
        if(num == array[mid]){
            return true;
        }
        else if(num < array[mid]){
            end = mid-1;
        }
        else {
            start = mid+1;
        }
        mid = Math.floor((start+end)/2);
    }
    if(num == array[start]){
        return true;
    }
    return false;
}
console.log(binarySearch([1,2], 2));

