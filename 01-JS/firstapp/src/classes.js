/**
 * Class Sample
 */

 class Sample{
    constructor(name){
        this._name = name;
    }
    name = (function(n){
        let _privName = n;
        return [
            function(){
                return _privName;
            },
            function (val){
                _privName = val;
            }
        ]
    })(this._name);
}

const sample = new Sample('something special');

class GetAndSet{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}
const gas = new GetAndSet('something');
// console.log(gas.name);
gas.name = 'something new';
// console.log(gas.name);