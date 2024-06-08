let result = document.getElementById('result');

function appendNumber(num) {
    result.value += num;
}

function appendOperator(op) {
    if (result.value !== '' && !isNaN(result.value[result.value.length - 1])) {
        result.value += op;
    }
}

function appendDecimal() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
}

function clearResult() {
    result.value = '';
}

function clearAll() {
    result.value = '';
}

function clearLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateLog() {
    try {
        let num = parseFloat(result.value);
        if (num <= 0) {
            result.value = 'Error';
        } else {
            result.value = Math.log(num);
        }
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateSin() {
    result.value = Math.sin(result.value * (Math.PI / 180)); // Convert degrees to radians for sin calculation
}

function calculateCos() {
    result.value = Math.cos(result.value * (Math.PI / 180)); // Convert degrees to radians for cos calculation
}

function calculateTan() {
    result.value = Math.tan(result.value * (Math.PI / 180)); // Convert degrees to radians for tan calculation
}

function calculateRoot() {
    try {
        let num = parseFloat(result.value);
        if (num < 0) {
            result.value = 'Error';
        } else {
            result.value = Math.sqrt(num);
        }
    } catch (error) {
        result.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        result.value = eval(result.value) / 100;
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calculateFactorial(num - 1);
}

function calculateFactorialResult() {
    try {
        let num = parseFloat(result.value);
        if (num < 0 || !Number.isInteger(num)) {
            result.value = 'Error';
        } else {
            result.value = calculateFactorial(num);
        }
    } catch (error) {
        result.value = 'Error';
    }
}
