let currentValue = "0";

function updateDisplay(value) {
    document.getElementById('display1').value = value;
}

function handleOperator(newOperator) {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;

    if (display2 !== "0" && display1 !== "0") {
        const result = calculate(Number(display2), Number(display1), document.getElementById('operator').value);
        updateDisplay(result);
        document.getElementById('display2').value = result;
    } else {

        document.getElementById('display2').value = display1;
    }


    document.getElementById('display1').value = "0";


    document.getElementById('operator').value = newOperator;
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 === 0 ? "Error" : num1 / num2;
        default:
            return num1; 
    }
}

function plus() {
    handleOperator("+");
}

function minus() {
    handleOperator("-");
}

function multiplication() {
    handleOperator("*");
}

function division() {
    handleOperator("/");
}

function equal() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    const result = calculate(Number(display2), Number(display1), operator);
    updateDisplay(result);

    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";
}

function clearAll() {
    updateDisplay("0");
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";
}
