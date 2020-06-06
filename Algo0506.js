// Write a function that, when passed a string, determines whether or not the 
// parentheses in the string are in a valid configuration


// EXAMPLE: parensValid("I think (it's spring)") would be valid, because the closing
// parentheses comes after the open parentheses.
// parensValid("I don't ) know how these work") would be invalid, because there is no
// open parentheses prior to the closing parentheses
function parensValid(string){
    var opencount = 0;
    var closecount = 0;
    for (var i =0;i<string.length;i++) {
        if (string[i] == "(") {
            opencount +=1;
        } else if (string[i] == ")") {
            closecount += 1;
        }
        if (opencount < closecount) {
            return false
        }
    }
    if (opencount != closecount) {
        return false
    }
    return true
}

console.log(parensValid("I think (it's spring)"));
console.log(parensValid("I (don't ) )(know how these work"));


// let isMatchingBrackets = function (str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {

//         // If character is an opening brace add it to a stack
//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
//         //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//         else {
//             let last = stack.pop();

//             //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//             if (str[i] !== map[last]) {return false};
//         }
//     }
//     // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//         if (stack.length !== 0) {return false};

//     return true;
// }

// console.log(isMatchingBrackets("(){}")); // returns true
// console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
// console.log(isMatchingBrackets("({(()))}}"));  // returns false