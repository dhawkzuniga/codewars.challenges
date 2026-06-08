// Write a function with that gives how many days are in a month. Rewrite with switch. 

//  Return the number of days that are in the month given. 
// There is no need for input validation: month will always be greater than 0 and less than or equal to 12.


//parameters: a number based on what month it is
//return: number, days in that month

//if thens based on what the number is

function daysInMonth (month){
  if ((month == 1) || (month ==3) || (month ==5) || (month ==7) || (month == 8) || (month ==10) || (month ==12))
    return 31
  else if((month ==4) || (month ==6) || (month == 9) || (month == 11))
    return 30
  else
    return 28
}

console.log(daysInMonth(1))
console.log(daysInMonth(6))
console.log(daysInMonth(28))

// 1 => 31

function daysInMonthSwitch (month){
  switch (month){
    case 4: 
    case 6: 
    case 9: 
    case 11:  
      return 30;
    case 2:
      return 28;
    default:
      return 31
  }

}

console.log(daysInMonthSwitch(1))
console.log(daysInMonthSwitch(6))
console.log(daysInMonthSwitch(2))