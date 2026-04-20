// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


// par: take in two strings: the 1st string, and 2nd which is the ending
//ret: boolean if the 1st str ends with the 2nd


function solution(str, ending){
 return str.slice([str.length-ending.length])== ending ? true: false
}

// solution ('dallas','as') //true
// solution ('idk', 'h')// false


//refactor

function solutionTwo(str, ending){
  return str.endsWith (ending)
}