function sortCarByYearDescendingly(cars) {
    const resultCarYearDescending = [...cars];
  
    for (let i = 0; i < resultCarYearDescending.length; i++) { 
      for (let j = 0; j < (resultCarYearDescending.length - i - 1); j++) {
        if (resultCarYearDescending[j].year < resultCarYearDescending[j + 1].year) {
          let temp = resultCarYearDescending[j];
          resultCarYearDescending[j] = resultCarYearDescending[j + 1];
          resultCarYearDescending[j + 1] = temp;
        }
      }
    }
    return resultCarYearDescending;
  }
  
  const car = require('./dataCars');
  
  console.log(sortCarByYearDescendingly(car));
  
  
    
  
  
  
  
    
  
  