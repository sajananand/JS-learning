//infintite currying add(1)(3)(4)(7)()   output=> 15


const add = (num1) => {
  return (num2) => {
    if(num2) {   // end when empty parenthesis is encountered
      return add(num1 + num2);
    } else {
      return num1;
    }
  }
}

console.log(add(1)(3)(4)(7)());
