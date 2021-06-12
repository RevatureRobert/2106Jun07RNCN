interface IObj<T> {
    fun: (arg?: string) => T
}

const obj:IObj<string> = {
    fun: function(name:string):string{
        return name.toUpperCase();
    }
}

const obj2:IObj<number> = {
    fun: function(n: string): number{
        console.log('this is cool');
        return 4;
    }
}

const fun2 = (): never => {
    throw new Error();
}