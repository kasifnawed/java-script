const name = "Kasif"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String ('kasif-iieee')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('f'));



const newString = gameName.substring(0, 4) 
console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString)

const newStringOne = "   kasif    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kasif.com/kasif%20king"

console.log(url.replace('%20', '-'));
console.log(url.includes('kasif'))

console.log(gameName.split('_'))
