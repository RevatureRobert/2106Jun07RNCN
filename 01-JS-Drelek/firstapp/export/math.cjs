// Uses the commonjs exporting pattern, module.exports. Functions exactly the same as Lua ModuleScripts.

const math = {}

math.add = function add(a, b) {
    return a+b;
}

math.subtract = function subtract(a, b){
    return a-b;
}

math.divide = function divide(a, b) {
    return a/b;
}

module.exports = math;