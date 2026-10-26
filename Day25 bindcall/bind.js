
const person = {
  name: "Rahul",

  greet: function (city) {
    console.log(
      "Hello, my name is " + this.name +
      " and I live in " + city
    );
  }
};

// 1. Call the original method
person.greet("Delhi");
// Hello, my name is Rahul and I live in Delhi

// 2. Store the method in a variable
const greetFunction = person.greet;

// Calling it directly loses the person context
greetFunction("Mumbai");
// In strict mode, this.name is undefined

// 3. Use bind() to fix the 'this' value
const boundGreet = person.greet.bind(person);

// 4. Call the bound function
boundGreet("Mumbai");
// Hello, my name is Rahul and I live in Mumbai

// 5. Use bind() to preset an argument too
const boundWithCity = person.greet.bind(person, "Pune");

boundWithCity();
// Hello, my name is Rahul and I live in Pune
