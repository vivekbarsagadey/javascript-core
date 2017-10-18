/**
 * Created by vivek on 16/05/2017.
 */

let name = "admin";
let age = 30;
let user = { name, age };

console.log(`user name is ${user.name}  and age is ${user.age}`);

//Computed Property Names
function getPro(){
    "use strict";
    return "group"
}

user[getPro() + "-type"] = "admin";
console.log(`user name is ${user.name}  and age is ${user.age} and group type ${user['group-type']}`);

// generator function
var obj = {
    *quux (x, y) {
        console.log("..quux..",x,y)
    }
}


console.log(`quux called`,obj.quux(1,2));