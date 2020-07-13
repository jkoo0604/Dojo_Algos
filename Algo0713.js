/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the elements shared by both
 * BONUS: dedupe
 */

function intersectSortedArrays(arr1, arr2) {
    // your code here
    let newArray = [];
    let i=0;
    let j=0;
    while (i<arr1.length && j< arr2.length) {
        if (arr2[j] > arr1[i]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else if (arr2[j] === arr1[i]) {
            newArray.push(arr2[j]);
            i++;
            j++;
        }
        // while (arr2[j] < arr1[i]) {
        //     j++;
        // }
        // if (arr2[j] === arr1[i]) {
        //     newArray.push(arr2[j]);
        //     j++;
        // } 
        // i++;
    }
    return newArray;
}

console.log(intersectSortedArrays([1, 2, 2, 3, 4], [2, 2, 4, 4]));
// should log [2, 2]


function intersectSortedArraysDedupe(arr1, arr2) {
// your code here
    let newArray = [];
    let i=0;
    let j=0;
    while (i<arr1.length && j< arr2.length) {
        if (arr1[i] === newArray[newArray.length-1]) {
            i++;
        } else if (arr2[j] > arr1[i]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            newArray.push(arr2[j]);
            i++;
            j++;
        }
        // if (arr1[i] === newArray[newArray.length-1]) {
        //     i++;
        // } else {

        //     while (arr2[j] < arr1[i]) {
        //         j++;
        //     }
        //     if (arr2[j] === arr1[i]) {
        //         newArray.push(arr2[j]);
        //         j++;
        //     } 
        //     i++;
        // }
    }
    return newArray;
}

console.log(intersectSortedArraysDedupe([1, 2, 2, 3, 4], [2, 2, 3, 3, 3, 4, 5]));
// should log [2]


// /**
//  * takes in two SORTED arrays
//  * returns a new SORTED array
//  * with the elements shared by both
//  * BONUS: dedupe
//  */

// function intersectSortedArrays2(arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 newArr.push(arr1[i]);
//                 break;
//             }
//         }
//         // if (newArr.length > 1 && arr1[i] != arr2[j]) {
//         //     break;
//         // }
//     }
//     return newArr;
// }

// console.log(intersectSortedArrays2([1, 2, 2, 3, 4], [2, 2, 4]));
// // should log [2, 2]

// function intersectSortedArraysDedupe2(arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j] && newArr[newArr.length - 1] != arr1[i]) {
//                 newArr.push(arr1[i]);
//                 break;
//             }
//         }
//         // if (newArr.length > 1 && arr1[i] != arr2[j]) {
//         //     break;
//         // }
//     }
//     return newArr;
// }

// console.log(intersectSortedArraysDedupe2([1, 2, 2, 3, 4], [2, 2, 4]));
// // should log [2]
