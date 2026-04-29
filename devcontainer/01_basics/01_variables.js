const accountId = 1445533
let accountEmail = "kasif@gmmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed
accountEmail = "nawed@gmail.com"
accountPassword = "5434233"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope andfunctional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

