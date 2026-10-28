const user = {
    username: "kashif",
    loginCount: 8,
    sighedIn: true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username:${username}`); you have to use this otherwise you'll get undefined.

        // console.log(`Username:${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this // this is'nt imp.
}

const userOne = new User("kashif",12,true)
const userTwo = new User("nawed",11,false)

console.log(userOne.constructor);
// console.log(userTwo);
