const name = "akash"; 
const repoCount = 50; 

// console.log(name + repoCount + "value")

console.log(`helloo my name is ${name} and my repo count is ${repoCount} `) 

const  gamename = new String("akashraj"); 
console.log(gamename[0]) 
console.log(gamename.charAt(3))
console.log(gamename.length)
console.log(gamename.indexOf('r'))

console.log(gamename.trim()) // remove spaces

const s1 = gamename.replace('a' , 't'); //replace first a to t 
const s2 = gamename.replaceAll('a' ,'t') // replace all a to t
console.log(s2)
console.log(s1)

const newString = gamename.substring(0,5); 
console.log(newString)

const anotherString = gamename.slice(1 , 4)
console.log(anotherString)

const s3 = "akash -raj - shekhar"; 

console.log(s3.split("-"));