


function temperatureConverter() {
  
  let fahrenheitA = document.getElementById('fahrenheitA').checked;
  
  let celsiusB = document.getElementById('celsiusB').checked;

  let kelvinC = document.getElementById('kelvinC').checked;

  let fahrenheit1 = document.getElementById('fahrenheit1').checked;

  let celsius2 = document.getElementById('celsius2').checked;

  let kelvin3 = document.getElementById('kelvin3').checked;

  let startTemp = parseFloat(document.getElementById('input').value);

  let output = document.getElementById('output');

if (fahrenheitA && celsius2) {
  ftc(startTemp, output);

  }
else if (fahrenheitA && kelvin3) {
  ftk(startTemp, output);
}

else if (celsiusB && fahrenheit1) {
  ctf(startTemp, output);
}

else if (celsiusB && kelvin3) {
  ctk(startTemp, output);
}

else if (kelvinC && fahrenheit1) {
  ktf(startTemp, output);
}

else if (kelvinC && celsius2) {
  ktc(startTemp, output);

}

}

function ftc(input, output) {
  let temp = ((input-32)/1.8).toFixed(2);
  
  output.innerHTML = "Output: " + temp;
 

}

function ftk(input, output) {
  let temp = (((input-32)/1.8)+273.15).toFixed(2);
  
  output.innerHTML = "Output: " + temp;
 

}

function ctf(input, output) {
  let temp = ((input*1.8)+32).toFixed(2);
  
  output.innerHTML = "Output: " + temp;
 

}

function ctk(input, output) {
  let temp = (input+273.15).toFixed(2);
  
  output.innerHTML = "Output: " + temp;
 

}

function ktf(input, output) {
  let temp = (((input-273.15)*1.8)+32).toFixed(2);
  
  output.innerHTML = "Output: " + temp;
 

}

function ktc(input, output) {
  let temp = (input-273.15).toFixed(2);
  
  output.innerHTML = "Output: " + temp;
 

}
