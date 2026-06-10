// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).//return: the index of the smallest number, that's bigger than the element at index n OR -1 if that doesn't exist

function leastLarger(arr,n){
  const originalArr = [...arr]
  const numberAtGivenIndex = arr[n]
  const sortedArr = [...arr].sort((a,b)=> a-b)
  
  const highestNumber = sortedArr[sortedArr.length - 1]
  const lastIndex = sortedArr.lastIndexOf(numberAtGivenIndex)
  const nextHighestNumFromGivenNumber = sortedArr[lastIndex + 1]
  
  console.log(numberAtGivenIndex)
  console.log(sortedArr)
  console.log(highestNumber)
  console.log(nextHighestNumFromGivenNumber)
  
  return numberAtGivenIndex === highestNumber ? -1 :originalArr.indexOf(nextHighestNumFromGivenNumber)
  
      
}