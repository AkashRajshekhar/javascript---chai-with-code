//it works ona array, object and so many things

const arr = [1, 2, 4, 5, 6, 7, 98];

for (const i of arr) {
  console.log(i); //i denotes arr[0] and so on
}

//maps  -> stores unique key values

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("EN", "England");

console.log(map);

for (const key of map) {
  // return array if key lete hai to  key value both print krega
  console.log(key);
}
for (const [key, value] of map) {
  // this is the syntax to print diffrently and iterate one by one
  console.log(key, ":->", value);
}

//object

const obj = {
  1: "spiderman",
  2: "ironman",
  3: "thor",
};

for (const [key, value] of obj) { //not iterable for obj 
  //it not works for object it is only for map iteration  syntax

  console.log(key, ":->", value);
}

