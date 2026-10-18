const arr = [1,2,3,4,5,6,7,8,9,10]

const nums = arr.reduce( (acc , currval)=>{
    console.log(` acc :${acc} and currval: ${currval}`) 
return acc + currval
}  , 0 )

console.log(nums)