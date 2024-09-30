// function with looping (for). the result filterCarByAvailability
function filterCarByAvailability(cars) {

    const resultCarAvailabile = [];
  
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].available) {
        resultCarAvailabile.push(cars[i]);
      }
    }
  
    return resultCarAvailabile;
  }
  
  const cars = require('./dataCars');
  
  console.log(filterCarByAvailability(cars));
  