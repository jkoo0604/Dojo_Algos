// Write a function that will remove duplicate characters (case-sensitive)
// including punctuation. Keep only the LAST instance of each character

// EXAMPLE: Given "Snaps! crackles! pops!", return "Snrackle ops!"
function dedupe(string){
    for (var i =0; i<string.length;i++){
        var newstring='' 
        for (var j =i+1; j<string.length;j++){
            if (string[i]=== string[j]){
                
            }
            

    }

}

function dedupe2(string) {
    var tempobj = {};
    for (var i=0;i<string.length;i++) {
        if (string[i] in tempobj) { 
            tempobj[string[i]] += 1;
        } else {
            tempobj[string[i]] = 1;
        }
    }
    // return tempobj;
    var tempstr = ''
    for (var j=0;j<string.length;j++) {
        if (tempobj[string[j]]===1) {
            tempstr+=string[j];
        } else {
            tempobj[string[j]]-=1;
        }
    }
    return tempstr
}

console.log(dedupe2("Snaps! crackles! pops!"))

[object Object] {
    : 2,
   !: 3,
   a: 2,
   c: 2,
   e: 1,
   k: 1,
   l: 1,
   n: 1,
   o: 1,
   p: 3,
   r: 1,
   S: 1,
   s: 3
 }

// Write a function that, given a string, will maintain the order of each word,
// but reverse each word individually.

// EXAMPLE: Given "hello world my name is Cody", return
// "olleh dlrow ym eman si ydoC"
function reverseWords(string){
    var temparray = [];
    for (var i=0;i<string.length;i++) {
        var tempstr = '';
        for (var j=i+1;j<string.length;j++) {
            while (string[j]!== " ") {
                tempstr+=string[j];
            }
        }
        temparray.push(tempstr);
    }
}


function dedupe(string){
    // Let's use a frequency table! We'll loop through the string and populate the frequency table
    // with how many times each character appears
    let freq = {};
    for(let i = 0; i < string.length; i++) {
        if(!freq[string[i]]){
            freq[string[i]] = 1;
        } else {
            freq[string[i]]++;
        }
    }
    // Now let's create our new string!
    let newString = "";
    // The goal here is to loop through the string, and use the frequency table
    // to determine if the character we're looking at is the last one in the string
    for(let i = 0; i < string.length; i++) {
        // Decrement the value in the frequency table for each character
        freq[string[i]]--;
        // If, after decrementing the value in the frequency table, the value is 0,
        // that means it's the last time the character appears in the string, so we can
        // add the character to the new string.
        if(freq[string[i]] == 0){
            newString += string[i];
        }
    }

    return newString;
}


// Write a function that, given a string, will maintain the order of each word,
// but reverse each word individually.

// EXAMPLE: Given "hello world my name is Cody", return
// "olleh dlrow ym eman si ydoC"
function reverseWords(string){
    let newstring = "";
    let word = "";
    for(let i = 0; i < string.length; i++) {
        if(string[i] == " "){
            newstring += word + " ";
            word = "";
        } else {
            word = string[i] + word;
        }
    }

    newstring += word

    return newstring;
}

console.log(reverseWords("Hello world my name is Cody"));