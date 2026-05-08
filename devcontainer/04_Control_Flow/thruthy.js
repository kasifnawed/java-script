const userEmail = []

if (userEmail) {
    console.log("get user email");   
}
else{
    console.log("don't get user email");
}

//falsy value
// false, 0, -0, BigInt0n, "", null, undefined, NaN,

//thruthy value
// "0", 'false', " ", [], {}, function(){},


// if (userEmail.length === 0 ) {
//     console.log("Array is empty");
// }



const emptyObj = {}
 
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}
//+++++++Nullish Coalesicing Operator (??): null defined

let val1;

// val1 = 5 ?? 10
// // val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1);
 
val1 = null ?? 10 ?? 15
// console.log(val1); // he took who came first

//Terniry Operator

// condition ? true : false
 
const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");

