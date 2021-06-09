// function printAll(literalArray, operator1, operator2, result){
//     console.log(literalArray);
//     console.log(operator1);
//     console.log(operator2);
//     console.log(result);
//    }
//    a = 3;
//    b = 4;
//    printAll `Addition:  ${a} + ${b} = ${a+b}`;

const a = 3;
const b = 4;
const myString = String.raw`sum:\n ${a+b}`;
console.log(myString);