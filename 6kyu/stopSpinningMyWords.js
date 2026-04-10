//Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(string){
  let arrOfWords = string.split(' ') //split the string into an array
  let resultingArray = []
  
  for (let i=0; i < arrOfWords.length; i++){ //loop through array
    if (arrOfWords[i].length >= 5){ //if the word length is bigger than 5
      resultingArray.push(arrOfWords[i].split('').reverse().join('')) //push it, but reversed to result
    } else{
      resultingArray.push(arrOfWords[i]) //otherwise just push it
    }
  }
  
  return resultingArray.join(' ')
}

// refactored

function spinWords(string){
  return string.split(' ').map((e)=>{
   return e.length>= 5 ? e.split('').reverse().join(''): e
  }).join(' ')
}