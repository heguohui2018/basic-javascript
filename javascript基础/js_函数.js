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

