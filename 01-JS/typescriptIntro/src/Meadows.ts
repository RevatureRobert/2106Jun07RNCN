/**
 * ts supports access modifiers
 *      public (default), private, protected
 * also supports non access modifiers
 *      static, readonly
 * 
 * optional function parameters
 *      default params will make params optional
 *      ? will mark the param as optional
 */
class Meadows {
    constructor(protected thing1?:number, readonly thing2?:string, ...som:string[]){ }
}

class MeadSub extends Meadows{
    constructor(t1:number=8, t2:string=''){
        super(t1, t2);
    }
    print(){
        console.log(this.thing2);
    }
}

const md = new MeadSub();
md.print()
// console.log(md.thing2);