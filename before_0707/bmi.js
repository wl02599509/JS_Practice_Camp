function BMI(height, weight) {
    let bmi = (weight / ((height/100).toFixed(2)) ** 2).toFixed(2)
    return bmi
}

console.log(BMI(183, 74))
