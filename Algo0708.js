/**
 * takes in two SORTED arrays
 * returns a new sorted array with the combined elements
 */

function combineSortedArrays(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i]);
        i++;
      } else {
        newArr.push(arr2[j]);
        j++;
      }
    }
    if (i < arr1.length) {
      while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
      }
    }
    if (j < arr2.length) {
      while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
      }
    }
    return newArr;
  }
  
  // console.log(combineSortedArrays([2, 4, 6], [1, 3, 5, 7]));
  // // should log [1, 2, 3, 4, 5, 6]
  // console.log(combineSortedArrays([1], [3])); // should log [1, 3]
  // console.log(combineSortedArrays([1], [])); // should log [1]
  
  /**
   * takes in an UNSORTED array
   * divide and conquer approach
   * returns a sorted array
   * function is recursive
   * it uses combineSortedArrays internally
   */
  
  function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    } else {
      let middle = Math.ceil(arr.length / 2);
      let left = mergeSort(arr.slice(0, middle));
      let right = mergeSort(arr.slice(middle));
      return combineSortedArrays(left, right);
    }
  }
  
  // [1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
  // [1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]
  
  console.log(mergeSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  