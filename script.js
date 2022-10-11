"use strict";

let operation = document.getElementById("operation"),
    result = document.getElementById("result"),
    buttons = document.querySelectorAll("span.btn");

function clearTyper() {
    operation.textContent = "0";
    result.textContent = "0";
}

function deleteCharacters() {
    if (operation.textContent !== "0")
        operation.innerText = operation.innerText.slice(0, -1);
    if (operation.textContent === "") operation.innerText = "0";
    deleteSpaces();
}

function playShortcuts(e) {
    switch (e.key) {
        case "c":
        case "C":
            clearTyper();
            break;

        case "Backspace":
            deleteCharacters();
            break;

        case "%":
        case "+":
            operation.textContent += " " + e.key + " ";
            break;

        case "÷":
        case "/":
            operation.textContent += " " + "÷" + " ";
            break;

        case "*":
        case "x":
        case "X":
            operation.textContent += " " + "×" + " ";
            break;

        case "−":
        case "-":
            operation.textContent += " " + "-" + " ";
            break;

        case ".":
            operation.textContent += ".";
            break;

        case "^":
            operation.textContent += " " + "^" + " ";
            break;

        case "Enter":
            getResult();
    }
}

function receiveKeyboardClicks(e) {
    if (e.key !== " " && [...Array(10).keys()].includes(+e.key))
        operation.textContent === "0"
            ? (operation.textContent = e.key)
            : (operation.textContent += e.key);
}

function receiveUserClicks() {
    if (
        operation.textContent === "0" &&
        !["+", "%", "−", "×", "÷", "."].includes(this.textContent)
    )
        operation.textContent = this.textContent;
    else if (["+", "%", "×", "÷"].includes(this.textContent))
        operation.textContent += " " + this.textContent + " ";
    else if (this.textContent === "−") operation.textContent += " " + "-" + " ";
    else operation.textContent += this.textContent;
}

function operate() {
    let operations = ["+", "÷", "%", "-", "×", "^"].some((op) =>
        operation.textContent.includes(op)
    );

    let operationParts = operation.textContent.split(" "),
        leftOperand = +operationParts[0],
        operator = operationParts[1],
        rightOperand = +operationParts[2];

    if (!operations) result.textContent = leftOperand;

    if (result.textContent === "NaN") {
        result.innerText = "Error";
    }

    switch (operator) {
        case "+":
            result.textContent = leftOperand + rightOperand;
            break;

        case "-":
            result.textContent = leftOperand - rightOperand;
            break;

        case "×":
            result.textContent = leftOperand * rightOperand;
            break;

        case "÷":
            rightOperand === 0
                ? (result.textContent = "Error")
                : (result.textContent = leftOperand / rightOperand);
            break;

        case "%":
            rightOperand === 0
                ? (result.textContent = "Error")
                : (result.textContent = leftOperand % rightOperand);
            break;

        case "^":
            rightOperand === 0 && leftOperand === 0
                ? (result.textContent = "Error")
                : (result.textContent = leftOperand ** rightOperand);
    }
    console.log(result);
}

function deleteSpaces() {
    let operations = ["+", "÷", "%", "-", "×", "^"].some((op) =>
        operation.textContent.includes(op)
    );
    if (operation.textContent.includes(" ") && !operations)
        operation.textContent = operation.textContent.replace(" ", "");
}

function writeExponent() {
    operation.textContent += " " + "^" + " ";
}

function getResult() {
    if (result.textContent === "Error") result.textContent = "0";
    operation.textContent = result.textContent;
}

function allowOnlyOneOperationWithKeyboard(e) {
    let operationParts = operation.textContent.split(" ");

    if (operationParts.length > 3) {
        getResult();
        if (e.key === "*") operation.textContent += " " + "×" + " ";
        else operation.textContent += " " + e.key + " ";
    }
}

function allowOnlyOneOperationWithClicks() {
    let operationParts = operation.textContent.split(" ");

    if (operationParts.length > 3) {
        getResult();
        if (this.textContent === "−") operation.textContent += " " + "-" + " ";
        else operation.textContent += " " + this.textContent + " ";
    }
}

document.addEventListener("keydown", playShortcuts);
document.addEventListener("keypress", receiveKeyboardClicks);
document.addEventListener("keyup", operate);
document.addEventListener("keypress", allowOnlyOneOperationWithKeyboard);

buttons.forEach((button) => {
    button.addEventListener("click", receiveUserClicks);
    button.addEventListener("click", operate);
    button.addEventListener("click", allowOnlyOneOperationWithClicks);
});
