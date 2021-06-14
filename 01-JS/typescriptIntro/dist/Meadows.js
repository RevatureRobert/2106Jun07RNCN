/**
 * ts supports access modifiers
 *    public (default), private, protected
 * also supports non-access modifiers
 *    static: belongs to class, not an instance of the class
 *            (all instances share this variable; no instance actually needed)
 *    readonly: cannot be changed ("final")
 * optional parameters may be indicated with a ?
 *    example   t2?: string
 */
// class Meadows{
//   constructor(t1: number, t2: string){
//     this.thing1 = t1;
//     this.thing2 = t2;
//   }
//   thing1;
//   thing2;
// }
class Meadows {
    thing1;
    thing2;
    constructor(thing1, thing2) {
        this.thing1 = thing1;
        this.thing2 = thing2;
    }
}
class MeadSub extends Meadows {
    constructor(t1, t2) {
        super(t1, t2);
    }
    print() {
        console.log(this.thing2);
    }
}
const md = new MeadSub(4, 'hey');
md.print();