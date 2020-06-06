// Write a function that accepts a number representing a number of cents, and 
// prints a representation of that monetary amount with the smallest number of 
// coins.

// EXAMPLE: coinChange(137) should print something like:
// Quarters: 5
// Dimes: 1
// Nickels: 0
// Pennies: 2
function coinChange(cents) {
    var remainder = cents;
    var quarters = (remainder - (remainder % 25))/25;
        if (quarters < 1) {
            quarters = 0
        }
        remainder = remainder - (25 * quarters);
    var dimes = (remainder - (remainder%10))/10;
        if (dimes < 1 ) {
            dimes = 0
        }
        remainder = remainder - (10 * dimes);
    var nickels = (remainder - (remainder %5))/5;
        
        if (nickels < 1) {
            nickels = 0
        }
        remainder = remainder - (5 * nickels);
    var pennies = remainder;
    
    return [quarters, dimes, nickels, pennies]
    
}

console.log(coinChange(137))
console.log(coinChange(25))
console.log(coinChange(4))
console.log(coinChange(64))

function coinChange(cents) {
    let coins = {
        "Quarters": 0,
        "Dimes": 0,
        "Nickels": 0,
        "Pennies": 0
    };
    while(cents >= 25){
        cents -= 25;
        coins["Quarters"]++;
    }
    while(cents >= 10){
        cents -= 10;
        coins["Dimes"]++;
    }
    while(cents >= 5){
        cents -= 5;
        coins["Nickels"]++;
    }
    while(cents >= 1){
        cents--;
        coins["Pennies"] ++;
    }
    console.log(`Quarters: ${coins["Quarters"]}`)
    console.log(`Dimes: ${coins["Dimes"]}`)
    console.log(`Nickels: ${coins["Nickels"]}`)
    console.log(`Pennies: ${coins["Pennies"]}`)
}