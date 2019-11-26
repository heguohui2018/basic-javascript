// 带有一个参数的函数对应数学中一元方程
function foo(x) {
	
}

// 带有两个参数的函数对应数学中二元方程
function foo(x,y) {
}

var a = 3;
foo(a,a*2);

// 函数可以被命名为变量
const add = function (x,y) {
	return x+y;
};

// 函数作为参数
// double 是 map函数的参数
const  base = [1,2,3];
const double = function(num) {
	return num*2;
};
const result = base.map(double);

// 函数可作为程序的返回值
function currying(fn,...ahead) {
	return function (...behind) {
		return function(...ahead, ...behind) {
		};
	};
	
	const add = function(x,y) {
		return x+y;
	};
}
const add2 = currying(add,2);
const num = 1;
const result = add2(add2(add2(num)));

// 函数作为数据结构
const add = function(x,y) {
	return x+y;
}
const obj = {
	add:add;
}
const ary = [add];
