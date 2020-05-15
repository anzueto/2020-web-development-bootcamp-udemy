function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.

    const yearsRemaining = age - 52;

    const daysLeft = yearsRemaining * 365;
    const weeksLeft = yearsRemaining * 52;
    const monthsLeft = yearsRemaining * 12;

    console.log(`you have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left `)

    /*************Don't change the code below**********/
}

lifeInWeeks(90);





// teacher solution

function lifeInWeeks(age) {

    const yearsRemaining = 90 - age;

    const days = yearsRemaining * 365;
    const weeks = yearsRemaining * 52;
    const months = yearsRemaining * 12;

    console.log(`you have ${days} days, ${weeks} weeks, and ${months} months left `)

}

lifeInWeeks(52);