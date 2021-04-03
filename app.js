
function calc(fn, x, y) {
  return fn(x, y);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

let rslt = calc(multiply, 2, 3);

console.log(rslt);
