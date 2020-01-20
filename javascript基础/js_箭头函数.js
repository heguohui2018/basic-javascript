// 箭头函数形式
// let func = (arg1,arg2 ,argN) =>expression
// 等价于
// let func = function (arg1,arg2,...,argM) {
// return expression;
// }
//

let sum = (a,b)=>a+b;
console.log( (sum(1,2)) );

// 等价于
// let sum = function (a,b) {
// 	return a+b;
// }


let clac = n =>n*2;
console.log(clac(4));

// 等价于
// let clac = function (n) {
// 	return n*2;
// }
// alert(clac(3));


// 没有参数，括号也需要保留
let sayHi = () =>console.log("Hello!");
sayHi();

