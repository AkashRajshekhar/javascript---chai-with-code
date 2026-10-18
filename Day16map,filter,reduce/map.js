const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.map((num) => num * num);

console.log(newNums);

const newNum2 = myNums // chaining 
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num >= 50);

console.log(newNum2);
