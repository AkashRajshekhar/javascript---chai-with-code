//closures 

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;//ends returned to caller  
}

const result = outer(); // it store the whole function lexical scope 

result(); // Hello


function shoppingCart() {
  let items = 0;

  return function () {
    items++;
    console.log("Items in cart:", items);
  };
}

const addItem = shoppingCart();

addItem(); // Items in cart: 1
addItem(); // Items in cart: 2
addItem(); // Items in cart: 3