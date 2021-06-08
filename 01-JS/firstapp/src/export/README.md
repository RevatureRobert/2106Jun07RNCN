## Exporting
Nodejs imports and exports files as modules. modules are any js file and there are different types of exports. commonjs and esmodule exports. The syntax is going to be different and the type of import system can be defined inside the package.json for node to be configured for.

**COMMMONJS**
```JavaScript
 function add(a,b){
    return a+b;
}
module.exports = add;
```
**ESMODULE**
```JavaScript
export function add(a,b){
    return a+b;
}
```

One way to tell node how the file is exporting values, is to tell it in the package.json. Another way is with the file extension. Node will treat files ending with .cjs as a module exporting using commonjs exporting mechanism. Node will treat files ending with .mjs as a module using the esmodule exporting mechanism.
