// bmi calculator challenge

const bmiCalculator = (weight, height) => {
    return Math.round(weight / (height * height))
}
bmiCalculator(65, 1.8)

// teacher solution

function bmiCalculator(weight, height) {
    //using js math power exponent
    var bmi = weight / Math.pow(height, 2)
    return Math.round(bmi)
}