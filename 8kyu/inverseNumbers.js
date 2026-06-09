// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

function inverseNum(arr){
  const newArray = arr.map(num=> -num)
  return newArray
}

inverseNum([1, -2, 3, -4, 5])