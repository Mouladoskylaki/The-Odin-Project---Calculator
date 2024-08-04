const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numButtons");
const operateButtons = document.querySelectorAll(".operateButtons");
const equal = document.getElementById("=");
const ac = document.getElementById("AC");
const del = document.getElementById("del");
const c = document.getElementById("C");
let globalResult;

let firstNum;
let secondNum = "";
let operator = "";
let displayValue = display.innerHTML;

const delButtonFunction = () => {
    if (display.innerHTML.includes(".")) {
        return;
    } else {
    display.innerHTML += ".";
    }
}

del.addEventListener("click", delButtonFunction);

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
        if (display.innerHTML.includes("=")) {
            secondNum = "";
            display.innerHTML = buttonId;
            displayValue = display.innerHTML;
            firstNum = displayValue;
            operator = "";
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
const clearFunction = () => {
    display.innerHTML = 0;
    firstNum;
    secondNum = "";
    operator = "";
}
ac.addEventListener("click", clearFunction);

const deleteCharacterFunction = () => {
    if (display.innerHTML.includes("=")) {
        console.log("error");
        return;
        
    }
    if (!secondNum) {
        console.log("hey");
    display.innerHTML = display.innerHTML.slice(0, -1);
    firstNum = display.innerHTML;
    if (display.innerHTML === "") {
        display.innerHTML = 0;
    }
    } else {
        console.log("ha");
        display.innerHTML = display.innerHTML.slice(0, -1);
        secondNum = secondNum.slice(0, -1);
        if (secondNum === "") {
            console.log("jojo");
            secondNum = " ";
        
        }

    }
    if (!display.innerHTML) {
        firstNum = 0;
        display.innerHTML = 0;
    }
   
}
c.addEventListener("click", deleteCharacterFunction);


document.addEventListener("keydown", (event) => {
    const key = event.key;
    console.log(`key pressed: ${event.key}`);
    
    if (event.key === "Enter") {
        event.preventDefault();
        operate();
    }
    if (event.key === "Escape") {
        event.preventDefault();
        clearFunction();
    }
    if (event.key === "Backspace") {
        event.preventDefault();
        deleteCharacterFunction();
    }
    if (event.key === ".") {
        event.preventDefault();
        delButtonFunction();
    }

    let keyMap = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0",
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/",
    }

    if (key in keyMap) {
        console.log(keyMap[key])
        const buttonId = keyMap[key];
        console.log(buttonId);
        const button = document.getElementById(buttonId);
        if (button) {
            button.click();
        }
    }

})





