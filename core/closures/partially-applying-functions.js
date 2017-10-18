// we can prefill arguments to a function before it’s even executed
function assert(condition, message){
    if(condition){
        console.log(message)
    }
}


var elements = "val1,val2,val3".split(/,\s*/);
console.log("String’s split()" , elements);


Function.prototype.partial = function() {
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function() {
        var arg = 0;
        for (var i = 0; i < args.length && arg < arguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = arguments[arg++];
            }
        }
        return fn.apply(this, args);
    };
};

String.prototype.csv = String.prototype.split.partial(/-\s*/);
var results = ("Mugan- Jin- Fuu").csv();

console.log("String’s partial" , results);


var delay = setTimeout.partial(undefined, 1000);
delay(function(){
    assert(true, "A call to this function will be delayed 10 ms.");
});