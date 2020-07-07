/**
 * takes in an array
 * returns THE SAME array sorted
 * iterate through each element starting with the second
 * work backwards to "insert" the element
 * in the correct position
 * elements get duplicated forward to make way for the
 * inserted element
 */

function insertionSort(arr) {
    // your code here
    for (var i=1; i<arr.length; i++) {
        var current = arr[i];
        var j = i-1;
        while (j>=0 && current < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
  }
  
  console.log(insertionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  
  
  /**
   * takes in an array of objects
   * returns THE SAME array sorted
   * choose any sorting algo we've done so far
   * sort the elements by firstName AND THEN lastName
   */
  function multiKeySort(arr) {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && (arr[j].firstName > current.firstName || (arr[j].firstName === current.firstName && arr[j].lastName > current.lastName))){
            arr[j + 1] = arr[j];
            j--;
  
        }
        arr[j + 1] = current;
    }
    return arr;
  }

  
  console.log(multiKeySort([
    {
      firstName: 'Lee',
      lastName: 'Babba'
    },
    {
      firstName: 'Lee',
      lastName: 'Abba'
    },
    {
      firstName: 'Adam',
      lastName: 'Smith'
    }
  ]));
  
  // should log [{ firstName: 'Adam', lastName: 'Smith' }, { firstName: 'Lee', lastName: 'Abba' }, { firstName: 'Lee', lastName: 'Babba' }]