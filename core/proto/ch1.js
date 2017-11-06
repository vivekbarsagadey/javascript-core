function assert(condition, message) {
    if (condition) {
        console.log(message)
    }
}


function Ninja() {
    this.swung = true;
    this.swingSword = function () {
        return this.swung;
    }
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swung;
};

assert(ninja.swingSword(), "Method exists, even out of order.");
assert(typeof ninja == "object", "The type of the instance is object.");
assert(ninja instanceof Ninja, "instanceof identifies the constructor.");
assert(ninja.constructor == Ninja, "The ninja object was created by the Ninja function.");