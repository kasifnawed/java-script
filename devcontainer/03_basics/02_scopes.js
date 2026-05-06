
let a = 300

if(true){
let a = 10
const b = 20
console.log("INNER: ",a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//}    


//  console.log(a);
// console.log(b);

function one(){
    const username = "kasif"

    function two(){
        const website = "youtube"
        
        console.log(username);
        
    }
    // console.log(website);
    
two()

}
// one()

if(true){
    const username = "kasif"
    if(username === "kasif"){
        const website = " Youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

//+++++++++++++++++++++++Interesting++++++++++++++

// addone(5) didnt get error

function addone(num){
    return num + 1
}
addone(5)


// addTwo(5)   get an error
const addTwo = function(num){
    return num + 2
}
addTwo(5)