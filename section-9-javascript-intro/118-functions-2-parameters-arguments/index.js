
// bottle becomes a parameter when we create a function
function getMilk(bottles) {
    // instructions
    console.log("leave house");
    console.log("move right");
    console.log("leave left");
    console.log("buy " + bottles + " botles of milk");
}

// the input becomes the argument when we call the function
getMilk(5);

// ========== ===========  challenge
// how many bottles can i buy with $5 bucks
// each bottle costs $1.5


// budget = 5
// bottlePrice = 1.5


//divide my money by bottle price
//budget / bottlePrice


function getMilk(money) {
    // instructions
    console.log("leave house");
    console.log("move right");
    console.log("leave left");

    let bottlePrice = 1.5

    // divide money by price
    // round down the number to avoid decimals
    let numberOfBottles = Math.floor(money / bottlePrice);

    console.log("buy " + numberOfBottles + " botles of milk");
}

getMilk(5);