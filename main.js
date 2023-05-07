// #1

function func1(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

console.log(func1(5, 7));

// #2

function func2(fahrenheit) {
  const celsius = (5 / 9) * (fahrenheit - 32);
  if (typeof fahrenheit !== "number") {
    return false;
  } else {
    return celsius;
  }
}

console.log(func2(35));

// #3

// function func3(a, operation, b) {
//   // operation === "+", "-", "*", "/";
//   let oper1 = operation;
//   let value1 = a(operation)(b);

//   if ((typeof a, b !== "number")) {
//     return false;
//   } else if (oper1 !== operation) {
//     return false;
//   } else {
//     return value1;
//   }
// }

// console.log(func3(5 + 5));
