// Primitives

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 45980374037903445n


// Reference Types (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Spridermaan", "Ironmaan"];
let myObj = {
    name: "kasif",
    age:2

}

const myFunction = function(){
    console.log("Hello World");
    
}