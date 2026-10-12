let age = 33;

console.log(typeof age);

let score = "2345abc";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber) //-> returns NaN


//"33" -> number
//"33abc" -> NaN


//true ->1; false ->0; 
// "" -> false; 
// "harsh " -> true; 


let marks  = false; 

let valueInString = String(marks); 
console.log(typeof(valueInString))
console.log(valueInString)
