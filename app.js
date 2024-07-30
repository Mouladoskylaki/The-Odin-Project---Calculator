const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numButtons");
const operateButtons = document.querySelectorAll(".operateButtons");
const equal = document.getElementById("=");

let firstNum;
let secondNum;
let operator;
let displayValue = display.innerHTML;

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;

        if (display.innerHTML === "0") {
            display.innerHTML = buttonId;
            displayValue = display.innerHTML;
        } else {
            display.innerHTML += buttonId;
            if (displayValue === " ") {
                secondNum += buttonId;
                console.log(secondNum)
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
            firstNum = display.innerHTML;
            operator = buttonId;
            display.innerHTML += buttonId;
            displayValue = " ";
            console.log(displayValue);
        }
    })
})

const equals = () => {
    secondNum = displayValue;
}

equal.addEventListener("click", equals());


// Calculation Functions
const add = (num1, num2) => {
    return num1 + num2;
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
const operate = (operator, num1, num2) => {
    return operator(num1, num2);
};

// Clear Function
// numButtons[10].addEventListener("click", () => {
//     display.innerHTML = 0;
// });



