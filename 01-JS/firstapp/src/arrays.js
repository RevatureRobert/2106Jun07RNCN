// // // arrays
const arr = [
    "here is a string",
    55,
    undefined,
    null,
    {},
    console,
    console.log,
    Symbol(),
    Error,
  ];
  
  // // // use the square brackets to access the index of the array and assign new
  // // //      elements to the array
  // // console.log(arr[8]);
  // // arr[3]=17;
  // // console.log(arr[3]);
  // // arr[10] = 100
  // // console.log(arr[100]);
  // // arr[100]=10
  // // console.log(arr);
  
  // // const arr2 = []
  // // arr2[5] = 0
  // // console.log(arr2);
  
  // // const l1 = 1;
  // // // l1++
  // // const arr3 = [];
  // // arr3[4]=7;
  // // arr3[2]=10
  // // arr3 = [22,34,5];
  
  // // properties and functions
  
  // console.log(arr.length);
  
  // const res = arr.map(nameOfFunction);
  // console.log(res);
  
  // function nameOfFunction(element, index, array){
  //     if(typeof element === 'number' || typeof element === 'object'){
  //         return String(element) + " is a string now!!!"
  //     }
  //     return element;
  // }
  // // nameOfFunction();
  // // nameOfFunction('here');
  // // nameOfFunction(4,4,4,4,4,4,4,4,4,4,4,4,4,4);
  
  // res[15] = [3,6,['hey','no',['oh no',[undefined]]], [].fill('crap',0,3)];
  // console.log(res);
  
  // try {
  //     throw new TypeError('this is a new error')
  // } catch (err) {
  //     console.info(err.message);
  // }
  
  // for(let i = 0; i < arr.length; i++){
  //     console.log(arr[i]);
  // }
  function print(something) {
    console.log(something);
  }
  
  // arr.forEach(print)
  
  //* for of loop will grab the element
  // for(const i of arr){
  //     console.log(i);
  // }
  
  //* for in loop will grab the index
  // for (const i in arr) {
  //   console.log(i);
  // }
  
  // const arr5 = new Array(55);
  // console.log(arr5);
  