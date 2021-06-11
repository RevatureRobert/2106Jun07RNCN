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
    thing1;
    thing2;
    constructor(thing1, thing2, ...som) {
        this.thing1 = thing1;
        this.thing2 = thing2;
    }
}
class MeadSub extends Meadows {
    constructor(t1 = 8, t2 = '') {
        super(t1, t2);
    }
    print() {
        console.log(this.thing2);
    }
}
const md = new MeadSub();
md.print();
// console.log(md.thing2);
