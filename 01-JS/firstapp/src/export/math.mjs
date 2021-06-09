/**
 * ESmodule exporting pattern
 */

export function add(a, b){
    return a + b;
}
export function subtract(a, b){
    return a - b;
}
export function divide(a,b){
    return a/b;
}

export default function(){
    console.log("this is the default export");
}