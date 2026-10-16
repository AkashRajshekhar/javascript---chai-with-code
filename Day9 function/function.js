function addTwoNumber(num1, num2) {
  // parameter nums1, num2
  return num1 + num2;
}

function subTwoNUmber(num1, num2) {
  //1st method  // let result = num1 + num2;
  // console.log("success")
  // return result;

  //2nd method
  return num1 - num2;
}

const add = addTwoNumber(5, 4); //arguments 5,4
console.log(add);
console.log(typeof add);

console.log(subTwoNUmber(4, 7));

function userLogedin(username) {
  if (!username) {
    console.log("username does not exist ");
  }
  return `${username} is just logined `;
}
console.log(userLogedin("akash"));

function calculateCartPrice(...num1) {
  // rest operator
  return num1; //return in array form
}
console.log(calculateCartPrice(300, 500, 600, 200));

function calculateCartPrice2(val1, val2, ...nums1) {
  console.log(nums1);
  return `${val1}, ${val2}, ${nums1}`;
}
const result = calculateCartPrice2(2, 34, 45, 56, 4, 3563, 3, 3, 636, 7);
console.log(result);

const user = {
  name: "aksh",
  price: 199,
};
function handleObject(anyObject) {
  console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user);
