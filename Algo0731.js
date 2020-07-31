/**
 * @param {string} str the input string
 * @return {number} the length of the longest substring with distinct characters
 */

function lengthOfLongestSubstring(str) {
    // your code here
    var freq ={};
    var maxStr ='';
    var tempStr = '';
    for (let i=0;i<str.length;i++) {
        // console.log(freq, "mx: ", maxStr)
        if (freq.hasOwnProperty(str[i]) === false) {
            // console.log('adding')
            tempStr += str[i];
            freq[str[i]] = 1;
        } else {
            // console.log('found repeat char')
            if (tempStr.length > maxStr.length) { 
                maxStr = tempStr;
            }
            tempStr = str[i];
            freq = {};
            freq[str[i]] = 1;
        }
    }
    if (tempStr.length > maxStr.length) { 
        maxStr = tempStr;
    }
    return maxStr + ' length: ' + maxStr.length;
  }
  
  console.log(lengthOfLongestSubstring('abcabcbb'));
  // should log 3: 'abc'
  
  console.log(lengthOfLongestSubstring('bbbbb'));
  // should log 1: 'b'
  
  console.log(lengthOfLongestSubstring('pwwkew'));
  console.log(lengthOfLongestSubstring('pwwkewabe'));
  // should log 3: 'wke'
  
  
  /**
   * @param {string} str1
   * @param {string} str2
   * @return {boolean}
   * Ignoring case, can the characters from string 2 build string 1?
   */
  
  function canBuildString1FromString2(str1, str2) {
    // your code here
    var freq1 ={};
    for (let i=0;i<str1.length;i++) {
        if (freq1.hasOwnProperty(str1[i].toLowerCase())) {
            freq1[str1[i].toLowerCase()]++;
        } else {
            freq1[str1[i].toLowerCase()] = 1;
        }
    }
    var freq2 ={};
    for (let i=0;i<str2.length;i++) {
        if (freq2.hasOwnProperty(str2[i].toLowerCase())) {
            freq2[str2[i].toLowerCase()]++;
        } else {
            freq2[str2[i].toLowerCase()] = 1;
        }
    }

    for (key in freq1) {
        if (!freq2.hasOwnProperty(key) || freq1[key] > freq2[key]) {
            return false;
        }
    }
    return true;
  }

  function lenOfLongestSubStr(str) {
    let maxLen = 0;
    let subStr = "";
  
    for (let i = 0; i < str.length; i++) {
      subStr = "";
  
      // if remaining chars left are fewer than current maxLen
      // it's not possible for there to be a longer subStr
      if (str.length - i < maxLen) {
        return maxLen;
      }
  
      for (let j = i; j < str.length; j++) {
        if (subStr.includes(str[j])) {
          break;
        } else {
          subStr += str[j];
        }
      }
  
      if (subStr.length > maxLen) {
        maxLen = subStr.length;
      }
    }
    return maxLen;
  }
  
  // Time: O(n^2) quadratic
  // Time: O(n)
  function lenOfLongestSubStr2(str) {
    let maxLen = 0;
  
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      let seen = {};
  
      // if remaining chars left are fewer than current maxLen
      // it's not possible for there to be a longer subStr
      if (str.length - i < maxLen) {
        return maxLen;
      }
  
      for (let j = i; j < str.length; j++) {
        let char = str[j];
  
        if (seen.hasOwnProperty(char)) {
          break;
        } else {
          seen[char] = true;
          count++;
        }
      }
  
      if (count > maxLen) {
        maxLen = count;
      }
    }
    return maxLen;
  }
  
  // src = Morley Tatro
  // Time: O(n) linear
  // Space: O(n)
  function longestSubstring(str) {
    const seenChars = {};
  
    let longest = 0,
      startIndex = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (seenChars.hasOwnProperty(char) && startIndex <= seenChars[char]) {
        startIndex = seenChars[char] + 1;
      }
  
      seenChars[char] = i;
      const diff = i - startIndex + 1;
  
      if (diff > longest) {
        longest = diff;
      }
    }
    return longest;
  }
  
  'HELLO'.toLowerCase(); // returns 'hello'
  
  console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
  console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
  console.log(canBuildString1FromString2('hello', 'helo')); // should log false
  console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true
  
  
  /**
   * @param {number} hours
   * @param {number} minutes
   * @return {string}
   */
  
  function timeInWords(hours, minutes) {
    // your code here
    hoursDict = {
        0: 'zero',
    }
    minutesDict = {
        15: 'quarter',
        30: 'half',
        45: 'quarter',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
        }
    minuteDict2 = {
        "2": 'twenty',
        "3": 'thirty',
        "4": 'forty',
        "5": 'fifty'
    }
    minuteDict3 = {
        "1": 'one',
        "2": 'two',
        "3": 'three',
        "4": 'four',
        "5": 'five',
        "6": 'six',
        "7": 'seven',
        "8": 'eight',
        "9": 'nine',
        "0": ''
    }


    var newMinutes = '';
    var newHours = '';
    var tempStr = ' past '

    if (minutes>30) { 
        minutes = 60-minutes;
        hours++;
        tempStr = ' to '
    }
   
    if (minutesDict.hasOwnProperty(minutes)) {
        // console.log('found in first', minutesDict[minutes])
        newMinutes = minutesDict[minutes];
    } else {
        if (minutes.toString().length === 2) {
            newMinutes = minuteDict2[minutes.toString()[0]] + '-' + minuteDict2[minutes.toString()[1]]
        } else {
            newMinutes = minuteDict3[minutes.toString()[0]];
        }
    }

    if (hoursDict.hasOwnProperty(hours)) {
        newHours = hoursDict[hours]
    } else {
        if (minutesDict.hasOwnProperty(hours)) {
            newHours = minutesDict[hours];
        } else {
            if (hours.toString().length === 2) {
                newHours = minuteDict2[hours.toString()[0]] + '-' + minuteDict2[hours.toString()[1]]
            } else {
                newHours = minuteDict3[hours.toString()[0]];
            }
        }
    }
    return newMinutes + tempStr + newHours
    
  }
  
  function timeInWordss(h, m) {
    const timeWords = [
      "o' clock",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "quarter",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
      "twenty one",
      "twenty two",
      "twenty three",
      "twenty four",
      "twenty five",
      "twenty six",
      "twenty seven",
      "twenty eight",
      "twenty nine",
      "half",
    ];
  
    let hour = h,
      min = m,
      temporalPreposition = "past",
      minuteNoun = "minutes ";
  
    // calc minutes til next hour and increment hour
    if (min > 30) {
      min = 60 - m;
      // increment from 12 to 1, otherwise increment by 1
      hour = h === 12 ? 1 : h + 1;
      temporalPreposition = "to";
    }
  
    if (min == 15 || min == 30) {
      minuteNoun = "";
    } else if (min == 1) {
      minuteNoun = "minute ";
    }
  
    const hourWord = timeWords[hour],
      minWord = timeWords[min];
  
    return min === 0
      ? `${hourWord} ${minWord}`
      : `${minWord} ${minuteNoun}${temporalPreposition} ${hourWord}`;
  }


  console.log(timeInWords(5, 15)); // should log 'quarter past five'
  console.log(timeInWords(5, 30)); // should log 'half past five'
  console.log(timeInWords(5, 40)); // should log 'twenty minutes to six'
  console.log(timeInWords(5, 45)); // should log 'quarter to six'
  console.log(timeInWords(12, 0)); // should log `twelve o'clock`
  console.log(timeInWords(23, 28)); // should log 'twenty eight minutes past twenty three'
  console.log(timeInWords(23, 45)); // should log 'quarter to zero'