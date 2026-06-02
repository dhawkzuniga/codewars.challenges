// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
//  The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
//  so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
//  and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(arr) {
//parameter: array of letters, comprising of nsew
//return: true or false, true if i'm back to start within 10 letters, false otherwise
  
let xAxis = 0
let yAxis = 0
let walkLength = 0

arr.forEach(direction=>{
  switch(direction){
    case 'n':
      yAxis+= 1;
    break;
    case 's':
      yAxis-= 1;
    break;
    case 'w':
      xAxis+= 1;
    break;
    case 'e':
      xAxis-= 1;
    break;
  }
})

console.log(xAxis)
console.log(yAxis)

return (xAxis === 0) && (yAxis === 0) && (arr.length === 10)
}
//example: isValidWalk(['n','s']) false 