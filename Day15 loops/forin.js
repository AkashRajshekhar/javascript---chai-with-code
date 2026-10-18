//on onjects
const obj = {
  js: "javascript",
  cpp: "c++",
  py: "python",
};

for (const key in obj) {
  console.log(`${key} shortcut is for ${obj[key]}`);
}


//on arrays

const language = ["js" , "cpp" , "py"]

for (const key in language) { //give keys or index
   console.log(key);
   console.log(language[key])  //gives values at keys 
   
    
    
}

//map

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("EN", "England");

console.log(map);

for (const key in map) { //map is not iterable  it shows nothing 
    console.log(key)
}