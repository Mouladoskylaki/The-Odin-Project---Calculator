const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.id;

        if (display.innerHTML === "0") {
            display.innerHTML = buttonId;
        } else {
            display.innerHTML += buttonId;
        }
    })
})