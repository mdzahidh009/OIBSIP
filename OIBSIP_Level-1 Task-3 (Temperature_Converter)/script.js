function convertTemperature() {
  // Get user input
  let temperatureInput = document.getElementById('temperatureInput').value.trim();
  let unitSelect = document.getElementById('unitSelect').value;

  // Validate input
  if (!temperatureInput || isNaN(temperatureInput)) {
    alert("Please enter a valid number for temperature.");
    return;
  }

  // Convert temperature based on selected unit
  let temperature = parseFloat(temperatureInput);
  let result;

  switch (unitSelect) {
    case 'celsius':
      // Convert Celsius to Fahrenheit and Kelvin
      result = {
        fahrenheit: (temperature * 9/5) + 32,
        kelvin: temperature + 273.15
      };
      document.getElementById('result').textContent = `${temperature} °C = ${result.fahrenheit.toFixed(2)} °F = ${result.kelvin.toFixed(2)} K`;
      break;
    case 'fahrenheit':
      // Convert Fahrenheit to Celsius and Kelvin
      result = {
        celsius: (temperature - 32) * 5/9,
        kelvin: (temperature - 32) * 5/9 + 273.15
      };
      document.getElementById('result').textContent = `${temperature} °F = ${result.celsius.toFixed(2)} °C = ${result.kelvin.toFixed(2)} K`;
      break;
    case 'kelvin':
      // Convert Kelvin to Celsius and Fahrenheit
      result = {
        celsius: temperature - 273.15,
        fahrenheit: (temperature - 273.15) * 9/5 + 32
      };
      document.getElementById('result').textContent = `${temperature} K = ${result.celsius.toFixed(2)} °C = ${result.fahrenheit.toFixed(2)} °F`;
      break;
    default:
      break;
  }
}

function clearResult() {
  document.getElementById('temperatureInput').value = '';
  document.getElementById('result').textContent = '';
}
