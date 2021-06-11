/*
ts supports access modifiers
    public(default), private, protected

also supports non access modifiers
    static(var belongs with the class)
*/

class Meadows{
    constructor(t1: number, t2:string){
        this.thing1 = t1;
        this.thing2 = t2;
    }
    //Private access modifier
    //private thing1;
    //private thing2;

    //static 
    thing1;
    //readonly refers so that it cannot be changed
    readonly thing2:string;
}

class MeadScub extends Meadows{
    constructor(t1:number, t2?:string){
        super(t1,t2);
    }
    print(){
        console.log(this.thing2);
    }
}

const md = new Meadows(4, 'hey');