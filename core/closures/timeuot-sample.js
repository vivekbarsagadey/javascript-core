

function handleUser(){
    var user = { name : "test user"}

    function show() {
        console.log(user.name);
    }


    return {show : show}
}



var testHandleUser = handleUser;

var callback =  () => {
    testHandleUser().show()
}

setTimeout(callback, 1000);

//setInterval(callback, 1000);