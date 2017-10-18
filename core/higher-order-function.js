/**
 * Created by vivek_000 on 18/01/2017.
 */

/****
 *
 *  A higher-order function is a function that can take another function as an argument, or that returns a function as a result.
 *
 * ****/

var handler = function(callback){
    console.info("parent function is called");
    if(callback && typeof callback === 'function'){
        callback();
    }
};

handler(function(){
    console.info("callback is called");
});