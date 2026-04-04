//Sat April 4th
//The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

function playerManager(players) {
  let result = []
  
  if (players === null|| players === ''){
    return []
  } else{
    let arr = players.split(', ')
    
    for (let i=0; i < arr.length; i++){
      result.push({'player': arr[i],'contact': parseInt (arr[i+1])})
      i += 1
    }
    return result
  }
}


//Friday April 3
//Take in a number of hackers, and evaluate if they are blocked. If so, the system increases security level

function breachAttempts(hackers, securityLevel, increase) {
  let breachCounter = 0
  for (element of hackers){
    element > securityLevel ? breachCounter += 1 : securityLevel += increase
  }
  return breachCounter
}

//Thursday April 2
//Refactor a given function into a class
class Person{
  constructor(name){
    this._name = name
  }
  get name (){
    return this._name
  }
  greet (yourName){
    return `Hello ${yourName}, my name is ${this._name}`
  }
}


//Wednesday April 1
//make a constructor cuboid with a cube class extension
class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height })
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
  get volume() {
    return this.length * this.width * this.height
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

//Tuesday March 30
//You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

class Counter{
  constructor(){
    this._val = 0
  }
  valueOf(){
    return this._val
  }
  incr(){
    this._val += 1
  }
}