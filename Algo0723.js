/**
 * takes in a nested (potentially) object
 * and an array of keys
 * returns either a corresponding value (if it exists)
 * or null if it doesn't
 */

function simpleLens(obj, keysPath) {
    // your code here
    var level = 0;
    var testObj = obj;
    while (level < keysPath.length) {
        if (testObj.hasOwnProperty(keysPath[level])) {
            if (level === keysPath.length-1) {
                return testObj[keysPath[level]];
            } else if (typeof testObj[keysPath[level]] === 'object') {
                testObj = testObj[keysPath[level]];
            } else {
                return null;
            }
        } else {
            return null;
        }
        level++;
    }
    return null;
}

// breaks
function simpleLens2(obj, keysPath) {
    let newObj=obj;
    for(i=0;i<keysPath.length;i++){
        if(newObj.hasOwnProperty(keysPath[i])){
        newObj=newObj[keysPath[i]]
        }
        else{return null}
    }
    return newObj
}

console.log(simpleLens({ hello: 'world' }, ['hello']));
// should log 'world'

console.log(simpleLens({ hello: 'world' }, ['hello', 'world']));
// should log null


const nested = {
address: {
    street: '1234 First Street',
    city: 'Burbank',
    country: {
    code: 'US'
    },
    someKey: null
}
}

console.log(simpleLens(nested, ['address', 'street']));
// should log '1234 First Street'

console.log(simpleLens(nested, ['address', 'country', 'code']));
console.log(simpleLens(nested, ['address', 'country']));
// console.log(simpleLens2(nested, ['address', 'someKey', 'someOtherKey']));
// should log null


/**
 * takes in an object
 * returns an array of 2-item arrays
 * referencing each key/value pair
 */

//   const input1 = { firstName: 'Foo', lastName: 'Bar', age: 13 };
// input1.__proto__.keyOnProto = 'val from proto';

// obj.hasOwnProperty('prop')

//   function entries(obj) {
//     // your code here
//   }

//   console.log(entries(input1));
//   // should log [['firstName', 'Foo'], ['lastName', 'Bar'], ['age', 13]]

//   console.log(entries({ prop1: 'val 1', prop2: 'val 2' }));
//   // should log [['prop1', 'val 1'], ['prop2', 'val 2']]


//   /**
//    * BONUS
//    * takes in a string (the table name)
//    * and an object (the key/value pairs to insert)
//    * returns a SQL string for the insert
//    */

//   function insertSQL(table, obj) {
//     // your code here
//   }

//   console.log(insertSQL('users', { firstName: 'Bob', lastName: 'Smith' }));
//   // should log 'insert into users(firstName, lastName) values("Bob", "Smith")'

/**
 * model a chair
 * things the chair has: color, weight, name, wheels (each one has a color and may or may not be broken)
 * things the chair can do: be raised/lowered, be reclined/not reclined, be occupied/not occupied
 */

class Chair{
    constructor(color, weight, name, wheels){
        this.color = color;
        this.weight = weight;
        this.name = name;
        this.wheels = wheels;
        this.reclined = false;
        this.height = 10;
        this.occupiedBy = null;
    }
  
    changeWheelColor(num, newColor){
        this.wheels[num].color = newColor;
    }
    fixWheel(num){
        this.wheels[num].broken = false;
    }
  
    breakWheel(num){
        this.wheels[num].broken = true;
    }
  
    toggleReclined(){
        this.reclined = !this.reclined;
    }
  
    sitInChair(person){
        if(this.occupied){
          console.log('hey get off of me!')
          return;
        }
        if(person.weight > 400){
            let random = Math.floor(Math.random() * 5);
            this.breakWheel(random);
        }
  
        this.occupiedBy = person;
    }
  
    getUpFromChair(person){
        if(this.occupiedBy !== person){
            console.log("nobody can get out of the chair if noones sitting in it!");
            return;
        }
        this.occupiedBy = null;
    }
  
    raiseChair(){
        this.height = this.height + 2;
    }
  
    lowerChair(){
        if(this.height < 2){
            console.log("The chair cannot go any lower!");
            return
        }
        else{
            this.height = this.height - 2;
        }
    }
  
    get occupied(){
        return this.occupiedBy instanceof Person;
    }
  
  
  
  }
  
  class Person{
      constructor(name, weight){
          this.name = name;
          this.weight = weight;
      }
  }
  
  // wheels = {
  //   1: {
  //     color: "black",
  //     broken: false
  //   },
  //   2: {
  //     color: "black",
  //     broken: false
  //   },
  //   3: {
  //     color: "black",
  //     broken: false
  //   },
  //   4: {
  //     color: "black",
  //     broken: false
  //   }
  // }