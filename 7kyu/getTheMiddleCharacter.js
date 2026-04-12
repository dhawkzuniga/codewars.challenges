//You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.


//prop: str that's a word
//return: string of the middle char. one middle char if str length is odd, two if even

function getMiddle(s) {
  if (s.length %2==0){   //if str.length % 2 ==0 , return middle two characters...
    return s.slice(s.length/2-1,s.length/2+1)
  } else{                //else return middle character... str.length/2.. Math.floor mid
    return s[Math.floor(s.length/2)]
  }
}

getMiddle('test') //'es'- even str length
getMiddle('testing')//'t' odd str length