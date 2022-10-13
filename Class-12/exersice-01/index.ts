class User{
    name: string = "";
    age: number = 0; 
    occupation: string = '';
    height: string = ''
    eat(){
      console.log("I am eating.")
    }
    logMyName(){
      console.log("My name is " + this.name)
    }
    logMyDetails(){
      this.logMyName();    
      console.log("My age is " + this.age)
      console.log("My occupation is " + this.occupation)
    }
  }
let person = new User(); {
person.name = "John";
person.age = 12;
person.height = "5'6";
}