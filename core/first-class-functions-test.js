/**
 * Created by vivek_000 on 18/01/2017.
 */
/****
 *
 *  functions are objects, it can be assigned as the value of a variable, and can be passed and returned just like any other reference variable
 *
 * ****/


/**** assigning function as variable ****/
var FirstClass = function(callback){
};


/**** function can initlize as object ****/
var firstClass = new FirstClass();



/**** function can initlize as object and passing function as arg ****/
var firstClass = new FirstClass(function(){

});



/**** function can initlize as object and passing function as arg and returning new function****/
var FirstClassReturnFun = function(callback){

    callback();

    return function(){
        console.info("Return function")
    }
};

var argFun = function(){
    console.info("callback function as arg")
};



new FirstClassReturnFun(argFun)();