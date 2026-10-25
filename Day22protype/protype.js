let myName = "Akash   "


String.prototype.trueLength =  function(){ 
    console.log(`${this}`)
//    console.log(`${this.name}` )
    console.log(`true lenght is : ${this.trim().length}`)
}
myName.trueLength()
"sky    ".trueLength()


   

function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    console.log("Hello " + this.name);
};

const user1 = new User("Akash");
const user2 = new User("Rahul");

user1.greet();
user2.greet();