// if 

// const isUserloggedIn = true
// const temperature = 50

// if (temperature < 50){
//    console.log(" less than 50");
// }else {
//     console.log(" greater than 50");
// }
// console.log("Execute");


//<, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(socre>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
//  console.log(`User power: ${power}`);



// const balance = 1000

// if(balance>500)console.log("test"),
// console.log("test2");


 
// const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard ){
 console.log("Allow to buy ");
}
if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged In");
}