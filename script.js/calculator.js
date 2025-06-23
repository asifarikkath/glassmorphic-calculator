let display = document.getElementById("display");

function append(char) {
  if (display.innerText === "0") {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
  } catch {
    display.innerText = "Error";
  }
}
