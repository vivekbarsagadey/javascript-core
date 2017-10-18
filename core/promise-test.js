/**
 * Created by vivek_000 on 18/01/2017.
 */

var promiseToCleanTheRoom = new Promise(function(resolve,reject){
    var isRoomCleaned = true;
    if(isRoomCleaned){
        resolve("Cleaned");
    }else{
        reject("Not Cleaned");
    }
});

var promiseToGift = new Promise(function(resolve,reject){
    resolve("Thanks, You will get gift ");
});

var promiseToPunishment   = new Promise(function(resolve,reject){
    resolve("Sorry, You will get punishment ");
});



promiseToCleanTheRoom.then(function(status){
    console.info("My room is "+status);
    return promiseToGift;
}).then(function(status){
    console.info(status);
}).catch(function(status){
    console.info("My room is "+status);
    return promiseToPunishment;
}).then(function (status){
    console.info(status);
});