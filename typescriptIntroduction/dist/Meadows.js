class Meadows {
    constructor(t1, t2) {
        this.thing1 = t1;
        this.thing2 = t2;
    }
    thing1;
    thing2;
}
class Mead extends Meadows {
    constructor(t1, t2) {
        super(t1, t2);
    }
    print() {
        console.log(this.thing2);
    }
}
