function assert(condition, message) {
    if (condition) {
        console.log(message)
    }
}


function Person() {
}

Person.prototype.dance = function () {
};

function Ninja() {
}

Ninja.prototype = {dance: Person.prototype.dance};

var ninja = new Ninja();
assert(ninja instanceof Ninja,  "ninja receives functionality from the Ninja prototype");
assert(ninja instanceof Person, "... and the Person prototype");
assert(ninja instanceof Object, "... and the Object prototype");

/**
 * instance of an object (object’s prototype)
 *      SubClass.prototype = new SuperClass();
 */

function Person() {
}

Person.prototype.dance = function () {
};

function Ninja() {
}

Ninja.prototype = new Person();
var ninja = new Ninja();
assert(ninja instanceof Ninja,  "ninja receives functionality from the Ninja prototype");
assert(ninja instanceof Person, "... and the Person prototype");
assert(ninja instanceof Object, "... and the Object prototype");