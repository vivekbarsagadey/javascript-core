/**
 * Created by vivek_000 on 18/01/2017.
 */

var obj =[ { name: "a1" ,age  : 20 , group : "A"},
    { name: "a2" ,age  : 20 , group : "A"},
    { name: "a3" ,age  : 22 , group : "A"},
    { name: "b1" ,age  : 22 , group : "B"},
    { name: "b2" ,age  : 21 , group : "B"}];


console.info("Adding new group into old");
obj.copyWithin(2,0);
console.assert(obj.length === 5, "Value is not applyed");
