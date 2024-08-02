const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numButtons");
const operateButtons = document.querySelectorAll(".operateButtons");
const equal = document.getElementById("=");
const ac = document.getElementById("AC");
let globalResult;

let firstNum;
let secondNum = "";
let operator = "";
let displayValue = display.innerHTML;

function roundToDecimalPlace(number, decimalPlaces) {
    let factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;

        if (display.innerHTML === "0") {
            display.innerHTML = buttonId;
            displayValue = display.innerHTML;
            firstNum = displayValue;
        } else {
            display.innerHTML += buttonId;
            if (operator) {
                secondNum += buttonId;
                console.log(firstNum);
                console.log(operator)
                console.log(secondNum);
                
            } else {
            displayValue = display.innerHTML;
            console.log(displayValue)
            }
        }
    })
});

operateButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;

        if (display.innerHTML === "0") {
            return;
        } else {
            if (operator) {
                console.log("hey");
                operate();
                firstNum = globalResult;
                display.innerHTML = firstNum;
                secondNum = "";
                operator = buttonId;
                display.innerHTML += buttonId;
            } else {
            firstNum = display.innerHTML;
            operator = buttonId;
            display.innerHTML += buttonId;
            displayValue = +" ";
            console.log(displayValue);
            }
        }
    })
})



// Calculation Functions
const add = (num1, num2) => {
    return +num1 + +num2;
};
const substract = (num1, num2) => {
    return num1 - num2;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
const divide = (num1, num2) => {
    return num1 / num2;
};

// Operator Function
const operate = () => {
    let result;
    if (operator === "+") {
        result = add(firstNum, secondNum);
        display.innerHTML += "=" + roundToDecimalPlace(result, 2);
        console.log(add(firstNum, secondNum));
        globalResult = roundToDecimalPlace(result, 2);
        return result;
    } else if (operator === "-") {
        result = substract(firstNum, secondNum);
        display.innerHTML += "=" + roundToDecimalPlace(result, 2);
        console.log(substract(firstNum, secondNum));
        globalResult = roundToDecimalPlace(result, 2);
        return result;
    } else if (operator === "*") {
        result = multiply(firstNum, secondNum);
        display.innerHTML += "=" + roundToDecimalPlace(result, 2);
        console.log(multiply(firstNum, secondNum));
        globalResult = roundToDecimalPlace(result, 2);
        return result;
    } else if (operator === "/") {
        if (secondNum === "0") {
            display.innerHTML = "Division by zero in undefined";
            setTimeout(() => {
                return display.innerHTML = "0";
            }, 1500)
            return;
        } else {
        result = divide(firstNum, secondNum);
        display.innerHTML += "=" + roundToDecimalPlace(result, 2);
        console.log(divide(firstNum, secondNum));
        globalResult = roundToDecimalPlace(result, 2);
        return roundToDecimalPlace(result, 2);
        }
    }
    
};

equal.addEventListener("click", operate);

// Clear Function
ac.addEventListener("click", () => {
    display.innerHTML = 0;
    firstNum;
    secondNum = "";
    operator = "";
});



