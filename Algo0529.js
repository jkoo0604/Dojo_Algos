// Write a function that performs a binary search recursively.

// As a reminder, binary search is where you start in the middle of a 
// sorted array, and check to see whether the number you're looking for is
//    1. That number
//    2. Greater than that number (in this case, search again on the right side)
//    3. Less than that number (in this case, search again on the left side)

// Return a boolean for whether or not the number is in the array
function rBinarySearch(array, num ) {


    
}

function rBinarySearch(array, num, start=0, end=0) {
    if(end==0 & start==0){
        end = array.length-1;
    }
    else if(start+1 == end){
        if(array[start]==num){
            return true;
        }
        if(array[end]==num){
            return true;
        }
        return false;
    }
    let i = Math.round((end-start)/2)+start
    console.log('i', i,'start', start,'end', end)
    if(array[i]==num){
        return true;
    }
    else if(num > array[i]){
        return rBinarySearch(array, num, i, end);
    }
    else{
        return rBinarySearch(array, num, start, i);
    }
}