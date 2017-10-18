/**
 * Created by vivek_000 on 18/01/2017.
 */

var promiseToCleanTheRoom = function (message){
    return  new Promise(function(resolve,reject){
        var isRoomCleaned = true;
        if(isRoomCleaned){
            resolve(message+ "Cleaned");
        }else{
            reject(message+ "Not Cleaned");
        }
    });
};

var promiseToGift = function (message){
    return new Promise(function(resolve){
        resolve(message + " Thanks, You will get gift ");
    });
};

var promiseToPunishment   =  function(message) {
    return new Promise(function (resolve) {
        resolve(message + " Sorry, You will get punishment ");
    });
};



promiseToCleanTheRoom("My room is ").then(function(status){
    return promiseToGift(status);
}).then(function(status){
    console.info(status);
}).catch(function(status){
    return promiseToPunishment(status);
}).then(function (status){
    console.info(status);
});

/***********  All task must execute parallel ***************/

Promise.all([promiseToCleanTheRoom("My room is "),promiseToGift(" hi")]).then(function(){
    console.info("All task is finished");
});

/***********  At least one task must execute parallel  ***************/

Promise.race([promiseToCleanTheRoom("My room is "),promiseToGift(" hi")]).then(function(){
    console.info("One of all task is finished");
});


