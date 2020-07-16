/**
 * takes in an array of integers
 * returns an ARRAY of OBJECTS
 * with each one having two key/value pairs: the index and the number
 * the array should have ONLY non-consecutive values
 * the first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
    // your code here
    var newArray=[];
    for (var i=1; i<arr.length; i++) {
        if (arr[i]-arr[i-1]>1) {
            newArray.push({'i': i, 'n': arr[i]});
        }
    }

    return newArray;
  }
  
  console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
  // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
  
  console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
  // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives
  
  
  /**
   * takes in an array of integers
   * and a given sum
   * returns an array of ALL the consecutive integers
   * that make the sum
   * BONUS: what if there are zeros in the input array?
   */
  
  function findConsecutiveSums(arr, sum) {
    // your code here
    var newArray=[];
    var i=0;
    while (i<arr.length-1) {
        var tempsum = arr[i];
        var tempArray = [arr[i]];
        var j=i+1;
        while (j<arr.length && tempsum < sum) {
            tempsum+=arr[j];
            tempArray.push(arr[j]);
            j++;
        }
        if (tempsum === sum) {
            newArray.push(tempArray);
        }
        i++;
    }
    return newArray;
  }
  
  console.log(findConsecutiveSums([2, 5, 3, 6, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //   [3, 6, 7]
  // ]