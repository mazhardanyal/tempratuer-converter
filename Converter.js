// Select input fields
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const rankine = document.getElementById("rankine");

function convertTemperature(unit) {
    let c, f, k, r;

    switch (unit) {
        case 'celsius':
            c = parseFloat(celsius.value);
            f = (c * 9/5) + 32;
            k = c + 273.15;
            r = (c + 273.15) * 9/5;
            break;
        case 'fahrenheit':
            f = parseFloat(fahrenheit.value);
            c = (f - 32) * 5/9;
            k = c + 273.15;
            r = f + 459.67;
            break;
        case 'kelvin':
            k = parseFloat(kelvin.value);
            c = k - 273.15;
            f = (k - 273.15) * 9/5 + 32;
            r = k * 9/5;
            break;
        case 'rankine':
            r = parseFloat(rankine.value);
            k = r * 5/9;
            c = k - 273.15;
            f = r - 459.67;
            break;
        default:
            break;
    }

    // Update other fields
    celsius.value = isNaN(c) ? "" : c.toFixed(2);
    fahrenheit.value = isNaN(f) ? "" : f.toFixed(2);
    kelvin.value = isNaN(k) ? "" : k.toFixed(2);
    rankine.value = isNaN(r) ? "" : r.toFixed(2);
}
