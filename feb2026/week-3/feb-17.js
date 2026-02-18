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