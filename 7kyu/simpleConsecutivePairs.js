// In this Kata your task will be to return the count of pairs that have consecutive numbers. The first pair consists of the first and second element of the input, the second pair is the next two elements (3rd and 4th), etc. If the input ends with an element without a pair, it should be ignored.

// For example, [1,2,5,8,-4,-3,7,6,5] has 3 such pairs. Candidate pairs are selected as follows: [(1,2), (5,8), (-4,-3), (7,6), 5].

// the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// the second pair is (5,8) and the numbers are not consecutive.
// the third pair is (-4,-3), consecutive. Count = 2.
// the fourth pair is (7,6), also consecutive. Count = 3.
// the last element has no pair, so we ignore.
// Good luck!

//parameters: array of nums
//return: score of how many pairs of nums are consecutive

//function takes in an array of nums
//for loop evaluating if second num is first num +1

function pairs(arr){
  let score = 0
  for (let i =0; i < arr.length; i+=2){
    if ((arr[i+1] == arr[i] +1) || (arr[i+1] == arr[i]-1)) {
      score += 1
    }
  }
  return score
}

//ex: [1,2,6,4,7,8]--> 2