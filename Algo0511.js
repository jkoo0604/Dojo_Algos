// Write a function that will take an array of numbers, and return the
// sum of all unique numbers in that array. Hint: Use a frequency table!

// A frequency table is a dictionary where, in each key-value pair, 
// the key is the item in the array, and the value is the number of times
// that thing appears

// EXAMPLE: [1,3,3,6,6,7,8,10] will return 26 because 1+7+8+10 = 26
// EXAMPLE: [8,2,19,2,7,19,6,2] will return 21 because 8+7+6 = 21

function sumUniques(array) {
    var freq = {};
    var sum = 0;
    for (var i=0;i<array.length;i++) {
        if (array[i] in freq) {
            freq[array[i]]+=1;
        } else {
            freq[array[i]]=1;
        }
    }
    for (var j=0;j<array.length;j++) {
        if (freq[array[j]] === 1) {
            sum+=array[j];
        }
    }   
    return sum
}


// Write a function that will take a string, and return a new string that contains
// the same words, but in reverse.

// EXAMPLE: "hello world my name is Cody" will return "Cody is name my world hello"
function reverseWordOrder(string) {
    
}




function sumUniques(array) {
    let freq = {}
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        if(!freq[array[i]]) {
            freq[array[i]] = 1;
        }
        else {
            freq[array[i]]++;
        }
    }
    // let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(freq[array[i]]==1) {
            sum += array[i];
        }
    }
    return sum;
}



// Write a function that will take a string, and return a new string that contains
// the same words, but in reverse.

// EXAMPLE: "hello world my name is Cody" will return "Cody is name my world hello"
function reverseWordOrder(string) {
    let temp = "";
    let words = [];
    let i = 0;
    while(string[i] == " "){
        i++;
    }

    for(i; i < string.length; i++){
        if(string[i] == " "){
            words.push(temp);
            temp = "";
        }
        else {
            temp += string[i];
        }
    }

    if(temp != "") {
        words.push(temp);
        temp = "";
    }

    for(let i = words.length-1; i >= 0; i--) {
        temp += `${words[i]} `;
    }
    return temp;
}