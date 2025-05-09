function createCalculator() {
    return {
        add(a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        multiply: function (a, b) {
            return a * b;
        },
        divide: function (a, b) {
            if (b === 0) {
                return "Cannot divide by zero!";
            }
            return a / b;
        }
    };
}

const calculator = createCalculator();

console.log(calculator.add(2, 3))
console.log(calculator.multiply(2, 3))
console.log(calculator.subtract(2, 3))
console.log(calculator.divide(2, 3))
