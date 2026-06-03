// Build a function that returns an array of integers from n to 1 where n>0.


//parameters: function that takes in a number
//return: array of numbers from 1 to n

function arrOfInt(n){
  let arr = []
  for(let i = 1; i<=n; i++){
    arr.unshift(i)
  }
  return arr
}

console.log(arrOfInt(5))
console.log(arrOfInt(10))



// Example : n=5 --> [5,4,3,2,1]
