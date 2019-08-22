function ConvertCtoF(degreesCelsius) {
    let degreesFahrenheit = (degreesCelsius * (9/5)) + 32;
    return degreesFahrenheit;
}

function ConvertFtoC(degreesFahrenheit) {
    let degreesCelsius = (degreesFahrenheit - 32) * (5/9);
    return degreesCelsius;
}

function bodyLoaded() {
    const convertBtn = document.getElementById('ConvertButton');
    const ctext = document.getElementById('CInput');
    const ftext = document.getElementById('FInput');
    const weather = document.getElementById('WeatherImage');
    const error = document.getElementById('ErrDiv');

    convertBtn.addEventListener("click", function() {
      if (ctext.value) {
        const cval = parseFloat(ctext.value);

        if (isNaN(cval)) {
          error.textContent = ctext.value + " is not a number";
        }
        else {
          error.textContent = "";
          const fval = ConvertCtoF(cval);
          ftext.value = fval;
          if (fval < 32) {
            weather.src = 'cold.gif';
          }
          else if (fval <= 50) {
            weather.src = 'cool.gif';
          }
          else {
            weather.src = 'warm.gif';
          }
        }
      }
      else if (ftext.value) {
        const fval = parseFloat(ftext.value);

        if (isNaN(fval)) {
          error.textContent = ftext.value + " is not a number";
        }
        else {
          error.textContent = "";
          const cval = ConvertFtoC(fval);
          ctext.value = cval;
          if (ftext.value < 32) {
            weather.src = 'cold.gif';
          }
          else if (ftext.value <= 50) {
            weather.src = 'cool.gif';
          }
          else {
            weather.src = 'warm.gif';
          }
        }
      }
    });

    ctext.addEventListener("input", function() {
      ftext.value = "";
    });

    ftext.addEventListener("input", function() {
      ctext.value = "";
    });
}
