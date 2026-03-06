// fri Feb 27
// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  let arr = []
  for (let i=1; i<=n; i++){
    arr.push(i)
  }
  return arr
}

// Thurs Feb 26
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor){
  return numbers.filter((n)=>n % divisor==0)
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
  return x.reduce((acc,C)=>acc + +C,0)
}

// Wed Feb 25
// Create a method all which takes two params:
// a sequence
// a function
// and returns true if the function in the params returns true for every element in the sequence.

function all(arr, fun) {
  let newArr = arr.filter(fun)
  if (newArr.length !== arr.length){
    return false
  } else{
    return true;
  }
}

// Mon Feb 23
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:
// The resulting array is sorted in ascending order.
// Any duplicate values are removed, so each integer appears only once.

function mergeArrays(arr1, arr2) {
  return [...new Set (arr1.concat(arr2))].sort((a,b) => a-b)
}