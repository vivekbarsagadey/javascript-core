/**
 * Created by vivek_000 on 18/01/2017.
 */
var obj =[ { name: "a1" ,age  : 20 , group : "A"},
    { name: "a2" ,age  : 20 , group : "A"},
    { name: "a3" ,age  : 22 , group : "A"},
    { name: "b1" ,age  : 22 , group : "B"},
    { name: "b2" ,age  : 21 , group : "B"}];

var iterator = obj.entries();
console.info(iterator.next().value);
console.info(iterator.next().value);
console.info(iterator.next().value);
console.info(iterator.next().value);
console.info(iterator.next().value);
console.info(iterator.next().value);
