const arr = ["js", "cpp", "py"];
arr.forEach((x) => {
  //by arrow function

  console.log(x);
});

arr.forEach(function (x) {
  //same by simple function
  console.log(x);
});

function printMe(x) {
  console.log(x);
}
arr.forEach(printMe);

arr.forEach((item, index, arr) => {
  //by arrow function return val , pos , arr

  console.log(item, index, arr);
});

const myCoding = [
  {
    language: "javascript",
    filename: "js",
  },
  {
    language: "python",
    filename: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.language);
  console.log(item.filename)
});




