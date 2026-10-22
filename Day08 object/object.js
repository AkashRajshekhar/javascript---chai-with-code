
//and by object constructor singleton created
// Object.create()

// by object literals singleton not created 

const mySym = Symbol("key1")

const user ={
    name:"akash",
    [mySym]:"mykey1",
    age:22,
    email:"akash@example.com", 
    lastlogin: ["monday , thursday"]
}
console.log(user)
console.log(user["name"])
console.log(user[mySym])
console.log(typeof(user[mySym]))


user.email="akashupdated@example.com"
// Object.freeze(user) // freeze the object so that no changes can be made to it
user.email="ajhv"
console.log(user)

user.greet = function(){ 
    console.log("hello user")
}
user.greet2 = function(){ 
    console.log(`hello , ${this.name}`)
}
console.log(user.greet) //undefined because greet is not a property of user object
console.log(user.greet())
console.log(user.greet2())