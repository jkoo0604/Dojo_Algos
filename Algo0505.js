// Given two strings, write an algorithm that will compare and return true or false
// based on whether or not those two strings are the same, ignoring casing
// Example: pYThOn and Python would return true because it's the same word
// with different casing

// HINT: Javascript has .toLowerCase() function built in.
function caseInsensitiveStringCompare(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    if (string1 == string2) {
        return true;
    }
    return false;
}

console.log(caseInsensitiveStringCompare('pYThOn','Python'));


// Write a function that takes a string, and returns a reversed version
// of that string. Example: an input of "hello world" would return 
// "dlrow olleh"
function reverse(string) {
    var reversestr = '';
    for (var i=string.length-1;i>=0;i--) {
        reversestr+=string[i];
    }
    return reversestr;
}

console.log(reverse('hello world'));

// Write a function that takes a string, and returns an acronym.
// Example: "please excuse my dear aunt sally" would return "pemdas"

// HINT: Make note of how you would determine if a letter is the first in a word
function acronyms(string) {
    var acronym = string[0]; //check if first char is not a space
    for (var i=1;i<string.length;i++) {
        if (string[i-1] == ' ') { // && if current char isn't a space
            acronym += string[i];
        }
    }
    return acronym;
}

console.log(acronyms('please excuse my dear aunt sally'));