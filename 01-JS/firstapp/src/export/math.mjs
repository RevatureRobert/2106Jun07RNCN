// esmodule exporting

export function add(a,b){
    return a+b;
}

export function subtract(a,b){
    return a-b;
}

export function divide(a,b){
    return a/b;
}

export const VERSION = '1.0.3'

// this is a default export.
export default function () {
    console.log("this is the default export");
}
