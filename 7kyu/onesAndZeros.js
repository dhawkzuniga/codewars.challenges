///Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.




//parameter: a function that takes in an array of 1's and 0's
//return: a number, that is the binary expression of the array


function binaryArrayToNumber(arr){
  //combine elements into one number of 1s and 0s
  let allElements = arr.join('')
  
  //convert number into its binary representation
  return parseInt(allElements,2)
}


//example: 
//binaryArrayToNumber([0, 0, 0, 1]) => 1