// 函数关键字 function ,函数名:showMessage
function showMessage() {
	alert("hello world");
}


function showMessage() {
	let message = "hello ,I'm javascript";
	// 定义局部变量
	alert(message);
}
showMessage();



let userName = "jhon";
// 这是一个外部变量
function showMessage() {
	let message = "hello" + userName;
	alert(message);
}
showMessage();


let userName = "jhon";
// 这是一个外部变量
function showMessage() {
	let userName = "Bob"
	let message = "hello" + userName;
	alert(message);
}
showMessage();
// 当内部变量与外部变量同名是，内部变量会覆盖外部变量，

// from,text 是函数的两个参数
function showMessage(from,text) {
	alert(from+':'+text);
}
showMessage('Ann','hello!');
showMessage('Ann','What\'s up?');
// 函数调用的时候给定值会被复制到局部变量from和text参数里


function showMessage(from,text) {
	from = '*'+from+'*';
	alert(from+':'+text);
}

let from = 'Ann';
showMessage(from,"hello");
alert(from);
// 程序运行逻辑:首先将调用函数值拷贝到参数里,
			 // 然后是将外部变量from传递到局部变量from中的赋值语句中

// 函数调用时没有提供参数的值，函数的运行结果会出现: undefined
function showMessage(from,text) {
	alert(from+':'+text);
}
showMessage('Ann');

// 给参数设定默认的值,当参数的值未给定时会调用参数的默认值
function showMessage(from,text="no text giveen") {
	alert(from+':'+text);
}
showMessage('Ann');


function bookMessage(username,page=800) {
	alert(username+':'+page);
}
bookMessage('heguohui');


function sum(a,b) {
	return a+b;
}
let result = sum(1, 2);
alert(result);


// 返回a,b的最小值
function getMin(c,d) {
	if(c<d){
		return c;
	}else{
		return d;
	}
}
let result = getMin(1, 3);
alert(result);


// 计算x的n次方
function pow(x,n) {
	let result = x;
	
	for(let i=1;i<n;i++){
		result *= x;
	}
	
	return result;
}

let x = prompt("x?","");
let n = prompt("n?","");
if(n<1){
	alert('Power ${n} is not support ,use a positive integer')
}else{
	alert(pow(x, n));
}

