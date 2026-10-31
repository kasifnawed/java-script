class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`);
        
    }
  static  createId(){
        return `123`
    }
}
 
const kashif = new User("kashif")
// console.log(kashif.createId());


class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone","i@.com")

iphone.logMe()
