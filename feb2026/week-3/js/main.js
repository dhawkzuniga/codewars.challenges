// ***WEDNESDAY FEB 18***

// Build a function that returns an array of integers from n to 1 where n>0.
function arrOfNums(n){
  let arr = []
  for(let i= n; i> 0; i--){
    arr.push(i)
  }
  return arr
}
console.log (arrOfNums(10))


// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1; 
// If both characters are the same case, return 1; 
// If both characters are letters, but not the same case, return 0


// take in two characters in a func
// determine if one of them is not a letter
// determine if they have the same case

function caseCheck (a,b){
  if (a.toUpperCase()== b.toLowerCase() || b.toUpperCase()== b.toLowerCase()){
    return -1
  } else if ((a == a.toUpperCase() && b == b.toUpperCase()) || (a == a.toLowerCase() && b == b.toLowerCase())){
    return 1
  } else {
    return 0
  }
}

console.log(caseCheck('d','!'))
console.log(caseCheck('d','k'))
console.log(caseCheck('d','K'))




// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
//   check if each array element value is == true
  let numOfSheep = 0
  sheep.forEach(e => {
    if (e === true){
      numOfSheep += 1
    }
  })
  return numOfSheep
}

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.

function firstNonConsecutive (arr) {
  for (i=1; i< arr.length; i++){
      if (arr[i] !== 1 + arr[i -1]){
        return arr[i]
      }
    } return null
  }

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

// **Practice***

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

