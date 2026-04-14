//This time no story, no theory. The examples below show you how to write function accum:
//accum("abcd") -> "A-Bb-Ccc-Dddd"

//par: a single string with letters
//ret: a string with each letter repeated by it's placement in the word

function accum(s) {
	//split the string into an arr
  let arr = s.split('')
  let finalArr = []
  
  //for each element in array, push the letters to a new array
  arr.forEach((letter, index)=>{
    finalArr.push(letter.toUpperCase() + letter.repeat(index).toLowerCase())
  })
  
  //return new array joined with a '-'
    return finalArr.join('-');
}

accum('dallas') //'D-Aa-Lll-Llll-Aaaaa-Ssssss'