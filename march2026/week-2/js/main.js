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