//Dates

let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreateDate = new Date(2023, 0, 23);
let myCreateDate2 = new Date("01-12-2026");
console.log(myCreateDate.toLocaleDateString());
console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getFullYear());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  }),
);
