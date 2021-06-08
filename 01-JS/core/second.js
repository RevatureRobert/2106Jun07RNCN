const object = {
  hello:1,
  name:"name"
}

const obj7 = Object.create(object);
obj7.hello = 2;
console.log(obj7.hello);
console.log(obj7.__proto__.hello);
obj7.__proto__.hello = 3
console.log(obj7.__proto__.hello);
console.log(obj7.hello);