export default function sum(a : number, b : number){
  return a + b;
}

// This is intentionally untested to illustrate the result 
// in jest w/ --coverage flag.
export function helper(){
  console.log('Helper - Unchecked Code');
}