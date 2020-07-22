/**
 * takes an object with the ingredients/quanties
 * as the key/value pairs
 * and an object with the available ingredients/quantities
 * as the key/value pairs
 * returns the maximum quantity of the dish that can be prepared
 */

function getMaxServings(recipe, available) {
    // your code here
    var maxQuant = [];
    for (var key in recipe) {
        if (available.hasOwnProperty(key)) {
            if (maxQuant.length===0) {
                maxQuant.push(Math.floor(available[key] / recipe[key]))
            } else {
                maxQuant[0] = Math.min(Math.floor(available[key] / recipe[key]), maxQuant);
            }
        } else {
            return 0;
        }
    }
    return maxQuant[0];
  }

function getMaxServings2(recipe, available) {
    // your code here
    var maxQuant = Infinity;
    for (var key in recipe) {
        if (available.hasOwnProperty(key)) {
            if (Math.floor(available[key] / recipe[key])===0) {
                return 0;
            } else {
                // if (maxQuant===0) {
                //     maxQuant = Math.floor(available[key] / recipe[key]);
                // }
                maxQuant = Math.min(Math.floor(available[key] / recipe[key]), maxQuant);
            }
        } else {
            return 0;
        }
    }
    return maxQuant;
  }
  
  const recipe = {
    'organic fat': 99,
    'live squid': 1,
    'birds nest': 1,
    'fried flesh': 1,
    spicy: 5,
    'gourmet memes': 4200
  };
  
  const available = {
    'organic fat': 990,
    'live squid': 0,
    'birds nest': 10,
    'fried flesh': 10,
    spicy: 50,
    'gourmet memes': 42000,
    sugar: 9001,
    spice: 5,
    'everything nice': 1
  };
  
  console.log(getMaxServings2(recipe, available)); // should log 0
  
  available['live squid'] = 10;
  
  console.log(getMaxServings2(recipe, available)); // should log 10
  
  
  /**
   * takes in an array of ailment objects with a nested array of treatable symptoms
   * and an array of medication objects
   * return the medication(s) that treat the greatest number of the ailments
   */
  
  function getMeds(ailments, medications) {
    // your code here
    var tempObj = {};
    for (var i=0;i<medications.length;i++) {
        tempObj[medications[i].name] = 0;
        for (var j=0;j<ailments.length;j++) {
            if (medications[i].treatableSymptoms.includes(ailments[j])) {
                tempObj[medications[i].name]++;
            }
        }
    }
    // console.log(tempObj)
    var max = 0;
    var tempArray = [];
    for (var key in tempObj) {
        if (tempObj[key] > max) {
            tempArray.length=0;
            tempArray.push(key);
            max = tempObj[key];
        } else if (tempObj[key] === max && max > 0) {
            tempArray.push(key)
        }
    }
    return tempArray;
  }

  function getMeds2(ailments, medications) {
    // your code here
    var tempObj = {};
    var returnArr = [];
    
    return tempArray;
  }
  
  const medications = [
    {
      name: 'Sulforaphane',
      treatableSymptoms: [
        'dementia',
        `alzheimer's`,
        'cancer',
        'inflammation',
        'neuropathy',
      ],
    },
    {
      name: 'Longvida Curcumin',
      treatableSymptoms: [
        'pain',
        'inflammation',
        'depression',
        'arthritis',
        'anxiety',
      ],
    },
    {
      name: 'Hericium erinaceus',
      treatableSymptoms: ['anxiety', 'cognitive decline', 'depression'],
    },
    {
      name: 'Nicotinamide mononucleotide',
      treatableSymptoms: [
        'ageing',
        'low NAD',
        'obesity',
        'mitochondrial myopathy',
        'diabetes',
      ],
    },
    {
      name: 'PainAssassinator',
      treatableSymptoms: [
        'pain',
        'inflammation',
        'cramps',
        'headache',
        'toothache',
        'back pain',
        'fever',
      ],
    },
  ];
  
  console.log(getMeds(['pain'], medications));
  // should log ['PainAssassinator', 'Longvida Curcumin']
  
  console.log(getMeds(['pain', 'inflammation', 'depression'], medications));
  // should log ['Longvida Curcumin']
  
  console.log(getMeds(['existential dread'], medications));
  // should log []