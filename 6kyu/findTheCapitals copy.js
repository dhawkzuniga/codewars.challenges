//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

function capitals(word) {
  let result = []
	let arr = word.split('')
  for(let i = 0; i <arr.length; i++){
    if (arr[i] == arr[i].toUpperCase()){
      result.push(i)
    }
  }
  return result
};