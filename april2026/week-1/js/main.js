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