function isLeapYear(year) {
    const passFirstTest = year % 4 === 0;

    const passSecondTest = year % 100 === 0;

    const passThirdTest = year % 400 === 0;


    // if (passFirstTest && passSecondTest && passThirdTest) {
    //     return `this is a leap year`;
    // }

    if (passFirstTest) {

        if (passSecondTest) {

            if (passThirdTest) {
                return `Leap year`;
            } else {
                return `not a leap year`;
            }

        } else {
            return `Leap year`;
        }

    } else {
        return `not a leap year`;
    }
}
console.log(isLeapYear(2000));