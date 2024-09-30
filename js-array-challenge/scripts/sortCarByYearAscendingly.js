function sortCarByYearAscendingly(cars) {
    const resultCarYearAscending = [...cars];
  
    for (let i = 0; i < resultCarYearAscending.length; i++) { 
      for (let j = 0; j < (resultCarYearAscending.length - i - 1); j++) {
        if (resultCarYearAscending[j].year > resultCarYearAscending[j + 1].year) {
          let temp = resultCarYearAscending[j];
          resultCarYearAscending[j] = resultCarYearAscending[j + 1];
          resultCarYearAscending[j + 1] = temp;
        }
      }
    }
    return resultCarYearAscending;
  }
  
  const Cars = require('./dataCars');
  
  console.log(sortCarByYearAscendingly(Cars));
  
  
    
  
  