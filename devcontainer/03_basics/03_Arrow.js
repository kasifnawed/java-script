const user ={
    username:"kasif",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kasif"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "kasif"
//     console.log(this.username);
    
// }

const chai = ()=>{
    let username = "kasif"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }
                                             //as it is run karega
// const addTwo = (num1, num2) =>   num1+num2
// const addTwo = (num1, num2) =>  ( num1+num2)

const addTwo = (num1, num2) =>  ({username:"kasif"})//object {} is imp otherwise code is not gonna run


console.log(addTwo(3,4))