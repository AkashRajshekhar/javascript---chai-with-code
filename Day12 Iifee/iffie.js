//Immediately Invoked Function Expression 


function chai(){ 
    console.log("db connected ")
}

chai();

//by iife - prevents the global scope pollution 

(function db1(){ 
    console.log("db1 connected");
})();

((name)=>{
    console.log(`${name} , db2 connected `)
})("akash");
