"use strict";

let operation = document.getElementById("operation"),
    result = document.getElementById("result");

function clearTyper() {
    operation.textContent = "0";
    result.textContent = "0";
}

function deleteCharacters() {
    if (operation.textContent !== "0")
        operation.innerText = operation.innerText.slice(0, -1);
    if (operation.textContent === "") operation.innerText = "0";
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
            operation.textContent += " " + "−" + " ";
            break;

        case ".":
            operation.textContent += ".";
            break;
    }
}

function receiveUserInput(e) {
    if (e.key !== " " && [...Array(10).keys()].includes(+e.key))
        operation.textContent === "0"
            ? (operation.textContent = e.key)
            : (operation.textContent += e.key);
}

document.addEventListener("keydown", playShortcuts);
document.addEventListener("keypress", receiveUserInput);
