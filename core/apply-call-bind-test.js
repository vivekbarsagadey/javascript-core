/**
 * Created by vivek_000 on 18/01/2017.
 */

var obj = {num : 2};

var addNumber = function(a,b,c){
    return this.num + a+b+c;
};

console.info("Call method uses check");
var val = addNumber.call(obj,1,2,3);
console.assert(val===8,"Sum is wrong");

console.info("Applay method uses check");
val = addNumber.apply(obj,[1,2,3]);
console.assert(val===8,"Sum is wrong");


console.info("Bind method uses check");
var binder = addNumber.bind(obj);
val = binder(1,2,3);
console.assert(val===8,"Sum is wrong");


