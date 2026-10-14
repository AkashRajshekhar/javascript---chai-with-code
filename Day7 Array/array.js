//array

const arr = [0,12,6,37,3,83,8];
const myhero = ["shaktiman" , "spiderman" , 'ironman' , "blackpanther" , "thenos"]

console.log(myhero[4])
console.log(arr)
console.log(myhero)


//methods 
const nums = [1,2,3,"akash" ,"the legend "]
console.log(nums)
nums.push(6); //push at end 

nums.pop()//remove last element from end 

nums.unshift(9 ) // add at front but shifting all the values
nums.shift() //remove from start 


console.log(nums.includes(3)) //true or false 
console.log(nums.indexOf(3))//return index 





console.log(nums)

const newNums = nums.join() // converts array into string 
console.log(newNums)
console.log(typeof newNums)


//slice // splice

const myNums = [1,2,3,4,5,6]

const myNums1 = myNums.slice(2,5) //slice(startIndex , endIndex) //endIndex is not included


console.log(myNums1)
console.log("A" ,myNums) //after slicing it not manipulate the original array

const myNums2 = myNums.splice(2,3) //splice(startIndex , deleteCount) //it manipulate the original array
console.log(myNums2)
console.log("B" ,myNums)



//2

const marvelHeros = ["spiderman" , "ironman" , "blackpanther" , "thenos"]
const dcHeros = ["batman" , "superman" , "flash" , "aquaman"]

// marvelHeros.push(dcHeros) // push the whole array into marvelHeros array and it will be added as a single element at the end of marvelHeros array
//it will push at existing array and it will manipulate the original array
// console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros) //concat will merge both arrays  into a single array it returns a new array and it will not manipulate the original arrays
console.log(allHeros)


//2nd method to merge two arrays is using spread operator

const allHeros2 = [...marvelHeros , ...dcHeros]
console.log(allHeros2)

const array = [1,2 ,[3,4,5] , [12, [67]]];

console.log(typeof array) //object

//we can use flat method to flatten the array

const array2 = array.flat(2) //flat(depth) //depth is optional parameter it will flatten the array upto the given depth // not manipulates the original array
console.log(array2)
console.log(array)


console.log(Array.isArray(array)) //true or false

console.log(Array.isArray("akash")) //false
console.log(Array.from("akash")) //it will convert string into array of characters

console.log(Array.from({
    "name":"akash",
    "age": 23
})) 
//return empty array because it will only convert iterable objects into array and object is not iterable so it will return empty array


let score = 100; 
 
let score2 = 200;

let score3 = 300;
console.log(Array.of(score , score2 , score3)) //it will create an  array from the given values return new array and it will not manipulate the original values