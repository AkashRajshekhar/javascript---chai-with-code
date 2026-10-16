// let a = 10;
// const b = 45;
// var c = 34; // does not follow block scope
  
//global scope -> outside of the block
var c = 67;
let a = 120; 
const b  = 56; 
//scope {}

if (true) { //block scope
  let a = 10; // follow block scope
  console.log("inner block scope", a);
  const b = 45; // follow block scope 
  console.log("inner block scope", b);
  var c = 34; // does not follow block scope // modified the value of c in global scope
  console.log("inner block scope", c);
 
}

console.log(a);
console.log(b);

console.log(c);


//nested block scope
function one() {

    const username = "akash";

    function two() {
        const password = "1234";
        console.log(username);
    }

    //console.log(password); // password is not accessible here
    two();
} 

one();

//if  nested block scope
if(true){ 
    const username = "akash";

    if(username === "akash"){
        const password = "1234";
        console.log(username +" " + password);
    }
 // console.log(password); // password is not accessible here
}

// console.log(username); // username is not accessible here




//+++++++++ intersting example of scope ++++++++++++++++
addone(5);
console.log(addone(5)); // 6
//function diclaration is hoisted 

function addone(value){ 
    return value + 1;
}
// addone(5); // 6

addTwo(5);
 //function expression is not hoisted so it will give error if we call it before the function expression is defined
const addTwo = function(value){ //function expression
    return value + 2;
}
// addTwo(5); // 7