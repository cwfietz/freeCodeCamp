// Only change code below this line
class Thermostat {
  constructor(temperatureInF) {
    this._temperatureInC = 5/9 * (temperatureInF - 32);
  }
  // getter
  get temperature() {
    return this._temperatureInC;
  }
  // setter
  set temperature(temperatureInC) {
    this._temperatureInC = temperatureInC;
  }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log( thermos );
let temp = thermos.temperature; // 24.44 in Celsius
console.log( thermos );
thermos.temperature = 26;
console.log( thermos );
temp = thermos.temperature; // 26 in Celsius
console.log( thermos );
console.log( temp );

// { _temperatureInC: 24.444444444444446 }
// { _temperatureInC: 24.444444444444446 }
// { _temperatureInC: 26 }
// { _temperatureInC: 26 }
// 26