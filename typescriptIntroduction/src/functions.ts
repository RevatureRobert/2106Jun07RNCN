interface IObj {
    fun: (n: string) => string|void
}

const obj:IObj = {
    fun: function (name: string): string{
        return name.toUpperCase();
    }
}

const obj2: IObj = {
    fun: function(name: string): void{
        console.log(`What's good ${name}`);
    }
}