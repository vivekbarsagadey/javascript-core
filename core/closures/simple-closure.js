function assert(condition, message){
    if(condition){
       console.log(message)
    }
}


var outerValue = 'ninja';
var later;
function outerFunction() {
    var innerValue = 'samurai';
    function innerFunction(paramValue) {
        assert(outerValue,"Inner can see the ninja.");
        assert(innerValue,"Inner can see the samurai.");
        assert(paramValue,"Inner can see the wakizashi.");
        assert(tooLate,"Inner can see the ronin.");
    }
    later = innerFunction;
}
assert(!tooLate,"Outer can't see the ronin.");
var tooLate = 'ronin';
outerFunction();
later('wakizashi');