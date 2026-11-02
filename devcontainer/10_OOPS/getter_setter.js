class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

get email(){
    return `${this._email}kashif@123`
}
set email(value){
     this._email = value
}

    // get password(){
    //      return this._password.toUpperCase()
    // }
    get password(){
         return `${this._password}kashif`
    }

    set password(value){
        this._password = value
    }
}

const kashif = new User("kashif@.ai","abc")
console.log(kashif.password);
console.log(kashif.email);
