// //Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.



//parameters: take in an array of strings
//return: another array of strings, but with each string having it's spot listed



//function take in array of strings
//.map()
//add index +1, '${i + 1}: ${element}'

function number(arr){
  return arr.map((e,i)=>{
   return `${i+1}: ${e}`
  })
}

//ex: ['1','2','3']--> ['1: 1', '2: 2', '3: 3']