let operator = document.getElementById("operator"),
    leftOperand = document.getElementById("left-operand"),
    rightOperand = document.getElementById("right-operand"),
    result = document.getElementById("result");

function clearTyper() {
    leftOperand.textContent = 0;
    operator.textContent = "";
    rightOperand.textContent = "";
    result.textContent = "";
}
