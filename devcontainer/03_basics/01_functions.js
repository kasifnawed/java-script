

function sayMyName(){
console.log("K");
console.log("A");
console.log("S");
console.log("H");
console.log("I");
console.log("F");

}
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumber(number1,number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2 
    
}

const result = addTwoNumber(3,6)
// console.log("Result: ",result);


function loginUserMessage(username = "sam"){
//     if(username === undefined){ //same result
// console.log("Please Enter a userame"); 
//          return
    if(!username ){
console.log("Please Enter a userame");
         return
}  
  return `${username} just logged in`
}
// console.log(loginUserMessage("kasif"))
// console.log(loginUserMessage(""))


function calculateCartPrice(val1, val2, ...num1){
 return num1
}
console.log(calculateCartPrice(200,445,564,423));

const user = {
    username : "kasif",
    prices :199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username } and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:339
})

const myNewArray = [200,300,400]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,600]));
