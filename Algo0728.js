/**
 * @param {string} str
 * @return {boolean}
 * Are there 2 digits separated by exactly 3 question marks that sum to 10?
 */

function questionMarks(str) {
    // your code here
    var i=0;
    while (i<str.length-2) {
        if (!isNaN(parseInt(str[i]))) {
            var j=i+1;
            while (j<str.length) {
                if (!isNaN(parseInt(str[j]))) {
                    var questionCount = (j-i+1) - str.substring(i,j+1).replace(/\?/g,'').length
                    // console.log(i, j, '7??sss?3'.replace('?','').length);
                    if (questionCount === 3 && parseInt(str[i]) + parseInt(str[j]) === 10) {
                        return true;
                    }
                    break;
                } 
                j++;
            }
            i=j-1;
        }
        i++;
    }
    return false;
}
function questionMarks2(str) {
    // your code here
    var i=0;
    while (i<str.length-2) {
        var questionCount=0;
        if (!isNaN(parseInt(str[i]))) {
            var j=i+1;
            while (j<str.length) {
                if (parseInt(str[i]) + parseInt(str[j]) === 10 && questionCount === 3) {
                    return true;
                } else if ((!isNaN(parseInt(str[j])) && questionCount !== 3) || questionCount > 3) {
                    break;
                } else if (str[j] === '?') {
                    questionCount++;
                }
                j++;
            }
            i=j-1;
        }
        i++;
    }
    return false;
}

function questionMarks3(str) {
    let questionCounter = 0;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '?') {
            questionCounter++;
        } else if (!isNaN(parseInt(str[i]))) {
            console.log('this is the question counter: ', questionCounter);
            if (sum == 0) {
                questionCounter = 0;
                sum += parseInt(str[i]);
            } else if (questionCounter == 3) {
                sum += parseInt(str[i]);
            }
            console.log('this is the sum: ', sum);

            if (sum == 10) {
                return true;
            }
        }
    }
    return false;
}

parseInt('s') // returns NaN
parseInt('5') // returns 5
isNaN(NaN) // returns true
isNaN(parseInt('9')) // returns false

console.log(questionMarks('aa6?9')); // should log false
console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
console.log(questionMarks('?3?d?dad?7??????3')); // should log true
console.log(questionMarks('7??????3')); // should log false


/**
 * @param {string} str1
 * @param {string} str2
 * consisting of lowercase characters and backspaces (#)
 * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
 * BONUS: solve in O(n)
 */

function backspaceStringCompare(str1, str2) {
// your code here
    var temp1 = str1;
    var temp2 = str2;
    for (var i=0;i<temp1.length;i++) {
        if (temp1[i] === '#') {
            temp1 = temp1.substring(0,i-1) + temp1.substring(i+1);
            i-=2;
        }
    }

    for (var j=0;j<temp2.length;j++) {
        if (temp2[j] === '#') {
            temp2 = temp2.substring(0,j-1) + temp2.substring(j+1);
            j-=2;
        }
    }
    // console.log(temp1, temp2);
    return temp1 === temp2;
}

console.log(backspaceStringCompare('ab#c', 'ad#c'));
// should log true - they both become 'ac'

console.log(backspaceStringCompare('ab##', 'c#d#'));
// should log true - they both become ''

console.log(backspaceStringCompare('a##c', '#a#c'));
// should log true - they both become 'c'