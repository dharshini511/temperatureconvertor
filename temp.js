function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
    var rankineInput = document.getElementById("rankine");
    var delisleInput = document.getElementById("delisle");
    var newtonInput = document.getElementById("newton");
    var celsiusResult = document.getElementById("result");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    var rankine = parseFloat(rankineInput.value);
    var delisle = parseFloat(delisleInput.value);
    var newton = parseFloat(newtonInput.value);
    
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        celsiusResult.innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
        addToHistory(fahrenheit + "°F = " + celsius.toFixed(2) + "°C");
    } else if (!isNaN(kelvin)) {
        var celsius = kelvin - 273.15;
        celsiusResult.innerText = kelvin + "K = " + celsius.toFixed(2) + "°C";
        addToHistory(kelvin + "K = " + celsius.toFixed(2) + "°C");
    } else if (!isNaN(rankine)) {
        var celsius = (rankine - 491.67) * 5 / 9;
        celsiusResult.innerText = rankine + "°Ra = " + celsius.toFixed(2) + "°C";
        addToHistory(rankine + "°Ra = " + celsius.toFixed(2) + "°C");
    } else if (!isNaN(delisle)) {
        var celsius = 100 - delisle * 2 / 3;
        celsiusResult.innerText = delisle + "°De = " + celsius.toFixed(2) + "°C";
        addToHistory(delisle + "°De = " + celsius.toFixed(2) + "°C");
    } else if (!isNaN(newton)) {
        var celsius = newton * 100 / 33;
        celsiusResult.innerText = newton + "°N = " + celsius.toFixed(2) + "°C";
        addToHistory(newton + "°N = " + celsius.toFixed(2) + "°C");
    } else {
        celsiusResult.innerText = "Please enter a valid temperature.";
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var kelvinInput = document.getElementById("kelvin");
    var rankineInput = document.getElementById("rankine");
    var delisleInput = document.getElementById("delisle");
    var newtonInput = document.getElementById("newton");
    var fahrenheitResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    var rankine = parseFloat(rankineInput.value);
    var delisle = parseFloat(delisleInput.value);
    var newton = parseFloat(newtonInput.value);
    
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitResult.innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
        addToHistory(celsius + "°C = " + fahrenheit.toFixed(2) + "°F");
    } else if (!isNaN(kelvin)) {
        var fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
        fahrenheitResult.innerText = kelvin + "K = " + fahrenheit.toFixed(2) + "°F";
        addToHistory(kelvin + "K = " + fahrenheit.toFixed(2) + "°F");
    } else if (!isNaN(rankine)) {
        var fahrenheit = rankine - 459.67;
        fahrenheitResult.innerText = rankine + "°Ra = " + fahrenheit.toFixed(2) + "°F";
        addToHistory(rankine + "°Ra = " + fahrenheit.toFixed(2) + "°F");
    } else if (!isNaN(delisle)) {
        var fahrenheit = (212 - delisle * 6 / 5);
        fahrenheitResult.innerText = delisle + "°De = " + fahrenheit.toFixed(2) + "°F";
        addToHistory(delisle + "°De = " + fahrenheit.toFixed(2) + "°F");
    } else if (!isNaN(newton)) {
        var fahrenheit = newton * 60 / 11 + 32;
        fahrenheitResult.innerText = newton + "°N = " + fahrenheit.toFixed(2) + "°F";
        addToHistory(newton + "°N = " + fahrenheit.toFixed(2) + "°F");
    } else {
        fahrenheitResult.innerText = "Please enter a valid temperature.";
    }
  }
  
  function convertToKelvin() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var rankineInput = document.getElementById("rankine");
    var delisleInput = document.getElementById("delisle");
    var newtonInput = document.getElementById("newton");
    var kelvinResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var rankine = parseFloat(rankineInput.value);
    var delisle = parseFloat(delisleInput.value);
    var newton = parseFloat(newtonInput.value);
    
    if (!isNaN(celsius)) {
        var kelvin = celsius + 273.15;
        kelvinResult.innerText = celsius + "°C = " + kelvin.toFixed(2) + "K";
        addToHistory(celsius + "°C = " + kelvin.toFixed(2) + "K");
    } else if (!isNaN(fahrenheit)) {
        var kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
        kelvinResult.innerText = fahrenheit + "°F = " + kelvin.toFixed(2) + "K";
        addToHistory(fahrenheit + "°F = " + kelvin.toFixed(2) + "K");
    } else if (!isNaN(rankine)) {
        var kelvin = rankine * 5 / 9;
        kelvinResult.innerText = rankine + "°Ra = " + kelvin.toFixed(2) + "K";
        addToHistory(rankine + "°Ra = " + kelvin.toFixed(2) + "K");
    } else if (!isNaN(delisle)) {
        var kelvin = (100 - delisle) * 2 / 3 + 273.15;
        kelvinResult.innerText = delisle + "°De = " + kelvin.toFixed(2) + "K";
        addToHistory(delisle + "°De = " + kelvin.toFixed(2) + "K");
    } else if (!isNaN(newton)) {
        var kelvin = newton * 100 / 33 + 273.15;
        kelvinResult.innerText = newton + "°N = " + kelvin.toFixed(2) + "K";
        addToHistory(newton + "°N = " + kelvin.toFixed(2) + "K");
    } else {
        kelvinResult.innerText = "Please enter a valid temperature.";
    }
  }
  
  function convertToRankine() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
    var delisleInput = document.getElementById("delisle");
    var newtonInput = document.getElementById("newton");
    var rankineResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    var delisle = parseFloat(delisleInput.value);
    var newton = parseFloat(newtonInput.value);
    
    if (!isNaN(celsius)) {
        var rankine = (celsius + 273.15) * 9 / 5;
        rankineResult.innerText = celsius + "°C = " + rankine.toFixed(2) + "°Ra";
        addToHistory(celsius + "°C = " + rankine.toFixed(2) + "°Ra");
    } else if (!isNaN(fahrenheit)) {
        var rankine = (fahrenheit + 459.67);
        rankineResult.innerText = fahrenheit + "°F = " + rankine.toFixed(2) + "°Ra";
        addToHistory(fahrenheit + "°F = " + rankine.toFixed(2) + "°Ra");
    } else if (!isNaN(kelvin)) {
        var rankine = kelvin * 9 / 5;
        rankineResult.innerText = kelvin + "K = " + rankine.toFixed(2) + "°Ra";
        addToHistory(kelvin + "K = " + rankine.toFixed(2) + "°Ra");
    } else if (!isNaN(delisle)) {
        var rankine = (212 - delisle * 6 / 5) + 459.67;
        rankineResult.innerText = delisle + "°De = " + rankine.toFixed(2) + "°Ra";
        addToHistory(delisle + "°De = " + rankine.toFixed(2) + "°Ra");
    } else if (!isNaN(newton)) {
        var rankine = newton * 60 / 11 + 491.67;
        rankineResult.innerText = newton + "°N = " + rankine.toFixed(2) + "°Ra";
        addToHistory(newton + "°N = " + rankine.toFixed(2) + "°Ra");
    } else {
        rankineResult.innerText = "Please enter a valid temperature.";
    }
  }
  
  function convertToDelisle() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
    var rankineInput = document.getElementById("rankine");
    var newtonInput = document.getElementById("newton");
    var delisleResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    var rankine = parseFloat(rankineInput.value);
    var newton = parseFloat(newtonInput.value);
    
    if (!isNaN(celsius)) {
        var delisle = (100 - celsius) * 3 / 2;
        delisleResult.innerText = celsius + "°C = " + delisle.toFixed(2) + "°De";
        addToHistory(celsius + "°C = " + delisle.toFixed(2) + "°De");
    } else if (!isNaN(fahrenheit)) {
        var delisle = (212 - fahrenheit) * 5 / 6;
        delisleResult.innerText = fahrenheit + "°F = " + delisle.toFixed(2) + "°De";
        addToHistory(fahrenheit + "°F = " + delisle.toFixed(2) + "°De");
    } else if (!isNaN(kelvin)) {
        var delisle = (373.15 - kelvin) * 3 / 2;
        delisleResult.innerText = kelvin + "K = " + delisle.toFixed(2) + "°De";
        addToHistory(kelvin + "K = " + delisle.toFixed(2) + "°De");
    } else if (!isNaN(rankine)) {
        var delisle = (671.67 - rankine) * 5 / 6;
        delisleResult.innerText = rankine + "°Ra = " + delisle.toFixed(2) + "°De";
        addToHistory(rankine + "°Ra = " + delisle.toFixed(2) + "°De");
    } else if (!isNaN(newton)) {
        var delisle = (33 - newton) * 50 / 11;
        delisleResult.innerText = newton + "°N = " + delisle.toFixed(2) + "°De";
        addToHistory(newton + "°N = " + delisle.toFixed(2) + "°De");
    } else {
        delisleResult.innerText = "Please enter a valid temperature.";
    }
  }
  
  function convertToNewton() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
    var rankineInput = document.getElementById("rankine");
    var delisleInput = document.getElementById("delisle");
    var newtonResult = document.getElementById("result");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var kelvin = parseFloat(kelvinInput.value);
    var rankine = parseFloat(rankineInput.value);
    var delisle = parseFloat(delisleInput.value);
    
    if (!isNaN(celsius)) {
        var newton = celsius * 33 / 100;
        newtonResult.innerText = celsius + "°C = " + newton.toFixed(2) + "°N";
        addToHistory(celsius + "°C = " + newton.toFixed(2) + "°N");
    } else if (!isNaN(fahrenheit)) {
        var newton = (fahrenheit - 32) * 11 / 60;
        newtonResult.innerText = fahrenheit + "°F = " + newton.toFixed(2) + "°N";
        addToHistory(fahrenheit + "°F = " + newton.toFixed(2) + "°N");
    } else if (!isNaN(kelvin)) {
        var newton = kelvin * 33 / 100 - 273.15 * 33 / 100;
        newtonResult.innerText = kelvin + "K = " + newton.toFixed(2) + "°N";
        addToHistory(kelvin + "K = " + newton.toFixed(2) + "°N");
    } else if (!isNaN(rankine)) {
        var newton = rankine * 11 / 60 - 273.15 * 33 / 100;
        newtonResult.innerText = rankine + "°Ra = " + newton.toFixed(2) + "°N";
        addToHistory(rankine + "°Ra = " + newton.toFixed(2) + "°N");
    } else if (!isNaN(delisle)) {
        var newton = 33 - delisle * 22 / 50;
        newtonResult.innerText = delisle + "°De = " + newton.toFixed(2) + "°N";
        addToHistory(delisle + "°De = " + newton.toFixed(2) + "°N");
    } else {
        newtonResult.innerText = "Please enter a valid temperature.";
    }
  }
  function clearFields() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var result = document.getElementById("result");
    
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    result.innerText = "";
  }
  
  function addToHistory(entry) {
    var historyList = document.getElementById("history-list");
    var listItem = document.createElement("li");
    listItem.innerText = entry;
    historyList.appendChild(listItem);
  }