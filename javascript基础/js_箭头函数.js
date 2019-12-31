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


// 没有参数，括号也需要保留
let sayHi = () =>alert("Hello!");
sayHi();


// 用箭头函数重写这个函数表达式
function ask(question,yes,no) {
	if (confirm(question))yes()
	else no();
}

ask(
	"Do you argree",
	function() {
		alert("you agreed.");
	},
	function() {
		alert("You canceled the execution");
	}
);

// 用箭头函数重写之后
function ask(question,yes,no) {
	if (confirm(question))yes()
	else no();
}
ask(
	"Do you argree",
	() => alert("you agreed."),
	() =>alert("You canceled the execution")
);
