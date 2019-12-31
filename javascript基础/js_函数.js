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















