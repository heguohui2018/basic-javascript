// 箭头函数形式
// let func = (arg1,arg2 ,argN) =>expression
// 等价于
// let func = function (arg1,arg2,...,argM) {
// return expression;
// }
//

let sum = (a,b)=>a+b;
alert(sum(1,2));

// 等价于
// let sum = function (a,b) {
// 	return a+b;
// }


let clac = n =>n*2;
alert(clac());

// 等价于
// let clac = function (n) {
// 	return n*2;
// }
// alert(clac(3));
