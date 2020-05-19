function getMilk(money, costPerBottle) {
    // instructions
    console.log("leave house");
    console.log("move right");
    console.log("leave left");

    // calling the calcbottles function
    console.log("buy " + calcBottles(money, costPerBottle) + " botles of milk");

    return calcChange(money, costPerBottle)

}

let change = getMilk(4);
console.log(`this is your change = ${change}`);


function calcBottles(startingMoney, costPerBottle) {
    let numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    let change = startingAmount % costPerBottle;
    return change;
}

console.log('hello master here is your ' + getMilk(5, 1.5) + ' change');


// main take away,
// we are using the returns of the functions and we are using the results inside the function get milk;