const user = {
  username: "akash",
  age: 21,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
      console.log(this)
  },

};

user.welcomeMessage();
user.username = "surajj"; 

user.welcomeMessage();

console.log(this) // node me - empty oject but browser me window  


function one(){ 
    let username = "akash";
    console.log(this.username) // function not allowed 
    console.log(this)
}
one()

const chai = function(){  ///same as declaration 
     let username = "akash";
    console.log(this.username) // function not allowed 
    console.log(this)

}
chai();


//arrow function 


const arrow = ()=>{ 
     let username = "akash";
    console.log(this.username) // arrow function not allowed 
   console.log(this)

}
arrow()