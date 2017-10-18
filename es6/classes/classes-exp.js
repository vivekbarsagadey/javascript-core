/**
 * Created by vivek on 13/05/2017.
 */



class Aminal{
    constructor(name){
        this.name = name;
    }
}


class Dog extends Aminal{

    constructor({name,type}){
        super(name);
        this.type = type;
    }

    bark(){
        console.log(`My ${this.type} name is ${this.name}`)
    }

}

// using Destructuring
let myDao = new Dog({name:"flupy",type :"dog"});
myDao.bark();