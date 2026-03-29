//Sunday March 29
// You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

function Counter() {
  let i = 0
  this.check = function (){ return i}; 
  this.increment = function (){ i += 1};
}

//Friday March 30
//Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

class Person{
  constructor(name, age){
    this.name = name
    this.age = Number(age)
  }
    get info() {
    return (`${this.name}s age is ${this.age}`)
  }
}


//Thursday March 29th
//Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
class Ghost {
  constructor(){
    this.color = ['white','yellow','purple','red'][Math.floor(Math.random()*4)]
  }
}

//make building blocks with widths, heights, lengths, volumes, and surface areas

class Block{
  constructor(arr){
    this.width = arr[0]
    this.length = arr [1]
    this.height = arr [2]
  }
  getWidth(){
    return this.width
  }
  getLength(){
    return this.length
  }
  getHeight(){
    return this.height
  }
  getVolume(){
    return this.length * this.width * this.height
  }
  getSurfaceArea(){
    return 2 * ((this.length * this.width)+ (this.length * this.height)+ (this.width * this.height))
  }
}
//Wednesday March 28th
//For this exercise you should create a JavaScript class called Animal
class Animal{
  constructor(name, type){
    this.name = name
    this.type = type
  }
  toString(){return `${this.name} is a ${this.type}`}
}

//evaluate if ships should be looted
class Ship{
  constructor(draft, crew){
    this.draft = draft 
    this.crew = crew
  }
  isWorthIt(){
    return this.draft - (this.crew * 1.5) > 20 ? true: false
  }
}


//Tuesday March 27th
//Your task is to extend the JavaScript Array object with methods .first() and .last(), so you can get the first respectively the last element of the array.

let a = [2, 5, 7, 3 ,4];

Array.prototype.first = function (){
  return this[0]
}
Array.prototype.last= function (){
  return this[this.length - 1]
}

//Monday March 26
//Define a variable person which stores an object literal. The object literal should have a first name, last name, and a getter and setter for full name
let person = {
  firstName: 'Jane',
  lastName : "Doe",
  
  get fullName(){ return (this.firstName + ' ' + this.lastName)},
  
  set fullName(name){ 
   this.firstName = name.split(' ')[0]
   this.lastName = name.split(' ')[1]
  }

}