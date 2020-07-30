/**
 * @param {string} honorific
 * @param {string[]} fullNames
 * @return {string[]} names with honorific applied
 * BONUS: use functional programming
 */

function addHonorificToFormattedNames(honorific, fullNames) {
    // your code here
  return fullNames.map(name => {
    let [lastName, firstName] = name.split(', ');
    return (honorific + ' ' + firstName + ' ' + lastName)
  })
}

console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
// should log ['Mr. Bob Smith', 'Mr. Mike Jones']

console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
// should log ['Mrs. Beth HorseDoctor']


/**
 * @param {string} v1
 * @param {string} v2
 * @return {number} 1 if v1 > v2; 0 if they're equal; -1 if v1 < v2
 */
  
function compareVersions(v1, v2) {
    // your code here
  const v1arr = v1.split(".");
  const v2arr = v2.split(".");
  let i = 0;
  while (i < v1arr.length && i < v2arr.length) {
    if (v1arr[i] > v2arr[i]) return 1;
    else if (v2arr[i] > v1arr[i]) return -1;
    i++;
  }
  if (v1arr.length > v2arr.length) {
    if (v1arr[i] > 0) return 1;
  } else {
    if (v2arr[i] > 0) return -1;
  }
  return 0;
}

function compareVersions2(v1, v2){
  let s1 = v1.split('.');
  let s2 = v2.split('.');
  let sum1 = 0;
  let sum2 = 0;
  let i = 0;
  while(i < s1.length || i < s2.length){
      if(s1.length > i) sum1 += +s1[i];
      if(s2.length > i) sum2 += +s2[i];
      if(sum1 > sum2) return 1;
      if(sum2 > sum1) return -1;
      i++;
  }
  return 0;
}

console.log(compareVersions2('0.1', '1.0')); // should log -1
console.log(compareVersions2('1.0.1', '1.0')); // should log 1
console.log(compareVersions2('2.0', '2.0.0')); // should log 0

console.log(compareVersions('0.1', '1.0')); // should log -1
console.log(compareVersions('1.0.1', '1.0')); // should log 1
console.log(compareVersions('2.0', '2.0.0')); // should log 0