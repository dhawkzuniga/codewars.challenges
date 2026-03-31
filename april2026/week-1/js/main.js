//Monday March 31
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