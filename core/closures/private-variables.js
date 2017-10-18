function assert(condition, message){
    if(condition){
        console.log(message)
    }
}


function Ninja() {
    var feints = 0;
    this.getFeints = function(){
        return feints;
    };
    this.feint = function(){
        feints++;
    };
}
var ninja = new Ninja();
ninja.feint();
assert(ninja.getFeints() == 1,"We're able to access the internal feint count.");
assert(ninja.feints === undefined,"And the private data is inaccessible to us.");