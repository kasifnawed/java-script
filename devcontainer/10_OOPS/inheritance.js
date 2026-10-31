class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Treacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new coure was added by ${this.username}`);
        
    }
}
const chai = new Treacher("chai","chai@.com","123")
chai.logMe()

const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai instanceof Treacher);
