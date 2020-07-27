/**
 * @param {array} arr an array of integers
 * returns THE SAME array ie. WORKING IN PLACE
 * remove every element from the 0 index forward
 * until the callback invoked against the element returns true
 * if it never returns true, the returned mutated array should be empty
 */

function dropIt(arr, callback) {
    // your code here
    for (var i=0; i<arr.length; i++) {
        // console.log(i);
        if (callback(arr[i])===true) {
            return arr;
        } else {
            arr.splice(i,1);
            i--;
        }
    }

    return arr;

  }
  
  const isEven = num => num % 2 === 0
  
  const firstArr = [1, 3, 5, 7, 2, 4, 6];
  const firstResult = dropIt(firstArr, isEven);
  
  console.log(firstResult); // should log [2, 4, 6]
  console.log(firstArr === firstResult); // should log true
  
  const secondArr = [1, 3, 5, 7, 9];
  const secondResult = dropIt(secondArr, isEven);
  
  console.log(secondResult); // should log []
  console.log(secondArr === secondResult); // should log true
  
  console.log('*'.repeat(30));
  /**
   * @param {string} str the original string
   * @return {boolean}
   * Can the string characters be rearranged to make a palindrome?
   * palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
   */
  
  function couldBePalindrome(str) {
    // your code here
    var countObj = {};
    var oddCount = 0;
    for (var i=0; i<str.length ;i++) {
        if (countObj.hasOwnProperty(str[i])) {
            countObj[str[i]]++;
        } else {
            countObj[str[i]]=1;
        }
    }
    console.log(countObj);

    for (key in countObj) {
        if (key !== ' ' && countObj[key] % 2 !== 0) {
            oddCount++;
        } 
        if (oddCount > 1) {
            return false;
        }
    }

    return true;

  }
  
  console.log(couldBePalindrome('PPo'));
  // should log true - could be 'PoP'
  
  console.log(couldBePalindrome('oooPP'));
  // should log true - could be 'PoooP'
  
  console.log(couldBePalindrome('Yuuyuu'));
  // should log false
  console.log(couldBePalindrome('was it a car or a cat i saw '));

  console.log(couldBePalindrome('go hang a salami im a lasagna hog'));