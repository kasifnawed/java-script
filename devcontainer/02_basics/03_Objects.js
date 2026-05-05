// Singleton 

// object literals


const mySym = Symbol("Key1")

const JsUser = {
    name : "kasif",
    age : 19,
    [mySym]:"myKey1",
    location : "delhi",
    email: "kasif@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);
// console.log(JsUser["age"]);

// console.log( JsUser[mySym]);




//  JsUser.email = "kasif@chatgpt.com"
// //  Object.freeze(JsUser)
//  JsUser.email = "kasif@refdf.com"
// // console.log(JsUser);


//============================Function====================

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
