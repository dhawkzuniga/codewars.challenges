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