// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.








//parameters: array of match scores
//return: total number of points the home team gets based on
//if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)


function points(arr){
 //function take in array
//check each element to compare x and y (if then statements)
  let finalScore = 0
  arr.forEach((e)=>{
    e.split('')
    if (e[0]>e[2]){
      finalScore += 3
    } else if (e[0]===e[2]){
      finalScore += 1
    } 
  })
  return finalScore
}
//add points to a counter and return counter


//example
//(2:1)-> 3 points