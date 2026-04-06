//Monday April 6th--Array challenge ladder

//8 kyu Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
  return numbers.reduce((acc,c)=> acc + (c*c),0)
}

//7kyu Given a list of integers, determine whether the sum of its elements is odd or even.
function oddOrEven(array) {
   return array.reduce((acc,c)=> acc + c, 0) % 2 ===0 ? 'even': 'odd'
}

//6 kyu: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
  let phoneFormat = `(xxx) xxx-xxxx`
  for (let i=0; i< numbers.length; i++){
   phoneFormat = phoneFormat.replace ('x',numbers[i])
  }
  return phoneFormat
}

//7kyu: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
function sumTwoSmallestNumbers(numbers) {  
  let sortedArr = numbers.sort((a,b)=> a-b)
  return  sortedArr[0] + sortedArr[1]
}

// 8kyu; Write a function to split a string and convert it into an array of words.
function stringToArray(string){
  return string.split(' ')
}