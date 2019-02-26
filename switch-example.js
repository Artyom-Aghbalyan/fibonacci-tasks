function getFibonacciNumber(index) {
  if (typeof index !== 'number' || (typeof index === 'number' && index < 0)) {
    throw "Invalid argument";
  }
  
  let nFiboNumber;
  let num1 = 1;
  let num2 = 1;
  let i = 1;
  
  switch (index) {
    case 0: 
      nFiboNumber = 1;
      break;
    case 1:
      nFiboNumber = 1;
      break;
    default: 
      while (i !== index) {
        i++;
        nFiboNumber = num1 + num2;
        num2 = num2 + num1;
        num1 = num2 - num1;
      }
  }
  
  return nFiboNumber;
}
 

console.log(getFibonacciNumber(5));
//5

//console.log(getFibonacciNumber(true));
//"Uncaught Invalid argument"


//console.log(getFibonacciNumber(-3));
//"Uncaught Invalid argument"
