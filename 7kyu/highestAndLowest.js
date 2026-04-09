//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let arrOfNums = numbers.split(' ')
  let maxNum = Math.max(...arrOfNums)
  let minNum = Math.min(...arrOfNums)
  return (`${maxNum} ${minNum}`)
}