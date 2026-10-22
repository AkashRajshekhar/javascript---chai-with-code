let a = 12; 
let b = 15; 

// Arithmetic operators
let sum = a + b; 
console.log("Sum: " + sum);

let difference = a - b; 
console.log("Difference: " + difference);

let product = a * b; 
console.log("Product: " + product);

let quotient = a / b;
console.log("Quotient: " + quotient);

let remainder = a % b;
console.log("Remainder: " + remainder);


let str1 = "Hello";
let str2 = "World";
let str3 =  str1 + " " + str2; 
console.log("Concatenated String: " + str3);

console.log("1"+ 2 + 4);
console.log(1 + 2 + "4");


//Assignment operators
let x = 10; 
x += 5;
console.log("Value of x after += 5: " + x);

x -= 3;
console.log("Value of x after -= 3: " + x);

//logical operators
let p = true; 
let q = false;

console.log("Logical AND (p && q): " + (p && q));
console.log("Logical OR (p || q): " + (p || q));
console.log("Logical NOT (!p): " + (!p));   


// bitwise operators
let m = 5;  
let n = 3;
console.log("Bitwise AND (m & n): " + (m & n));
console.log("Bitwise OR (m | n): " + (m | n));
console.log("Bitwise XOR (m ^ n): " + (m ^ n));
console.log("Left shift (m << 1): " + (m << 1));
console.log("Right shift (m >> 1): " + (m >> 1));

console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);

//union operator

let score = 85;
score++; 
++score; 
console.log(score) 

//comparison operators 

let num1 = 10;
let num2 = 20;

console.log("Is num1 equal to num2? " + (num1 == num2));
console.log("Is num1 not equal to num2? " + (num1 != num2));
console.log("Is num1 greater than num2? " + (num1 > num2));
console.log("Is num1 less than or equal to num2? " + (num1 <= num2));

console.log("2" > 1) // true
console.log(null > 0) //false
console.log(null === 0) //false  null is only equal to undefined and not equal to any other value
console.log(null >= 0) //true


console.log("2"=== 2); // false
console.log(2 === 2); // true