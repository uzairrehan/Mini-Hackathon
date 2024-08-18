const toConvert = document.getElementById("toConvert");
const toChange = document.getElementById("toChange");
const output = document.getElementById("output");
const num = document.getElementById("num");
const histor = document.getElementById("history");
const hist = [];

function converter() {
  if (num.value == "") {
    return;
  } else if (toConvert.value == "Celsius" && toChange.value == "Fahrenheit") {
    ctf();
  } else if (toConvert.value == "Celsius" && toChange.value == "Kelvin") {
    ctk();
  } else if (toConvert.value == "Fahrenheit" && toChange.value == "Celsius") {
    ftc();
  } else if (toConvert.value == "Fahrenheit" && toChange.value == "Kelvin") {
    ftk();
  } else if (toConvert.value == "Kelvin" && toChange.value == "Celsius") {
    ktc();
  } else if (toConvert.value == "Celsius" && toChange.value == "Kelvin") {
    ctk();
  }

  histor.innerHTML = hist.map((val) => `<b>${val} </b>`);
  num.value = "";
}

function ctf() {
  let value = num.value;
  output.innerText = eval((value * 9) / 5 + 32) + "°F";
  hist.push(output.innerText);
}

function ctk() {
  let value = num.value;
  output.innerText = eval(value + 273.15) + "°K";
  hist.push(output.innerText);
}
function ftc() {
  let value = num.value;
  output.innerText = eval(((value - 32) * 5) / 9) + "°C";
  hist.push(output.innerText);
}
function ftk() {
  let value = num.value;
  output.innerText = eval(((value - 32) * 5) / 9 + 273.15) + "°K";
  hist.push(output.innerText);
}
function ktc() {
  let value = num.value;
  output.innerText = eval(value - 273.15) + "°C";
  hist.push(output.innerText);
}
function ktf() {
  let value = num.value;
  output.innerText = eval(((value - 273.15) * 9) / 5 + 32) + "°F";
  hist.push(output.innerText);
}
