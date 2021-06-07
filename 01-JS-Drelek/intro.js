// I like to think this is playing in the background: https://youtu.be/Yw6u6YkTgQ4
console.log("Hello, World!");

// const: constant, cannot be updated, block scoped.
// let: variable, can be updated but not re-declared, block scoped.
// var: variable, can be updated or re-declared, global scoped.

const age = 12;
const overAge = age >= 13;

if (overAge) {
    console.log("Shoo, foolish youngling");
} else {
    console.log("Welcome, fellow adult");
}