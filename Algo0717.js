/**
 * takes in an array of integers
 * returns an array of TWO INDICES
 * the indices should point to the two elements
 * that add up to the given sum
 * assume that there is only one solution
 * numbers can only be used once
 */

function sumTwo(arr, sum) {
    // your code here
    for (var i=0;i<arr.length-1;i++) {
        var j=i+1;
        while (j<arr.length) {
            if (arr[i]+arr[j]===sum) {
                return [i, j];
            } else if (arr[i]+arr[j] > sum) {
                break;
            }
            j++;
        }
    }
    return [];
  }

  function sumTwo2(arr, sum) {
    let dict = {};
    for(let i=0; i<arr.length; i++){
      if(sum-arr[i] in dict){
        return [i, dict[sum-arr[i]]];
      }
      dict[arr[i]] = i;
    }
  }
  
  console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]
  console.log(sumTwo([11, 15, 2, 7], 22)); 
  
  
  /**
   * takes in an array of integers
   * and an integer
   * returns an array of the "k" most frequent values
   * the input array WON'T NECESSARILY BE IN ORDER
   * the output array NEED NOT BE ORDERED
   * you can assume there's always a valid answer
   */
  
  function kMostFrequent(arr, k) {
    // your code here
    var newArray = [];
    var tempObj = {};
    for (var i=0;i<arr.length;i++) {
        if (tempObj[arr[i]]) {
            tempObj[arr[i]]++;
        } else {
            tempObj[arr[i]] = 1;
        }
    }
    while (newArray.length<k) {
        var maxIdx = 0;
        var max = 0;
        for (key in tempObj) {
            if (tempObj[key] > max) {
                maxIdx = key;
                max = tempObj[key];
            }
        }
        newArray.push(+maxIdx);
        tempObj[maxIdx] = 0;
    }
    return newArray;
  }
  
  console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
  // should log [1, 2] or [2, 1]
  
  console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
  // should log [0]
  
  console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order