/**
 * Created by vivek on 13/05/2017.
 */
const myObservable = Rx.Observable.create(observer => {
    try{
        observer.onNext("************ start *************");
        observer.onNext("foo");
        observer.onNext('bar');
        observer.onCompleted();
    }catch (e){
        observer.onError(e)
    }

    // this is callback, called after dispose method call or after observer complete
    return function () {
        console.log("Dispose or onCompleted method called......");
    }

});

// subscribe

const nextHandler = value=>{console.log(value)};
const errorHandler = err=>{console.error(`Something went wrong: ${err.message}`, err)};
const doneHandler = ()=>{console.log("************* Final ******************")};



const sub = myObservable.subscribe(nextHandler,errorHandler,doneHandler);

/*
window.setTimeout(()=>{
    "use strict";
    sub.dispose();
},10000);
*/

// simple way to create Observable as argument

const dataObservable = Rx.Observable.of('foo', 'bar','last');
dataObservable.subscribe(nextHandler,errorHandler,doneHandler);


// simple way to create Observable as array
Rx.Observable.from([1,2,3]).subscribe(nextHandler,errorHandler,doneHandler);


const obs = Rx.Observable.of(42,56,89);
obs.forEach(x => console.log(x));

// finding age more than 50 year old
obs.filter(x => x > 50).map((x)=>{ return `The age "more than 50 years" is : ${x} years` }).subscribe(nextHandler,errorHandler,doneHandler);



// Externally produce new events.

const myExternallyObservable = new Rx.Subject();
myExternallyObservable.subscribe(nextHandler,errorHandler,doneHandler);

myExternallyObservable.onNext('foo');
myExternallyObservable.onNext('bar');