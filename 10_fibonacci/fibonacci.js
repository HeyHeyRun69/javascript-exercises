// Fibonacci number => sum of previous 2 numbers;

const fibonacci = function(number) {
    let _number = parseInt(number);

    if(!_number) {
        return 0;
    } else if (_number < 0) {
        return 'OOPS';
    }

    let firstNumber = 1;
    let secondNumber = 0;

    for(let i = 2; i <= _number; i++) {
        let total = firstNumber + secondNumber;
        secondNumber = firstNumber
        firstNumber = total;
    }

    return firstNumber;
};

// Do not edit below this line
module.exports = fibonacci;
