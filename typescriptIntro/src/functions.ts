interface IObj<T> {
    //fun:Function;
    //To declare function types:
    fun: (arg?:string) => T;
    //makes datatype optional
}


const obj:IObj<string> = {
    fun: function (name:string):string{
        return name.toUpperCase();
    }
}

const obj2:IObj<number> = {
    fun:function(cheese: string):number{
        console.log("This is cool");
        return cheese.length;
    }
}