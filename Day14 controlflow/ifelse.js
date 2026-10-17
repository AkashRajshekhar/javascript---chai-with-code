let age1 = 16;

if (age1 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


let age2 = 22;
let hasId = true;

if (age2 >= 18 && hasId === true) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}

let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
    console.log("You can log in");
} else {
    console.log("Login unavailable");
}

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}

//falsy value

// false
// 0 and -0
// "" (empty string)
// null
// undefined
// NaN

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}


//nested
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("Get a driving license first");
    }
} else {
    console.log("You are too young to drive");
}

//terniary operators 

//condition ? valueIfTrue : valueIfFalse;

let isLoggedIn1 = true;

let message = isLoggedIn1? "Welcome back" : "Please log in";

console.log(message)