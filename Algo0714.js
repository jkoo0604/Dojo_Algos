/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function unionSortedArrays(arr1, arr2) {
    // your code
    var newArray=[];
    var i=0;
    var j=0;
    while (i<arr1.length && j<arr2.length) {
        if (arr1[i] !== arr2[j]) {
            if (arr1[i] < arr2[j]) {
                newArray.push(arr1[i]);
                i++;
            } else {
                newArray.push(arr2[j]);
                j++;
            }
        } else {
            newArray.push(arr1[i]);
            i++;
            j++;
        }
    }
    while (i<arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }
    while (j<arr2.length) {
        newArray.push(arr2[j]);
        j++;
    }
    return newArray;
  }
  
  console.log(unionSortedArrays([1, 2, 2], [2, 3, 3]));
  // should log [1, 2, 2, 3, 3]
  console.log(unionSortedArrays([1, 2], [3, 4]));
  // should log [1, 2, 3, 4]
  
  
  function unionSortedArraysDedupe(arr1, arr2) {
    // your code
    var newArray=[];
    var i=0;
    var j=0;
    while (i<arr1.length && j<arr2.length) {
        if (arr1[i] !== arr2[j]) {
            if (arr1[i] < arr2[j]) {
                if (arr1[i] !== newArray[newArray.length-1]) {
                    newArray.push(arr1[i]);
                }
                i++;
            } else {
                if (arr2[j] !== newArray[newArray.length-1]) {
                    newArray.push(arr2[j]);
                }
                j++;
            }
        } else {
            if (arr1[i] !== newArray[newArray.length-1]) {
                newArray.push(arr1[i]);
            }
            i++;
            j++;
        }
    }
    while (i<arr1.length) {
        if (arr1[i] !== newArray[newArray.length-1]) {
            newArray.push(arr1[i]);
        }
        i++;
    }
    while (j<arr2.length) {
        if (arr2[j] !== newArray[newArray.length-1]) {
            newArray.push(arr2[j]);
        }
        j++;
    }
    return newArray;    
  }
  
  console.log(unionSortedArraysDedupe([1, 2, 2, 3], [1, 1, 2, 2, 3, 3]));
  // should log [1, 2, 3]
  
  
  /**
   * takes in a 2-dimensional array with equal rows and columns
   * returns an integer
   * the absolute difference between the sum of the two diagonals
   */
  
  function diagonalDifference(twoDArray) {
    // your code here
    var i=0;
    var j=twoDArray.length-1;
    var sum1=0;
    var sum2=0;
    while (j>=0) {
        sum1 += twoDArray[i][i];
        sum2 += twoDArray[j][i];
        i++;
        j--;
    }
    return Math.abs(sum1-sum2);
  }
  
  Math.abs(5 - 10); // returns 5
  
  console.log(diagonalDifference([
    [1, 2, 3, 6],
    [4, 5, 6, 4],
    [7, 8, 9, 2],
    [5, 7, 2, 1]
  ]));
  console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
  // should log 0: (1 + 5 + 9) - (3 + 5 + 7)