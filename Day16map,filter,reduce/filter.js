const arr = [1,2,3,4,5,6,7,8,9,10]

const newNums =  arr.filter( (num)=> { //with return { }
   return  num > 4;
  


})

const  nums =  arr.filter( (num)=> (num > 4) //without return 
  

)
console.log(newNums)
console.log(nums)




const users = [
    { id: 1, name: "Akash", age: 21, isActive: true, role: "student" },
    { id: 2, name: "Rahul", age: 25, isActive: false, role: "developer" },
    { id: 3, name: "Priya", age: 22, isActive: true, role: "developer" },
    { id: 4, name: "Aman", age: 17, isActive: true, role: "student" },
    { id: 5, name: "Neha", age: 28, isActive: false, role: "manager" },
    { id: 6, name: "Rohit", age: 24, isActive: true, role: "developer" },
    { id: 7, name: "Sneha", age: 19, isActive: true, role: "student" },
    { id: 8, name: "Vikas", age: 30, isActive: false, role: "manager" },
    { id: 9, name: "Anjali", age: 26, isActive: true, role: "developer" },
    { id: 10, name: "Karan", age: 16, isActive: false, role: "student" }
];


const  data = users.filter( (us)=>{ 
    return us.age <18  
} ) 

console.log(data); 


const  data2 = users.filter( (us)=>{ 
    return us.role=="student" 
     
} ) 

console.log(data2); 

const  data3 = users.filter( (us)=>{ 
    return us.isActive==false 
     
} ) 

console.log(data3); 

