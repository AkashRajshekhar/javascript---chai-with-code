//for 
const Array = [1,3,53,7,67,8,34,6]

for(let i = 0; i<Array.length ; i++){ 
    console.log(Array[i]);
    if(Array[i] == 34){ 
        console.log("34 is best "); 
    }
    else{ 
        console.log("normal")
    }
}


//breal and continue
for(let i =1 ;i <=20; i++){ 
    if(i==15){ 
        console.log("detected 15");
        break
    }
    if(i == 5){ 
        console.log("5 detected "); 
        continue //skips its 
    }
    console.log(`value of is ${i}`);

}