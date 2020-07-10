/**
 * takes in an UNSORTED array
 * returns the SAME array sorted
 * working in place, use yesterday's arrayPartition internally
 * and call the function recursively as needed
 */


function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    if(endIdx-startIdx<1) return arr;
    let middle = arrayPartition(arr, startIdx, endIdx);
    return quickSort(arr, startIdx, middle), quickSort(arr, middle+1, endIdx);
  }
  const arr = [1, 5, 17, 2, 8, 3, 4,7,10,20,12,15];
  console.log(quickSort(arr));
  // should log [1, 2, 3, 4, 5, 8]
  
  // check to see if portion of the array we're sorting has at least 2 elements
  // if it does, arrayPartition against that portion
  // quickSort the left and the right portions surrounding the new pivot index