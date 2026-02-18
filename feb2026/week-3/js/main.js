
// ***TUESDAY FEB 17**
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.
function findAverage(array) {
  if (array.length == 0){
    return 0
  } else{ 
  let total = array.reduce((acc, C) => acc + C)
  return total / array.length
    }
}


// ***Other practice problems***

// Write a function with that gives how many days are in a month. 

//  Return the number of days that are in the month given. There is no need for input validation: 
// month will always be greater than 0 and less than or equal to 12.

function numberOfDaysInMonth(monthNumber){
  if (monthNumber == 2){
    return 'There are 28 days in this month'
  }else if(monthNumber ==4 || monthNumber ==6 || monthNumber == 9 || monthNumber ==11){
    return 'There are 30 days in this month'
  }else{
    return 'There are 31 days in this month'
  }
}

console.log(numberOfDaysInMonth(2))
console.log(numberOfDaysInMonth(4))
console.log(numberOfDaysInMonth(1))

