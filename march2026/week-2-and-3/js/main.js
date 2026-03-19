//Thursday March 19th Practice
// heads or tails
function headsOrTails(){
  let num = Math.random()
  if (num>.5){
    return 'heads'
  } else{
    return 'tails'
  }
}
// or
let headsOrTails = ()=> Math.random > .5 ? 'heads': 'tails'

// write a function that removes any geese from an array of birds
function geeseRemover(arrOfBirds){
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  return arrOfBirds.filter(bird=> !geese.includes(bird))
}
console.log(geeseRemover( ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

// Write a sentence that smashes words together
function sentenceSmash(arrOfWords){
  return arrOfWords.join(' ')
}

// Wednesday March 18th
// Return the number (count) of vowels in the given string.
function getCount(str) {
  let vowelCount = 0
  let newArr = str.split('')
  newArr.forEach(letter=> {
    if (letter ==='a'||letter ==='e'||letter ==='i'||letter ==='o'||letter ==='u')
      vowelCount += 1
  })
  return vowelCount
}

//Tuesday March 17th
// You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"

function findEmployeesRole(name) {
  let splitName = name.split(' ')
  let selectedFirstName = splitName[0]
  let selectedLastName = splitName[1]
  
  let selectedEmployee = employees.find(obj=> {
   return (obj.firstName === selectedFirstName) && (obj.lastName ===selectedLastName)})

  if (!selectedEmployee){
    return "Does not work here!"
  }else {
    return selectedEmployee.role
  }
}

//Monday March 16th
// calculate the 3rd angle of a triangle
function otherAngle(a, b) {
  return 180 - a - b
}

// Saturday March 14th
// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
  let sum = marks.reduce((acc,c)=>acc+c,0)
  return Math.floor(sum / marks.length)
}

// Friday MArch 13th
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

function check(a, x) {
  let test = (element) => element == x
  return a.some(test)
}

// Thursday March 12th Practice, repeating Tuesday's challenge
function isKiss( wordList ){
  let arr = wordList.split(' ')
  console.log (arr)
  for (let word of arr){
    if (word.length > arr.length){
      return 'Keep It Simple Stupid'
    }
  }
  return 'Good work Joe!'
}


// Wednesday March 11th Practice
// Check your arrows
function arrowCheck(arrOfObj){
  return arrOfObj.some(obj=> !obj.damaged)
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function numReplace(nums){
  let arr = nums.split(' ')
  let arrTwo = []
  for (number of arr){
    if (number<5){
      arrTwo.push(0)
    } else{
      arrTwo.push(1)
    }
  }
  return arrTwo.join('')
}
console.log(numReplace('1 20 3 40 5'))

// Tuesday March 10th
// // if any word length is greater than string length, return simple stupid

function isKiss( words ){
  let arr = words.split(' ')
  for (let word of arr){
    if (word.length > arr.length){
      return'Keep It Simple'
    }
  }
    return 'Good work Joe!'
}
// Monday March 9th
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  let highestVal = Math.max(...arr)
  let lowestVal = Math.min (...arr)
  return [lowestVal, highestVal]
}