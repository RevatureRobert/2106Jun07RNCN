// Use the export keyword to export a function using esmodule.

export function add(a, b) {
    return a+b;
}

export function subtract(a, b){
    return a-b;
}

export function divide(a, b) {
    return a/b;
}

const math = {
    add,
    subtract,
    divide
}

export default math;