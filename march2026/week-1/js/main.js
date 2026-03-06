// Thursday and Friday March 5th and 6th
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

function adjacentElementsProduct(array) {
  let newArr = []
  array.forEach((n, i)=>{
    if (array[i+1])
    newArr.push(n * array[i+1])
  })  
  return Math.max(...newArr)
}

// Wednesday March 5th
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
function calculate(num1, operator, num2) {
  if (num2==0 && operator == '/'){
    return null
  } else if (operator !== '+'&& operator !== '-' && operator !== '*'&& operator !== '/'){
    return null
  } else{
 switch (operator){
     case '+':
      return num1 + num2;
      break;
     case'-':
      return num1 - num2;
      break;
     case '*':
      return num1 * num2;
      break;
     case '/':
      return num1 / num2;
      break
  }}
}

// Mon March 3
// Given an array of 4 integers[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.function slope(points){

function slope(points){
  if (points[2]-points[0]===0){
    return 'undefined'
  }else{
    let num = ((points[3]-points[1])/(points[2]-points[0]))
    return num.toString()
  }
}