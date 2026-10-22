const addTwo = (num1 , num2)=>{
    return num1 + num2;  

}

 console.log(addTwo(2,5))


 //implicit return 
 const subTwo = (num1 , num2)=> num1 -num2;  // if a single line so return is not necessary

 const mulTwo = (num1 , num2) =>(num1*num2); 


console.log(mulTwo(2,5))
console.log(subTwo(4,6))


//how object return 
const obj = (obj)=>({username:"hitesh"}); 

console.log(obj())


const myArr = [2,3,6,4];

myArr.forEach(()=>{ 
  //
})
