// Write a function that takes a string, and returns a boolean based on 
// whether or not the string is a palindrome.

// EXAMPLE: "tacocat" is a palindrome because it is the same backwards and forwards.

// Challenge: ignore spaces, so "taco ca t" would still return true
function isPalindrome(string) {
    // var newstr = '';
    // for (i = 0;i<string.length;i++) {
    //     if (string[i] !== ' ') {
    //         newstr+=string[i];
    //     }
    // }
    
    var strcheck = false;
    j = 0;
    for (var i=0;i<string.length/2;i++) {
        if (string[i] != ' ' && string[string.length-i-1] != ' ') {
            j = i;
        } else if ()
        if (string[i] == string[string.length-i-1]) {
            strcheck = true;
        } else {
            
            return false;
        }
    }
    if (strcheck = true) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("taco ca t"));

// while i < j iterate through loop
// i starts at 0, j starts at length-1
// if space is found, increment i or decrement j


// CHALLENGE ALGORITHM: Write a function that will find and return the longest palindrome within a string
// EXAMPLE: "the man ate a banana with his tacocat at dinner the other day" would return "tacocat" 
// Without tacocat, longest substring would be anana.
function longestPalindrome(string) {

}

function isPalindromeWithSpaces(string){
    // Keep track of an iterator for the left half and the right half of the text itself
    let i = 0;
    let j = string.length-1;
    
    // While i < j --> This means we're going to repeat this logic until the two iterators meet
    while(i<j) {
        // If the character at the left iterator is a space, move the left iterator to the right by one place
        if(string[i] == " ") {
            i++;
        }
        // If the character at the right iterator is a space, move the right iterator to the left by one place
        else if(string[j] == " ") {
            j--;
        }
        // If the character at the left iterator does not match the character at the right iterator, it's not a palindrome
        else if(string[i] != string[j]) {
            return false;
        }
        // If the character at both iterators match, move the left iterator to the right by one space, and the right iterator to the left by one space
        else {
            console.log(`${string[i]} -- ${string[j]}`)
            i++;
            j--;
        }
    }
    // If we made it all the way through, it must be a palindrome
    return true;
}


function longestPalindrome(string) {
    // let's first initialize a couple of variables:
    // a start, which will be how we keep track of where the longest palindromic substring starts,
    // and a maxLength, which tells us how long the substring itself is
    // As we're gonna start at the beginning, and any individual character is technically 
    // a palindrome since it's only one character, we'll start at 0 and have a maxLength of 1
    let start = 0;
    let maxLength = 1;

    // The general idea here is that we are going to loop through each character in our string, starting at the second character
    // At each character, we will move a low and high iterator out to the left and right, respectively, until the left iterator
    // and right iterator are not at the same characters
    // At that point, we will compare the difference between high and low to our maxLength. If the difference+1 is greater, than 
    // we've found a longer substring.

    // IMPORTANT! In order to handle both even-length and odd-length palindromes, this process will happen twice (once for each)
    for(let i = 1; i < string.length-1; i++) {
        // This will find the longest even length palindromic substring around a given character. something like "anna"
        let low = i-1;
        let high = i;
        // While the low and high iterators are within the bounds of the string itself, AND the low character == the high character
        while(low >= 0 && high < string.length-1 && string[low].toLowerCase() == string[high].toLowerCase()) {
            // We will check to see if the current substring we're looking at is longer than the previously longest substring
            if(high - low + 1 > maxLength) {
                // If it is, let's set the start of our longest substring to the low iterator, and maxLength to the length of this
                // substring we're looking at
                start = low;
                maxLength = high - low + 1;
            }
            // then we decrement low and increment high and check again
            low--;
            high++;
        }


        // This will find the longest odd length palindromic substring around a given character. Something like "tacocat"

        // Because a 1 character long string is automatically a palindrome, let's start one to the left and right of the character we're at
        low = i-1;
        high = i+1;
        // Same logic here as above. Check the low and high iterators against the bounds of the string, and check that the characters at
        // low and high match
        while(low >= 0 && high < string.length && string[low].toLowerCase() == string[high].toLowerCase()) {
            // if they do, and the substring we're looking at is longer than the previously max length substring
            if(high - low + 1 > maxLength) {
                // then set start to our low iterator, and maxlength to the length of the current substring
                start = low;
                maxLength = high - low + 1;
            }

            // move each iterator in opposite directions
            low--;
            high++;1
        }
    }

    // Now let's go ahead and figure out what the substring actually is
    let longest = "";
    // starting at our start index, and going until we've reached our maxLength, add each character to the longest string
    for(let i = start; i < start+maxLength; i++) {
        longest += string[i];
    }

    // and return it!
    return longest;
}

/* LET'S WALK IT THROUGH! 
start = 0
maxLength = 1
 i
I saw anna there
lh
 is low and high within the bounds of our string (yes) AND are the characters at low and high the same (NO) ?
 ^REPEAT for odd length check
 i
I saw anna there
l h
 is low and high within the bounds of our string (yes) AND are the characters at low and high the same (NO) ?
MOVE IT ALONG
  i
I saw anna there
 lh
 is low and high within the bounds of our string (yes) AND are the characters at low and high the same (NO) ?
 ^REPEAT for odd length check
  i
I saw anna there
l h
 is low and high within the bounds of our string (yes) AND are the characters at low and high the same (NO) ?
MOVE IT ALONG
** for brevity's sake we'll move along until we start something interesting
start = 0
maxLength = 1
        i
I saw anna there
       lh
         is low and high within the bounds of our string (yes) AND are the characters at low and high the same (YES) ?
         is high-low+1 greater than current maxLength? -> yes, high-low+1 is 2, and maxLength is 1
            so now start is low and maxLength is high-low+1
start = 7
maxLength = 2
now decrement low and increment high
        i
I saw anna there
      l  h
        is low and high within the bounds of our string (yes) AND are the characters at low and high the same (YES) ?
        is high-low+1 greater than current maxLength? -> yes, high-low+1 is 4, and maxLength is 2
            so now start is low and maxLength is high-low+1
start = 6
maxLength = 4
now decrement low and increment high
        i
I saw anna there
     l    h
        is low and high within the bounds of our string (yes) AND are the characters at low and high the same (YES) ?
        is high-low+1 greater than current maxLength? -> yes, high-low+1 is 6, and maxLength is 4
            so now start is low and maxLength is high-low+1
start = 5
maxLength = 6
        i
I saw anna there
    l      h
        is low and high within the bounds of our string (yes) AND are the characters at low and high the same (NO) ?
    SO WE BREAK THAT WHILE LOOP
    And we repeat again for odd-length, but for that low is at n and high is at a which are not the same character
         i
I saw anna there
  ** going to skip ahead until the next time something interesting happens
              i
I saw anna there
             lh
             even check does nothing because e != r
             BUT
              i
I saw anna there
             l h
             is high and low within the bounds of our string (yes) AND are the characters at low and high the same (YES) ?
             is high-low+1 greater than maxLength? -> no, maxLength is 6 at this point, and high-low+1 is 3
             so we decrement low and increment high
              i
I saw anna there
            l   h
            is high and low within the bounds of our string (NO) -> high is outside, so we break
               i
I saw anna there
              lh
              is high and low within the bounds of our string (yes) AND are the characters at low and high the same (NO) ?
               i
I saw anna there
              l h
              is high and low within the bounds of our string (NO) -> high is outside, so we break
NOW THAT WE HAVE GONE THROUGH THE ENTIRE STRING, let's find our longest substring
iterate from start = 5 through the next 6 characters, let's add them to our longest
and we find the longest substring in our string is " anna "
PHEW, that was a lot! Aren't you glad we're not always expected to think like a computer??
*/