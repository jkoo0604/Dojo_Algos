/**
 * takes in two arrays
 * returns a NEW array
 * with elements that ONLY APPEAR in one array
 * elements in the input arrays NEED NOT BE SORTED
 * the ordering of your output array NEED NOT BE SORTED
 * BONUS: allow it to take in a 2D array
 */

// AKA symmetric difference

function disjunctiveUnion(arr1, arr2) {
    // your code here
    var newArray = [];
    var freq = {};
    var i=0;
    var j=0;
    while (i<arr1.length) {
        if(freq[arr1[i]]) {
            freq[arr1[i]]++;
        } else {
            freq[arr1[i]] = 1;
        }
        i++;
    }
    while (j<arr2.length) {
        if(freq[arr2[j]]) {
            freq[arr2[j]]++;
        } else {
            freq[arr2[j]] = 1;
        }
        j++;
    }
    for (const key in freq) {
        if (freq[key]===1) {
            newArray.push(+key);
        }
    }
    return newArray;
  }
  
  console.log(disjunctiveUnion([1, 2], [2, 1]));
  // should log [] since 1 and 2 are in both
  console.log(disjunctiveUnion([1, 2, 3], [1, 2]));
  // should log [3]
  
  
  function disjunctiveUnionBonus(arr) {
    // your code here
    var newArray = [];
    var freq = {};
    var i=0;
    while (i<arr.length) {
        var j = 0;
        while (j<arr[i].length) {
            if(freq[arr[i][j]]) {
                freq[arr[i][j]]++;
            } else {
                freq[arr[i][j]] = 1;
            }
            j++;
        }
        i++;
    }
    for (const key in freq) {
        if (freq[key]===1) {
            newArray.push(+key);
        }
    }
    return newArray;
  }
  
  console.log(disjunctiveUnionBonus([
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 5, 6, 7]
  ]));
  // should log [3, 4] or [4, 3]