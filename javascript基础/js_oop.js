// 创建一个myNewObject对象
myNewObject = new Object();
myNewObject.info = "I am a new object"
// 跟对象添加属性,属性名为info，属性值为一个字符串

// 给对象添加方法，首先定义一个函数,然后付到对象上去
// 当把定义的函数付到方法时，只需要使用函数名即可
// 如果写成这样 myNewObject.showInfo = myFunc(),是错误的写法，这样会将myFunc函数的运行结果付给方法
// 我们的本意是需要将定义的方法和定义的函数进行关联
function myFunc() {
	alert(this.info);
};
myNewObject.showInfo=myFunc;

// 调用对象的方法
myNewObject.showInfo();








