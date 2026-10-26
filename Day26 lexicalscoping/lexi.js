//lexical scoping-->

function outer (){ 
 let username  = "Akash"; 

 function inner(){ 
    console.log(username)
    
 }

 inner();

}
outer();

// console.log(username)//here gives error username is not defined 




function outer1 (){ 
 let username  = "Akash"; 
console.log( "outer ", code)
 function inner1(){ 
    let code = "1v46da"
    console.log(username)
    
 }
 function inner2(){ 
    console.log(code) //sibling not share its varible and also to parent function 
 }

 inner1();
 inner2()

}

outer1(); 