// const tinderUser = new Object();  //singleton object created using object constructor


const tinderUser2 = {};
  //non-singleton object created using object literals


 tinderUser2.name = "akash"; 
 tinderUser2.age = "22";

console.log(tinderUser2);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{ 
            firstname:"akash",
            lastname:"rajshekhar"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname?.userfullname.lastname)

//merging objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1, obj2};


console.log(obj3)

const obj4 = Object.assign({}, obj1 , obj2)
console.log(obj4)


const  obj5 = {...obj1 , ...obj2};
console.log(obj5)

console.log(tinderUser2)

//important
console.log(Object.keys(tinderUser2)) //return array 
console.log(Object.values(tinderUser2))
console.log(Object.entries(tinderUser2))

console.log(tinderUser2.hasOwnProperty('age')) //return true or false 


