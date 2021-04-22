
function calc(fn, x, y) {
	return fn(x, y);
}


function add(x, y) {
	 return x + y;
}


function multiply(x, y) {
	return x * y;
}


let x = 7, y = 4;
let result = calc(add, x, y);
// let result = calc(multiply, x, y);
console.log(result);
