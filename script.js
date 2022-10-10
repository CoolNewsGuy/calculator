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
        case "Backspace":
            deleteCharacters();
        case "c":
        case "C":
            clearTyper();
    }
}

document.addEventListener("keydown", playShortcuts);
document.addEventListener("keydown", (e) => console.log(e.key));
