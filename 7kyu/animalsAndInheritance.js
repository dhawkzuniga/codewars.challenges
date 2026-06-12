//Preloaded for you in this Kata is a class Animal:
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}


//Define the following classes that inherit from Animal.





class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark',status);
  }
}

class Cat extends Animal {
  constructor(name, age, status){
    super(name, age, 4, 'cat', status)
  }
  introduce(){
    let OGintroduce = super.introduce()
    return `${OGintroduce}` +'  ' + 'Meow meow!'
  }
}

class Dog extends Animal {
  constructor(name, age, status, master){
    super (name,age,4, 'dog',status)
    this.master = master
  }
  greetMaster(){
    return `Hello ${this.master}`
  }
}