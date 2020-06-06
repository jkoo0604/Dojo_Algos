// Write a function that, given a string, will encode it. When I say encode, what I mean is,
// for every set of the same character found consecutively, replace it with the character followed
// by the number of times that character is in a row. 

// EXAMPLE: "hello goodbye" would be encoded and returned as "hel2o go2dbye"
function encodeString(string){
    var repeatstr = 0
    for (var i=0;i<string.length;i++) {
        if (string[i]==string[i+1]) {
            
        }
    }
}


// Write a function that takes a previously encoded string and returns it to what it used to be.

// EXAMPLE: "he3llo world" would be returned as "heeello world"
function decodeString(string) {
    
}



function encodeString(string){
    // Variable for our encoded string
    let newString = "";
    // Variable for tracking the current letter we're tracking
    let char = string[0];
    // Variable for counting how many consecutive characters
    let count = 1;
    // Let's iterate through the entire string
    for(let i = 1; i < string.length; i++) {
        // Let's check if the current character matches the character we're tracking
        if(string[i]==char){
            // If it does, we'll increment our counter
            count++;
        } else {
            // Otherwise, add the character to our string,
            newString += char;
            // And check to see if we need to add a number for how many times
            // that previous character was in a row
            if(count > 1) {
                // If that number is greater than zero, we want to "encode", and add the number
                newString += count;
            }
            // Then, reset our count to 1 and our character to the next one.
            count = 1;
            char = string[i];
        }
    }
    // One last time, to handle the last character in our string
    newString += char;
    if(count > 1) {
        newString += count;
    }


    // And voila
    return newString;
}


// Write a function that takes a previously encoded string and returns it to what it used to be.

// EXAMPLE: "he3llo world" would be returned as "heeello world"
function decodeString(string) {
    // Initialize a variable for our new string that we'll be returning the decoded message with
    let newString = "";
    // Let's iterate through the string
    for(let i = 0; i < string.length; i++) {

        // Check to see if string[i] is number And not a space
        if(!isNaN(string[i]) && string[i] != " ") {
            // If it is, let's first set a number variable to the character at that string
            let num = string[i];
            // And we'll set a variable k for our while loop
            let k = i+1;
            // While the consecutive characters are numbers, and within the bounds
            // of the string itself
            while(k < string.length && !isNaN(string[k])){
                // We concatenate the number to the num variable (which is a string technically)
                num += string[k];
                // And increment k
                k++;
            }
            // Now, we have to concatenate the right character num number of times
            for(let j = 0; j < num-1; j++){
                newString+= string[i-1];
            }
            // Then finally, set i to k-1 so we can continue on from after the numbers
            i = k-1;
        } else {
            // Otherwise, the character is NOT a number, so we just add it normally.
            newString += string[i];
        }
    }

    // And tada
    return newString;
}


console.log(decodeString("he400llo wo5rld"));