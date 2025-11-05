let display = document.getElementById("display");

function press(num) {
    if (display.value === "Ошибка") display.value = "0";

    if (display.value === "0") {
        if (num === ".") {
            display.value = "0.";
        }
        else if (!isNaN(num)) {
            display.value = num;
        }
        else {
            display.value += num;
        }
    } else {
        const parts = display.value.split(/[\+\-\*\/]/);
        const lastPart = parts[parts.length - 1];
        if (num === "." && lastPart.includes(".")) return;

        display.value += num;
    }
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
        display.value = eval(display.value);
    } catch {
        display.value = "Ошибка";
    }
}
