let display = document.getElementById("display");

function press(num) {
    if (display.value === "Ошибка") display.value = "0";

    const operators = ["+", "-", "*", "/"];
    
    if (display.value === "0") {
        if (num === ".") {
            display.value = "0.";
            return;
        }
        if (!isNaN(num)) {
            display.value = num;
            return;
        }
        if (operators.includes(num)) {
            display.value = "0" + num;
            return;
        }
    }

    const lastChar = display.value.slice(-1);
    if (operators.includes(lastChar) && operators.includes(num)) {
        display.value = display.value.slice(0, -1) + num;
        return;
    }
    const parts = display.value.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (num === "." && lastPart.includes(".")) return;

    display.value += num;
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "" || display.value === "-") display.value = "0";
}

function calculate() {
    try {
        let result = eval(display.value);
        if (!isFinite(result) || isNaN(result)) {
            display.value = "Ошибка";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Ошибка";
    }
}
