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

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") deleteCharacters();
});
